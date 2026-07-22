function rateArtifact() {

    if (!window.characters) {

        document.getElementById("result").innerHTML =
        "Character data failed to load.";

        return;

    }


    // TESTING WITH NEUVILLETTE ONLY
    const build = characters[0];


    let score = 0;


    // =========================
    // ARTIFACT SET SCORE (25)
    // =========================

    const set = document.getElementById("set").value;


    let setScore = 0;


    build.sets.forEach((artifactSet, index) => {

        if (artifactSet.name === set) {

            if (index === 0) {
                setScore = 25;
            }

            else if (index === 1) {
                setScore = 22;
            }

            else if (index === 2) {
                setScore = 18;
            }

            else {
                setScore = 15;
            }

        }

    });


    score += setScore;



    // =========================
    // MAIN STAT SCORE (25)
    // =========================


    const slot = document.getElementById("slot").value;
    const mainStat = document.getElementById("mainStat").value;


    let mainScore = 0;


    if (build.mainStats[slot]) {

        const possibleStats = build.mainStats[slot];


        const position = possibleStats.indexOf(mainStat);


        if (position === 0) {

            mainScore = 25;

        }

        else if (position === 1) {

            mainScore = 18;

        }

        else if (position === 2) {

            mainScore = 12;

        }

    }


    score += mainScore;




    // =========================
    // SUBSTAT SCORE (50)
    // =========================


    const substats = document.querySelectorAll(".substat");
    const values = document.querySelectorAll(".subValue");


    let subScore = 0;


    substats.forEach((statInput, index)=>{


        const stat = statInput.value;
        const value = Number(values[index].value);


        if (!stat || !value) {
            return;
        }


        const weight = build.substats[stat];


        if (weight) {

            subScore += value * weight;

        }


    });


    // convert into /50

    subScore = subScore / 5;


    if (subScore > 50) {

        subScore = 50;

    }


    if (subScore < 0) {

        subScore = 0;

    }


    score += subScore;



    // =========================
    // FINAL SCORE
    // =========================


    score = Math.round(score);


    if (score > 100) {

        score = 100;

    }



    let grade;


    if (score >= 90) {

        grade = "SSS";

    }

    else if (score >= 80) {

        grade = "S";

    }

    else if (score >= 70) {

        grade = "A";

    }

    else if (score >= 60) {

        grade = "B";

    }

    else if (score >= 40) {

        grade = "C";

    }

    else {

        grade = "D";

    }




    document.getElementById("result").innerHTML = `

        <h2>${build.name}</h2>

        <h3>${score}/100</h3>

        <p>
        Grade: ${grade}
        </p>

    `;

}