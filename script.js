// ==============================
// Artifact Main Stat Controller
// ==============================


const slot = document.getElementById("slot");
const mainStat = document.getElementById("mainStat");
const mainStatBox = document.getElementById("mainStatBox");



slot.addEventListener(
    "change",
    updateMainStats
);



function updateMainStats(){


    let stats = [];


    if(slot.value === "flower"){

        mainStatBox.style.display="none";
        return;

    }


    if(slot.value === "feather"){

        mainStatBox.style.display="none";
        return;

    }



    mainStatBox.style.display="block";



    if(slot.value==="sands"){

        stats=[

            "HP%",
            "ATK%",
            "DEF%",
            "Energy Recharge",
            "Elemental Mastery"

        ];

    }



    if(slot.value==="goblet"){

        stats=[

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




    if(slot.value==="circlet"){

        stats=[

            "Crit Rate",
            "Crit DMG",
            "Healing Bonus",
            "HP%",
            "ATK%",
            "DEF%",
            "Elemental Mastery"

        ];

    }



    mainStat.innerHTML="";



    stats.forEach(stat=>{


        let option=document.createElement("option");

        option.value=stat;

        option.textContent=stat;


        mainStat.appendChild(option);


    });


}



updateMainStats();





// ==============================
// Artifact Scoring
// ==============================


function rateArtifact(){



    let results=[];



    for(let build of characters){



        let score=0;



        // ----------------------
        // Artifact Set Score
        // ----------------------


        let currentSet =
        document.getElementById("set").value;



        let setData =
        build.sets.find(
            s=>s.name===currentSet
        );



        if(setData){

            score += setData.score * 0.30;

        }





        // ----------------------
        // Main Stat Score
        // ----------------------


        let currentMain;



        if(slot.value==="flower"){

            currentMain="HP";

        }


        else if(slot.value==="feather"){

            currentMain="ATK";

        }


        else{

            currentMain=
            mainStat.value;

        }




        let mainScore =
        getMainStatScore(
            build,
            slot.value,
            currentMain
        );



        score += mainScore * 0.30;







        // ----------------------
        // Substat Score
        // ----------------------


        let subScore=0;



        let subs =
        document.querySelectorAll(".substat");



        subs.forEach((select,index)=>{


            let stat =
            select.value;


            let value =
            document.querySelectorAll(".subValue")[index].value;



            if(build.substats[stat]){


                let weight =
                build.substats[stat];



                let roll =
                Number(value)||0;



                subScore +=
                weight * roll;


            }



        });



        score += normalizeSubstats(subScore);





        // Cap score

        if(score>100){

            score=100;

        }



        results.push({

            name:build.name,

            character:build.character,

            score:Math.round(score)

        });



    }





    // Sort

    results.sort(
        (a,b)=>b.score-a.score
    );



    displayResults(
        results.slice(0,10)
    );



}







// ==============================
// Main Stat Checking
// ==============================



function getMainStatScore(
    build,
    slot,
    stat
){



    if(
        !build.mainStats[slot]
    ){

        return 0;

    }



    let possible =
    build.mainStats[slot];



    let position =
    possible.indexOf(stat);



    if(position===0){

        return 100;

    }



    if(position===1){

        return 85;

    }



    if(position===2){

        return 70;

    }



    return 40;



}








// ==============================
// Substat Normalization
// ==============================


function normalizeSubstats(value){


    if(value>=80){

        return 40;

    }


    if(value>=50){

        return 30;

    }


    if(value>=30){

        return 20;

    }


    return value/2;


}








// ==============================
// Display Results
// ==============================



function displayResults(results){



    let html =
    "<h2>Top Characters</h2>";



    results.forEach(
    (result,index)=>{


        let grade;



        if(result.score>=90){

            grade="SSS";

        }

        else if(result.score>=80){

            grade="S";

        }

        else if(result.score>=70){

            grade="A";

        }

        else if(result.score>=60){

            grade="B";

        }

        else{

            grade="C";

        }





        html += `

        <div class="resultCard">

        <h3>
        ${index+1}. ${result.name}
        </h3>

        <p>
        ${result.character}
        <br>
        ${result.score}/100
        <br>
        Grade: ${grade}
        </p>

        </div>

        `;


    });



    document.getElementById("result").innerHTML=html;



}