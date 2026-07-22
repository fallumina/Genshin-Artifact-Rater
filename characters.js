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
            score: 90
        },
        {
            name: "Nymph's Dream",
            score: 85
        },
        {
            name: "2pc HP% + 2pc Hydro",
            score: 75
        }
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
        "Crit Rate": 10,
        "Crit DMG": 10,
        "HP%": 9,
        "Energy Recharge": 5,
        "Elemental Mastery": 2,
        "ATK%": 1,
        "DEF%": 0,
        "HP": 0,
        "ATK": 0,
        "DEF": 0
    }
}
];

window.characters = characters;