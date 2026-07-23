// =====================================
// Genshin Artifact Rater
// Script Engine
// =====================================


// Wait until everything loads
document.addEventListener("DOMContentLoaded", () => {


    const slot = document.getElementById("slot");
    const mainStat = document.getElementById("mainStat");
    const mainStatBox = document.getElementById("mainStatBox");


    // -----------------------------
    // Main stat dropdown controller
    // -----------------------------


    function updateMainStats(){


        let stats = [];


        if(slot.value === "flower"){

            mainStatBox.style.display = "none";
            return;

        }


        if(slot.value === "feather"){

            mainStatBox.style.display = "none";
            return;

        }


        mainStatBox.style.display = "block";



        if(slot.value === "sands"){

            stats = [
                "HP%",
                "ATK%",
                "DEF%",
                "Energy Recharge",
                "Elemental Mastery"
            ];

        }



        if(slot.value === "goblet"){

            stats = [

                "HP%",
                "ATK%",
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



        if(slot.value === "circlet"){

            stats = [

                "Crit Rate",
                "Crit DMG",
                "Healing Bonus",
                "HP%",
                "ATK%",
                "DEF%",
                "Elemental Mastery"

            ];

        }



        mainStat.innerHTML = "";


        stats.forEach(stat => {

            let option = document.createElement("option");

            option.value = stat;
            option.textContent = stat;

            mainStat.appendChild(option);

        });


    }



    slot.addEventListener(
        "change",
        updateMainStats
    );


    updateMainStats();



    // -----------------------------
    // Rate artifact button
    // -----------------------------


    window.rateArtifact = function(){



        if(typeof characters === "undefined"){

            document.getElementById("result").innerHTML =
            `
            <h2>Error</h2>
            <p>
            Character database failed to load.
            </p>
            `;

            return;

        }



        let results = [];



        let selectedSet =
        document.getElementById("set").value;



        let selectedMain;



        if(slot.value === "flower"){

            selectedMain = "HP";

        }

        else if(slot.value === "feather"){

            selectedMain = "ATK";

        }

        else {

            selectedMain = mainStat.value;

        }




        let substats =
        document.querySelectorAll(".substat");


        let subValues =
        document.querySelectorAll(".subValue");





        // Check every build


        characters.forEach(build => {



            let score = 0;



            // -------------------------
            // Artifact Set Score
            // -------------------------


            if(build.sets){


                let set =
                build.sets.find(
                    s => s.name === selectedSet
                );


                if(set){

                    score +=
                    set.score * 0.30;

                }


            }





            // -------------------------
            // Main Stat Score
            // -------------------------


            if(build.mainStats){


                let possible =
                build.mainStats[slot.value];



                if(possible){


                    let index =
                    possible.indexOf(selectedMain);



                    if(index === 0){

                        score += 30;

                    }

                    else if(index === 1){

                        score += 25;

                    }

                    else if(index === 2){

                        score += 20;

                    }

                    else if(index > -1){

                        score += 10;

                    }


                }

            }







            // -------------------------
            // Substat Score
            // -------------------------


            let subScore = 0;



            substats.forEach((item,index)=>{


                let stat =
                item.value;



                let value =
                Number(subValues[index].value) || 0;



                if(
                    build.substats &&
                    build.substats[stat]
                ){


                    subScore +=
                    build.substats[stat] *
                    value;


                }


            });





            // Convert substats to points

            if(subScore >= 150){

                score += 40;

            }

            else if(subScore >= 100){

                score += 30;

            }

            else if(subScore >= 50){

                score += 20;

            }

            else {

                score += subScore / 5;

            }





            if(score > 100){

                score = 100;

            }



            results.push({

                name: build.name,

                character: build.character,

                score: Math.round(score)

            });



        });







        // Sort highest first

        results.sort(
            (a,b)=>b.score-a.score
        );



        displayResults(
            results.slice(0,10)
        );


    };





    // -----------------------------
    // Display leaderboard
    // -----------------------------


    function displayResults(results){


        let html =
        "<h2>Top Characters</h2>";



        results.forEach((result,index)=>{


            let grade;



            if(result.score >= 90){

                grade = "SSS";

            }

            else if(result.score >= 80){

                grade = "S";

            }

            else if(result.score >= 70){

                grade = "A";

            }

            else if(result.score >= 60){

                grade = "B";

            }

            else {

                grade = "C";

            }



            html += `

            <div class="resultCard">

                <h3>
                ${index + 1}. ${result.name}
                </h3>

                <p>
                ${result.character}
                <br>
                Score: ${result.score}/100
                <br>
                Rank: ${grade}
                </p>

            </div>

            `;


        });



        document.getElementById("result").innerHTML = html;


    }



});