const slot = document.getElementById("slot");
const mainStat = document.getElementById("mainStat");
const mainStatBox = document.getElementById("mainStatBox");


// Update main stats whenever artifact changes
slot.addEventListener("change", updateMainStats);


function updateMainStats() {

    let stats = [];


    if (slot.value === "flower") {

        mainStatBox.style.display = "none";

    }


    else if (slot.value === "feather") {

        mainStatBox.style.display = "none";

    }


    else {

        mainStatBox.style.display = "block";


        if (slot.value === "sands") {

            stats = [
                "ATK%",
                "HP%",
                "DEF%",
                "Energy Recharge",
                "Elemental Mastery"
            ];

        }


        if (slot.value === "goblet") {

            stats = [
                "ATK%",
                "HP%",
                "DEF%",
                "Elemental Mastery",
                "Pyro DMG Bonus",
                "Hydro DMG Bonus",
                "Electro DMG Bonus",
                "Cryo DMG Bonus",
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
                "Healing Bonus",
                "ATK%",
                "HP%",
                "DEF%",
                "Elemental Mastery"
            ];

        }


        mainStat.innerHTML = "";


        stats.forEach(function(stat){

            let option = document.createElement("option");

            option.textContent = stat;
            option.value = stat;

            mainStat.appendChild(option);

        });

    }

}


// Initial setup
updateMainStats();



// Temporary rating button
function rateArtifact(){

    let artifactSlot = slot.value;

    let stat = mainStat.value;


    if(artifactSlot === "flower"){
        stat = "HP";
    }


    if(artifactSlot === "feather"){
        stat = "ATK";
    }


    document.getElementById("result").innerHTML =
    "Checking: " + artifactSlot + "<br>Main Stat: " + stat;

}