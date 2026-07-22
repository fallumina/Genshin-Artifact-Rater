const characters = [
{
    character: "Neuvillette",
    name: "Neuvillette - Hypercarry",

    sets: [
        {
            name: "Marechaussee Hunter",
            score: 100
        },
        {
            name: "Heart of Depth",
            score: 85
        },
    ],

    mainStats: {
        flower: [
            "HP"
        ],

        feather: [
            "ATK"
        ],

        sands: [
            "HP%"
        ],

        goblet: [
            "Hydro DMG Bonus",
            "HP%"
        ],

        circlet: [
            "Crit Rate",
            "Crit DMG",
            "HP%"
        ]
    },

    substats: {
      substats: {

    // Wanted stats
    "HP%": 10,
    "Crit Rate": 9,
    "Crit DMG": 9,
    "Energy Recharge": 5,
    "HP": 3,

    // Bad stats
    "ATK%": -2,
    "DEF%": -3,
    "Elemental Mastery": -1,
    "ATK": -3,
    "DEF": -5

}
    }
}
];

window.characters = characters;