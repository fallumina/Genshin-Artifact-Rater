// ==============================
// Genshin Artifact Rater
// ==============================

const slot = document.getElementById("slot");
const mainStat = document.getElementById("mainStat");
const mainStatBox = document.getElementById("mainStatBox");

function updateMainStats() {

    mainStat.innerHTML = "";

    if (slot.value === "flower" || slot.value === "feather") {
        mainStatBox.style.display = "none";
        return;
    }

    mainStatBox.style.display = "block";

    let stats = [];

    if (slot.value === "sands") {

        stats = [
            "HP%",
            "ATK%",
            "DEF%",
            "Energy Recharge",
            "Elemental Mastery"
        ];

    }

    if (slot.value === "goblet") {

        stats = [
            "HP%",
            "Hydro DMG Bonus",
            "Pyro DMG Bonus",
            "Cryo DMG Bonus",
            "Electro DMG Bonus",
            "Anemo DMG Bonus",
            "Geo DMG Bonus",
            "Dendro DMG Bonus",
            "Physical DMG Bonus"
        ];

    }

    if (slot.value === "circlet") {

        stats = [
            "Crit Rate",
            "Crit DMG",
            "HP%",
            "ATK%",
            "DEF%",
            "Healing Bonus",
            "Elemental Mastery"
        ];

    }

    stats.forEach(stat => {

        let option = document.createElement("option");
        option.value = stat;
        option.textContent = stat;
        mainStat.appendChild(option);

    });

}

slot.addEventListener("change", updateMainStats);

updateMainStats();

function rateArtifact() {

    if (!window.characters) {

        document.getElementById("result").innerHTML =
        "<h2>Error</h2><p>Character data failed to load.</p>";

        return;

    }

    const build = characters[0];

    let score = 0;

    // -----------------------------
    // Artifact Set
    // -----------------------------

    const selectedSet = document.getElementById("set").value;

    build.sets.forEach(set => {

        if (set.name === selectedSet) {

            score += set.score * 0.3;

        }

    });

    // -----------------------------
    // Main Stat
    // -----------------------------

    let selectedMain;

    if (slot.value === "flower") {

        selectedMain = "HP";

    }

    else if (slot.value === "feather") {

        selectedMain = "ATK";

    }

    else {

        selectedMain = mainStat.value;

    }

    const priorities = build.mainStats[slot.value];

    if (priorities) {

        const index = priorities.indexOf(selectedMain);

        if (index === 0) score += 30;
        else if (index === 1) score += 25;
        else if (index === 2) score += 20;

    }

    // -----------------------------
    // Substats
    // -----------------------------
// -----------------------------
// Substats
// -----------------------------

const substats = document.querySelectorAll(".substat");
const values = document.querySelectorAll(".subValue");

let subScore = 0;

substats.forEach((item, i) => {

    const stat = item.value;
    const value = Number(values[i].value);

    if (!value) return;

    const weight = build.substats[stat];

    if (weight === undefined) return;


    // Convert stat amount into approximate artifact rolls

    let rolls = 0;

    switch(stat) {

        case "Crit Rate":
            rolls = value / 3.9;
            break;

        case "Crit DMG":
            rolls = value / 7.8;
            break;

        case "HP%":
            rolls = value / 5.8;
            break;

        case "ATK%":
            rolls = value / 5.8;
            break;

        case "DEF%":
            rolls = value / 7.3;
            break;

        case "Energy Recharge":
            rolls = value / 5.5;
            break;

        default:
            rolls = 1;

    }


    subScore += rolls * weight;

});


// Substats are worth 50 points
subScore = subScore * 5;


// Allow bad rolls to reduce score
if (subScore > 50) {
    subScore = 50;
}

if (subScore < -30) {
    subScore = -30;
}


score += subScore;

    document.getElementById("result").innerHTML = `

        <div class="resultCard">

            <h3>${build.name}</h3>

            <p>

                Character: ${build.character}

                <br><br>

                Score: <strong>${score}/100</strong>

                <br>

                Grade: <strong>${grade}</strong>

            </p>

        </div>

    `;

}