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

const setMenu = document.getElementById("set");

artifactSets.forEach(set => {

    const option = document.createElement("option");

    option.value = set;
    option.textContent = set;

    setMenu.appendChild(option);

});

const artifactSets = [

"A Day Carved From Rising Winds",
"Aubade of Morningstar and Moon",
"Archaic Petra",
"Blizzard Strayer",
"Bloodstained Chivalry",
"Celestial Gift",
"Crimson Witch of Flames",
"Deepwood Memories",
"Desert Pavilion Chronicle",
"Disenchantment in Deep Shadow",
"Echoes of an Offering",
"Emblem of Severed Fate",
"Finale of the Deep Galleries",
"Flower of Paradise Lost",
"Fragment of Harmonic Whimsy",
"Gilded Dreams",
"Gladiator's Finale",
"Golden Troupe",
"Heart of Depth",
"Husk of Opulent Dreams",
"Lavawalker",
"Long Night's Oath",
"Maiden Beloved",
"Marechaussee Hunter",
"Night of the Sky's Unveiling",
"Nighttime Whispers in the Echoing Woods",
"Noblesse Oblige",
"Nymph's Dream",
"Obsidian Codex",
"Ocean-Hued Clam",
"Pale Flame",
"Retracing Bolide",
"Scroll of the Hero of Cinder City",
"Shimenawa's Reminiscence",
"Silken Moon's Serenade",
"Song of Days Past",
"Tenacity of the Millelith",
"Thundering Fury",
"Thunder Soother",
"Unfinished Reverie",
"Vermillion Hereafter",
"Viridescent Venerer",
"Vourukasha's Glow",
"Wanderer's Troupe"

];
function rateArtifact() {

    if (!window.characters) {

        document.getElementById("result").innerHTML =
        "<h2>Error</h2><p>Character data failed to load.</p>";

        return;

    }
const results = [];

characters.forEach(build => {

    let score = 0;
window.addEventListener("DOMContentLoaded", () => {

    const setMenu = document.getElementById("set");

    artifactSets.forEach(set => {

        const option = document.createElement("option");

        option.value = set;
        option.textContent = set;

        setMenu.appendChild(option);

    });

});

    // -----------------------------
    // Artifact Set
    // -----------------------------

    const selectedSet = document.getElementById("set").value;

    let setFound = false;

    build.sets.forEach(set => {

        if (set.name === selectedSet) {

            score += set.score;
            setFound = true;

        }

    });

    // OPTIONAL:
    // Uncomment this if you ONLY want to show characters
    // that actually use the selected artifact set.

    // if (!setFound) return;


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

    if (!priorities) return;

    const index = priorities.indexOf(selectedMain);

    // Skip characters that don't want this main stat
    if (index === -1) return;

    if (index === 0)
        score += 20;
    else if (index === 1)
        score += 17;
    else if (index === 2)
        score += 15;



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

        if (build.substats[stat]) {

            subScore += build.substats[stat] * value;

        }

    });

    score += subScore*2;



    let grade = "D";

    if (score >= 175)
        grade = "SS";

    else if (score >= 150)
        grade = "S";

    else if (score >= 120)
        grade = "A";

    else if (score >= 100)
        grade = "B";

    else if (score >= 80)
        grade = "C";
    else grade = "D";



    results.push({

        character: build.character,
        build: build.name,
        score: score,
        grade: grade

    });

});



// Highest score first

results.sort((a, b) => b.score - a.score);



// Show top 10

const top10 = results.slice(0, 10);



document.getElementById("result").innerHTML =
top10.map((result, i) => `

<div class="resultCard">

<h3>${i + 1}. ${result.character}</h3>

<p>

${result.build}

<br><br>

Score: <strong>${result.score}</strong>

<br>

Grade: <strong>${result.grade}</strong>

</p>

</div>

`).join("");}