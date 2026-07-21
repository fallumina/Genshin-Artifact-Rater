const button = document.getElementById("calculateButton");

button.addEventListener("click", () => {

    const set = document.getElementById("artifactSet").value;

    const results = document.getElementById("results");

    results.innerHTML = `
        <h3>Testing...</h3>

        Artifact Set: ${set}

        <br><br>

        Hu Tao - 95

        <br>

        Diluc - 82

        <br>

        Yoimiya - 76
    `;

});
