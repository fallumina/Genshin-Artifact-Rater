const characters = [
{
character:"Aino",
image:"https://static.wikia.nocookie.net/gensin-impact/images/9/94/Aino_Item.png/revision/latest?cb=20250910025354",
name:"Reaction Support",

sets:[
{name:"Silken Moon's Serenade",score:30},
{name:"Noblesse Oblige",score:25},
{name:"Scroll of the Hero of Cinder City",score:25},
{name:"Deepwood Memories",score:15}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["Energy Recharge","Elemental Mastery"],
goblet:["Elemental Mastery"],
circlet:["Elemental Mastery","Crit Rate"]
},

substats:{
"Crit Rate":6,
"Crit DMG":0,
"HP%":0,
"HP":0,
"ATK%":0,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":10,
"Elemental Mastery":8
}
},
{
character:"Albedo",
image:"https://static.wikia.nocookie.net/gensin-impact/images/d/d2/Albedo_Item.png/revision/latest?cb=20260304040134",
name:"Off-Feild DPS",

sets:[
{name:"Husk Of Opulent Dreams",score:30},
{name:"Golden Troupe",score:30},
{name:"Archaic Petra",score:25},
{name:"Tenacity of the Millelith",score:20},
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["DEF%"],
goblet:["DEF%","Geo DMG Bonus"],
circlet:["Crit Rate","Crit DMG"],
},

substats:{
"Crit Rate":10,
"Crit DMG":10,
"HP%":0,
"HP":0,
"ATK%":4,
"ATK":0,
"DEF%":8,
"DEF":0,
"Energy Recharge":6,
"Elemental Mastery":0
}
},

{
character:"Alhaitham",
image:"https://static.wikia.nocookie.net/gensin-impact/images/e/e5/Alhaitham_Item.png/revision/latest?cb=20230118023142",
name:"Spread DPS",

sets:[
{name:"Gilded Dreams",score:30},
{name:"Deepwood Memories",score:25}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["Elemental Mastery","ATK%"],
goblet:["Dendro DMG Bonus"],
circlet:["Crit Rate","Crit DMG"]
},

substats:{
"Crit Rate":10,
"Crit DMG":10,
"HP%":0,
"HP":0,
"ATK%":6,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":8,
"Elemental Mastery":8
}
},

{
character:"Aloy",
image:"https://static.wikia.nocookie.net/gensin-impact/images/1/13/Aloy_Item.png/revision/lates?cb=20210905075454",
name:"Burst Support",

sets:[
{name:"Blizzard Strayer",score:30},
{name:"Emblem of Severed Fate",score:25},
{name:"Noblesse Oblige",score:20},
{name:"Scroll of the Hero of Cinder City",score:15}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["ATK%","Elemental Mastery"],
goblet:["Cryo DMG Bonus"],
circlet:["Crit Rate","Crit DMG"]
},

substats:{
"Crit Rate":10,
"Crit DMG":10,
"HP%":0,
"HP":0,
"ATK%":8,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":4,
"Elemental Mastery":6
}
},
{
character:"Alyosha",
image:"https://static.wikia.nocookie.net/gensin-impact/images/c/c3/Alyosha_Item.png/revision/latest?cb=20260812034112",
name:"Buff Support",

sets:[
{name:"Heart of the Furnace",score:30},
{name:"Noblesse Oblige",score:25},
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["ATK%","Energy Recharge"],
goblet:["ATK%"],
circlet:["Crit Rate","ATK%"],
},

substats:{
"Crit Rate":6,
"Crit DMG":0,
"HP%":0,
"HP":0,
"ATK%":8,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":10,
"Elemental Mastery":0
}
},

{
character:"Amber",
image:"https://static.wikia.nocookie.net/gensin-impact/images/2/2a/Amber_Item.png/revision/latest?cb=20210621072652",
name:"Buff Support",

sets:[
{name:"Noblesse Oblige",score:30},
{name:"Scroll of the Hero of Cinder City",score:25}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["ATK%","Energy Recharge"],
goblet:["Pyro DMG Bonus"],
circlet:["Crit Rate","Crit DMG"]
},

substats:{
"Crit Rate":8,
"Crit DMG":8,
"HP%":0,
"HP":0,
"ATK%":6,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":10,
"Elemental Mastery":4
}
},

{
character:"Traveler",
image:"https://static.wikia.nocookie.net/gensin-impact/images/1/14/Lumine_Item.png/revision/latest?cb=20260521152946",
name:"Anemo DPS",

sets:[
{name:"Viridescent Venerer",score:30},
{name:"Noblesse Oblige",score:25},
{name:"Scroll of the Hero of Cinder City",score:20}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["Elemental Mastery","ATK%"],
goblet:["Anemo DMG Bonus"],
circlet:["Crit Rate","Crit DMG"]
},

substats:{
"Crit Rate":4,
"Crit DMG":4,
"HP":0,
"ATK%":6,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":8,
"Elemental Mastery":10
}
},


{
character:"Arataki Itto",
image:"https://static.wikia.nocookie.net/gensin-impact/images/7/71/Arataki_Itto_Item.png/revision/latest?cb=20211214102941",
name:"DPS",

sets:[
{name:"Husk of Opulent Dreams",score:30},
{name:"Desert Pavilion Chronicle",score:25},
{name:"Retracing Bolide",score:20}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["DEF%"],
goblet:["Geo DMG Bonus"],
circlet:["Crit DMG","Crit Rate"]
},

substats:{
"Crit Rate":10,
"Crit DMG":10,
"HP%":0,
"HP":0,
"ATK%":6,
"ATK":0,
"DEF%":8,
"DEF":0,
"Energy Recharge":6,
"Elemental Mastery":0
}
},

{
character:"Arlecchino",
image:"https://static.wikia.nocookie.net/gensin-impact/images/4/44/Arlecchino_Item.png/revision/latest?cb=20240424055913",
name:"DPS",

sets:[
{name:"Fragment of Harmonic Whimsy",score:30},
{name:"Gladiator's Finale",score:25},
{name:"Desert Pavilion Chronicle",score:20},
{name:"Echoes of an Offering",score:15}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["ATK%","Elemental Mastery"],
goblet:["Pyro DMG Bonus"],
circlet:["Crit Rate","Crit DMG"]
},

substats:{
"Crit Rate":10,
"Crit DMG":10,
"HP%":0,
"HP":0,
"ATK%":6,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":0,
"Elemental Mastery":8
}
},

{
character:"Baizhu",
image:"https://static.wikia.nocookie.net/gensin-impact/images/6/63/Baizhu_Item.png/revision/latest?cb=20230502113507",
name:"Heal Support",

sets:[
{name:"Deepwood Memories",score:30},
{name:"Ocean-Hued Clam",score:25},
{name:"Noblesse Oblige",score:20}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["HP%","Energy Recharge"],
goblet:["HP%"],
circlet:["HP%","Healing Bonus"]
},

substats:{
"Crit Rate":4,
"Crit DMG":0,
"HP%":8,
"HP":0,
"ATK%":0,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":10,
"Elemental Mastery":0
}
},


{
character:"Barbara",
image:"https://static.wikia.nocookie.net/gensin-impact/images/d/d4/Barbara_Item.png/revision/latest?cb=20210621072654",
name:"Heal Support",

sets:[
{name:"Ocean-Hued Clam",score:30},
{name:"Scroll of the Hero of Cinder City",score:25}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["HP%"],
goblet:["HP%"],
circlet:["Healing Bonus"]
},

substats:{
"Crit Rate":0,
"Crit DMG":0,
"HP%":10,
"HP":10,
"ATK%":0,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":0,
"Elemental Mastery":0
}
},

{character:"Barbara",
    image:"https://static.wikia.nocookie.net/gensin-impact/images/d/d4/Barbara_Item.png/revision/latest?cb=20210621072654",
    name:"Bloom DPS",
    sets:[
        {name:"Flower Of Paradise Lost",score:30},
        {name:"Gilded Dreams",score:25},
        {name:"Ocean-Hued Clam",score:20}
    ],
    mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["Elemental Mastery"],
goblet:["Elemental Mastery"],
circlet:["Elemental Mastery"],
},

substats:{
"Crit Rate":0,
"Crit DMG":0,
"HP%":0,
"HP":0,
"ATK%":0,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":10,
"Elemental Mastery":10
}
},

{
character:"Beidou",
image:"https://static.wikia.nocookie.net/gensin-impact/images/6/6f/Beidou_Item.png/revision/latest?cb=20210621072655",
name:"Off-Feild DPS",

sets:[
{name:"Emblem of Severed Fate",score:30},
{name:"Scroll of the Hero of Cinder City",score:25},
{name:"Noblesse Oblige",score:25}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["ATK%","Energy Recharge"],
goblet:["Electro DMG Bonus"],
circlet:["Crit Rate","Crit DMG"]
},

substats:{
"Crit Rate":10,
"Crit DMG":10,
"HP%":0,
"HP":0,
"ATK%":8,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":6,
"Elemental Mastery":6
}
},


{
character:"Bennett",
image:"https://static.wikia.nocookie.net/gensin-impact/images/0/0d/Bennett_Item.png/revision/latest?cb=20210621072656",
name:"Support",

sets:[
{name:"Noblesse Oblige",score:30},
{name:"Scroll of the Hero of Cinder City",score:25},
{name:"Deepwood Memories",score:20}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["Energy Recharge","ATK%","HP%"],
goblet:["Pyro DMG Bonus","HP%"],
circlet:["Crit Rate","Crit DMG", "HP%","Healing Bonus"]
},

substats:{
"Crit Rate":8,
"Crit DMG":8,
"HP%":8,
"HP":6,
"ATK%":6,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":10,
"Elemental Mastery":0
}
},

{
character:"Candace",
image:"https://static.wikia.nocookie.net/gensin-impact/images/b/b9/Candace_Item.png/revision/latest?cb=20220928023622",
name:"Buff Support",

sets:[
{name:"Scroll of the Hero of Cinder City",score:30},
{name:"Emblem of Severed Fate",score:25}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["Energy Recharge","HP%"],
goblet:["HP%","Hydro DMG Bonus"],
circlet:["HP%","Crit Rate","Crit DMG"]
},

substats:{
"Crit Rate":8,
"Crit DMG":0,
"HP%":8,
"HP":6,
"ATK%":0,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":10,
"Elemental Mastery":0
}
},


{
character:"Charlotte",
image:"https://static.wikia.nocookie.net/gensin-impact/images/c/cd/Charlotte_Item.png/revision/latest?cb=20231108031147",
name:"Heal Support",

sets:[
{name:"Noblesse Oblige",score:30},
{name:"Tenacity of the Millelith",score:30},
{name:"Ocean-Hued Clam",score:25},
{name:"Scroll of the Hero of Cinder City",score:25},
{name:"Song of Days Past",score:25},
{name:"Maiden Beloved",score:20},
{name:"Blizzard Strayer",score:15}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["Energy Recharge","ATK%"],
goblet:["ATK%"],
circlet:["Healing Bonus","ATK%","Crit Rate"]
},

substats:{
"Crit Rate":4,
"Crit DMG":0,
"HP%":0,
"HP":0,
"ATK%":10,
"ATK":4,
"DEF%":0,
"DEF":0,
"Energy Recharge":6,
"Elemental Mastery":0
}
},


{
character:"Chasca",
image:"https://static.wikia.nocookie.net/gensin-impact/images/4/41/Chasca_Item.png/revision/latest?cb=20241120030419",
name:"DPS",

sets:[
{name:"Obsidian Codex",score:30},
{name:"Viridescent Venerer",score:25},
{name:"Marechaussee Hunter",score:20}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["ATK%"],
goblet:["ATK%"],
circlet:["Crit Rate","Crit DMG"]
},

substats:{
"Crit Rate":10,
"Crit DMG":10,
"HP%":0,
"HP":0,
"ATK%":8,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":4,
"Elemental Mastery":6
}
},


{
character:"Chevreuse",
image:"https://static.wikia.nocookie.net/gensin-impact/images/e/e9/Chevreuse_Item.png/revision/latest?cb=20240109210122",
name:"Buff Support",

sets:[
{name:"Noblesse Oblige",score:30},
{name:"Scroll of the Hero of Cinder City",score:25},
{name:"Ocean-Hued Clam",score:25},
{name:"Song of Days Past",score:25},
{name:"Maiden Beloved",score:15}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["HP%","Energy Recharge"],
goblet:["HP%"],
circlet:["HP%","Healing Bonus"]
},

substats:{
"Crit Rate":4,
"Crit DMG":0,
"HP%":10,
"HP":6,
"ATK%":0,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":6,
"Elemental Mastery":4
}
},


{
character:"Chiori",
image:"https://static.wikia.nocookie.net/gensin-impact/images/e/e0/Chiori_Item.png/revision/latest?cb=20240313015938",
name:"Off-Feild DPS",

sets:[
{name:"Golden Troupe",score:30},
{name:"Husk of Opulent Dreams",score:30}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["DEF%"],
goblet:["Geo DMG Bonus"],
circlet:["Crit Rate","Crit DMG"]
},

substats:{
"Crit Rate":10,
"Crit DMG":10,
"HP%":0,
"HP":0,
"ATK%":6,
"ATK":0,
"DEF%":8,
"DEF":0,
"Energy Recharge":4,
"Elemental Mastery":0
}
},


{
character:"Chongyun",
image:"https://static.wikia.nocookie.net/gensin-impact/images/9/9d/Chongyun_Item.png/revision/latest?cb=20210621072658",
name:"Burst Nuke",

sets:[
{name:"Noblesse Oblige",score:30},
{name:"Emblem of Severed Fate",score:25},
{name:"Gilded Dreams",score:25}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["ATK%","Energy Recharge","Elemental Mastery"],
goblet:["Cryo DMG Bonus"],
circlet:["Crit DMG","Crit Rate"]
},

substats:{
"Crit Rate":10,
"Crit DMG":10,
"HP%":0,
"HP":0,
"ATK%":8,
"ATK":4,
"DEF%":0,
"DEF":0,
"Energy Recharge":4,
"Elemental Mastery":6
}
},


{
character:"Citlali",
image:"https://static.wikia.nocookie.net/gensin-impact/images/1/16/Citlali_Item.png/revision/latest?cb=20250101131126",
name:"Buff Support",

sets:[
{name:"Scroll of the Hero of Cinder City",score:30},
{name:"Tenacity of the Millelith",score:25}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["Elemental Mastery","Energy Recharge"],
goblet:["Elemental Mastery"],
circlet:["Elemental Mastery"]
},

substats:{
"Crit Rate":0,
"Crit DMG":0,
"HP%":0,
"HP":0,
"ATK%":0,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":10,
"Elemental Mastery":10
}
},


{
character:"Clorinde",
image:"https://static.wikia.nocookie.net/gensin-impact/images/6/65/Clorinde_Item.png/revision/latest?cb=20240605021924",
name:"DPS (Dendro Teams)",

sets:[
{name:"Fragment of Harmonic Whimsy",score:30},
{name:"Gladiator's Finale",score:20},
{name:"Echoes of an Offering",score:25},
{name:"Thundering Fury",score:30}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["ATK%","Elemental Mastery"],
goblet:["Electro Dmg Bonus"],
circlet:["Crit Rate","Crit DMG"]
},

substats:{
"Crit Rate":10,
"Crit DMG":10,
"HP%":0,
"HP":0,
"ATK%":8,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":4,
"Elemental Mastery":6
}
},

{
character:"Clorinde",
image:"https://static.wikia.nocookie.net/gensin-impact/images/6/65/Clorinde_Item.png/revision/latest?cb=20240605021924",
name:"Electro DPS",

sets:[
{name:"Fragment of Harmonic Whimsy",score:30},
{name:"Echoes of an Offering",score:25},
{name:"Gladiator's Finale",score:20},
{name:"A Day Carved From Rising Winds",score:15},
{name:"Night of the Sky's Unveiling",score:10}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["ATK%"],
goblet:["Electro DMG Bonus"],
circlet:["Crit Rate","Crit DMG"],
},

substats:{
"Crit Rate":10,
"Crit DMG":10,
"HP%":0,
"HP":0,
"ATK%":8,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":6,
"Elemental Mastery":0
}
},


{
character:"Collei",
image:"https://static.wikia.nocookie.net/gensin-impact/images/0/03/Collei_Item.png/revision/latest?cb=20220825214230",
name:"Reaction Support",

sets:[
{name:"Deepwood Memories",score:30},
{name:"Noblesse Oblige",score:25},
{name:"Tenacity of the Millelith",score:20},
{name:"Gilded Dreams",score:15}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["Energy Recharge","ATK%","Elemental Mastery"],
goblet:["Dendro DMG Bonus","Elemental Mastery"],
circlet:["Crit Rate","Crit DMG","Elemental Mastery"]
},

substats:{
"Crit Rate":10,
"Crit DMG":10,
"HP%":0,
"HP":0,
"ATK%":8,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":8,
"Elemental Mastery":8
}
},


{
character:"Columbina",
image:"https://static.wikia.nocookie.net/gensin-impact/images/d/d9/Columbina_Item.png/revision/latest?cb=20260114051929",
name:"Off-Feild DPS & Buff Support",

sets:[
{name:"Silken Moon's Serenade",score:30},
{name:"Aubade of the Morningstar and Moon",score:30}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["HP%","Energy Recharge"],
goblet:["HP%"],
circlet:["Crit Rate","Crit DMG"]
},

substats:{
"Crit Rate":10,
"Crit DMG":10,
"HP%":8,
"HP":4,
"ATK%":0,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":6,
"Elemental Mastery":4
}
},


{
character:"Columbina",
image:"https://static.wikia.nocookie.net/gensin-impact/images/d/d9/Columbina_Item.png/revision/latest?cb=20260114051929",
name:"On-Feild DPS",

sets:[
{name:"Night of the Sky's Unveiling",score:30}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["HP%"],
goblet:["HP%"],
circlet:["Crit Rate","Crit DMG"]
},

substats:{
"Crit Rate":10,
"Crit DMG":10,
"HP%":10,
"HP":4,
"ATK%":0,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":6,
"Elemental Mastery":4
}
},
{
    character:"Traveler",
    image:"https://static.wikia.nocookie.net/gensin-impact/images/1/14/Lumine_Item.png/revision/latest?cb=20260521152946",
    name:"Stellar Glimmer DPS",
    sets:[
        {name:"Disenchantment in Deep Shadow",score:30},
        {name:"A Day Carved From Rising Winds",score:25},
        {name:"Gilded Dreams",score:25}
    ],
    mainStats:{
        flower:["HP"],
        feather:["ATK"],
        sands:["ATK%"],
        goblet:["ATK%"],
        circlet:["Crit Rate","Crit DMG"]
    },
    substats:{
        "Energy Recharge":10,
        "Crit Rate":8,
        "Crit DMG":8,
        "ATK%":6,
        "Elemental Mastery":4,
        "HP%":0,
        "HP":0,
        "ATK":0,
        "DEF%":0,
        "DEF":0
    }
},
{
    character:"Traveler",
    image:"https://static.wikia.nocookie.net/gensin-impact/images/1/14/Lumine_Item.png/revision/latest?cb=20260521152946",
    name:"Stellar Glimmer Support",
    sets:[
        {name:"Heart of the Furnace",score:30},
        {name:"Tenacity of the Millelith",score:30},
        {name:"Noblesse Oblige",score:25}
    ],
    mainStats:{
        flower:["HP"],
        feather:["ATK"],
        sands:["ATK%"],
        goblet:["ATK%"],
        circlet:["Crit Rate","Crit DMG"]
    },
    substats:{
        "Energy Recharge":10,
        "Crit Rate":8,
        "Crit DMG":8,
        "ATK%":6,
        "Elemental Mastery":4,
        "HP%":0,
        "HP":0,
        "ATK":0,
        "DEF%":0,
        "DEF":0
    }
},

{
character:"Cyno",
name:"Electro DPS",
image:"https://static.wikia.nocookie.net/gensin-impact/images/3/38/Cyno_Item.png/revision/latest?cb=20220928023548",
sets:[
{name:"Thundering Fury",score:30},
{name:"Gladiator's Finale",score:25},
{name:"Gilded Dreams",score:20},
{name:"Thundersoothing",score:15}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["Elemental Mastery","ATK%"],
goblet:["Electro DMG Bonus"],
circlet:["Crit Rate","Crit Dmg"]
},

substats:{
"Crit Rate":10,
"Crit DMG":10,
"HP%":0,
"HP":0,
"ATK%":8,
"ATK":4,
"DEF%":0,
"DEF":0,
"Energy Recharge":6,
"Elemental Mastery":8
}
},


{
character:"Cyno",
image:"https://static.wikia.nocookie.net/gensin-impact/images/3/38/Cyno_Item.png/revision/latest?cb=20220928023548",
name:"Stellar-Conduct DPS",

sets:[
{name:"Disenchantmet in Deep Shadow",score:30},
{name:"Gilded Dreams",score:25},
{name:"A Day Carved From Rising Winds",score:25}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["ATK%"],
goblet:["ATK%"],
circlet:["Crit Rate","Crit DMG"]
},

substats:{
"Crit Rate":10,
"Crit DMG":10,
"HP%":0,
"HP":0,
"ATK%":6,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":8,
"Elemental Mastery":4
}
},

{
character:"Dahlia",
image:"https://static.wikia.nocookie.net/gensin-impact/images/2/21/Dahlia_Item.png/revision/latest?cb=20250618025446",
name:"Sheild Support",

sets:[
{name:"Noblesse Oblige",score:30},
{name:"Scroll of the Hero of Cinder City",score:25}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["Energy Recharge","HP%"],
goblet:["HP%"],
circlet:["HP%"]
},

substats:{
"Crit Rate":4,
"Crit DMG":0,
"HP%":8,
"HP":6,
"ATK%":0,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":10,
"Elemental Mastery":0
}
},

{
character:"Dehya",
image:"https://static.wikia.nocookie.net/gensin-impact/images/7/79/Dehya_Item.png/revision/latest?cb=20230301024702",
name:"Support",

sets:[
{name:"Tenacity of the Millelith",score:30},
{name:"Scroll of the Hero of Cinder City",score:25}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["HP%"],
goblet:["HP%"],
circlet:["HP%","Crit Rate"]
},

substats:{
"Crit Rate":6,
"Crit DMG":0,
"HP%":10,
"HP":8,
"ATK%":0,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":4,
"Elemental Mastery":0
}
},

{
character:"Traveler",
image:"https://static.wikia.nocookie.net/gensin-impact/images/1/14/Lumine_Item.png/revision/latest?cb=20260521152946",
name:"Dendro Reaction Support",

sets:[
{name:"Deepwood Memories",score:30},
{name:"Noblesse Oblige",score:25},
{name:"Scroll of the Hero of Cinder City",score:20},
{name:"Gilded Dreams",score:15}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["Energy Recharge","ATK%","Elemental Mastery"],
goblet:["Dendro DMG Bonus","Elemental Mastery"],
circlet:["Crit Rate","Crit DMG","Elemental Mastery"]
},

substats:{
"Crit Rate":8,
"Crit DMG":8,
"HP%":0,
"HP":0,
"ATK%":6,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":10,
"Elemental Mastery":6
}
},

{
character:"Diluc",
image:"https://static.wikia.nocookie.net/gensin-impact/images/8/82/Diluc_Item.png/revision/latest?cb=20210621072659",
name:"DPS",

sets:[
{name:"Crimson Witch of Flames",score:30},
{name:"Gilded Dreams",score:25},
{name:"Gladiators Finale",score:20}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["Elemental Mastery","ATK%"],
goblet:["Pyro DMG"],
circlet:["Crit Rate","Crit DMG"]
},

substats:{
"Crit Rate":10,
"Crit DMG":10,
"HP%":0,
"HP":0,
"ATK%":8,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":4,
"Elemental Mastery":6
}
},

{
character:"Diona",
image:"https://static.wikia.nocookie.net/gensin-impact/images/a/aa/Diona_Item.png/revision/latest?cb=20260304040202"
name:"Heal & Shield Support",

sets:[
{name:"Noblesse Oblige",score:30},
{name:"Scroll of the Hero of Cinder City",score:30},
{name:"Maiden Beloved",score:25},
{name:"Ocean-Hued Clam",score:25},
{name:"Tenacity of the Millelith",score:20}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["Energy Recharge","HP%"],
goblet:["HP%"],
circlet:["HP%","Healing Bonus"]
},

substats:{
"Crit Rate":4,
"Crit DMG":0,
"HP%":10,
"HP":6,
"ATK%":0,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":8,
"Elemental Mastery":0
}
},

{
character:"Dori",
image:"https://static.wikia.nocookie.net/gensin-impact/images/0/0c/Dori_Item.png/revision/latest?cb=20220910025616",
name:"Heal Support",

sets:[
{name:"Noblesse Oblige",score:30},
{name:"Deepwood Memories",score:25}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["Energy Recharge","HP%","Elemental Mastery"],
goblet:["HP%","Elemental Mastery"],
circlet:["Healing Bonus","HP%","Elemental Mastery","Crit Rate"]
},

substats:{
"Crit Rate":4,
"Crit DMG":0,
"HP%":8,
"HP":0,
"ATK%":0,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":10,
"Elemental Mastery":6
}
},

{
character:"Durin",
image:"https://static.wikia.nocookie.net/gensin-impact/images/c/cd/Durin_Item.png/revision/latest?cb=20251204124008",
name:"Buff Support & Off Field DPS",

sets:[
{name:"A Day Carved From Rising Winds",score:30},
{name:"Celestial Gift",score:30},
{name:"Noblesse Oblige",score:25},
{name:"Embem of Severed Fate",score:20},
{name:"Scroll of the Hero of Cinder City",score:25}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["ATK%"],
goblet:["Pyro Dmg Bonus","ATK%"],
circlet:["Crit DMG","Crit Rate"]
},

substats:{
"Crit Rate":10,
"Crit DMG":10,
"HP%":0,
"HP":0,
"ATK%":8,
"ATK":4,
"DEF%":0,
"DEF":0,
"Energy Recharge":6,
"Elemental Mastery":0
}
},

{
character:"Durin",
image:"https://static.wikia.nocookie.net/gensin-impact/images/c/cd/Durin_Item.png/revision/latest?cb=20251204124008",
name:"Vaporize/Melt Off-Field DPS",

sets:[
{name:"A Day Carved From Rising Winds",score:30},
{name:"Gilded Dreams",score:25},
{name:"Emblem of Severed Fate",score:25},
{name:"Crimson Witch of Flames",score:15}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["ATK%"],
goblet:["Pyro Dmg Bonus","ATK%"],
circlet:["Crit Rate","Crit DMG"]
},

substats:{
"Crit Rate":10,
"Crit DMG":10,
"HP%":0,
"HP":0,
"ATK%":8,
"ATK":4,
"DEF%":0,
"DEF":0,
"Energy Recharge":6,
"Elemental Mastery":8
}
},

{
character:"Traveler",
image:"https://static.wikia.nocookie.net/gensin-impact/images/1/14/Lumine_Item.png/revision/latest?cb=20260521152946",
name:"Electro - Energy Support",

sets:[
{name:"Noblesse Oblige",score:30},
{name:"Scroll of the Hero of Cinder City",score:25},
{name:"Emblem of Severed Fate",score:20}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["Energy Recharge"],
goblet:["Electro DMG Bonus"],
circlet:["Crit Rate","Crit DMG"]
},

substats:{
"Crit Rate":6,
"Crit DMG":6,
"HP%":0,
"HP":0,
"ATK%":8,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":10,
"Elemental Mastery":0
}
},

{
character:"Emilie",
image:"https://static.wikia.nocookie.net/gensin-impact/images/1/18/Emilie_Item.png/revision/latest?cb=20240806102424",
name:"Off-Field DPS",

sets:[
{name:"Unfinished Reverie",score:30},
{name:"Deepwood Memories",score:25},
{name:"Golden Troupe",score:20}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["ATK%"],
goblet:["Dendro DMG Bonus"],
circlet:["Crit Rate","Crit DMG"]
},

substats:{
"Crit Rate":10,
"Crit DMG":10,
"HP%":0,
"HP":0,
"ATK%":8,
"ATK":4,
"DEF%":0,
"DEF":0,
"Energy Recharge":6,
"Elemental Mastery":0
}
},

{
character:"Escoffier",
image:"https://static.wikia.nocookie.net/gensin-impact/images/b/b7/Escoffier_Item.png/revision/latest?cb=20250507071602",
name:"Off-Field DPS",

sets:[
{name:"Golden Troupe",score:30},
{name:"Blizzard Strayer",score:25},
{name:"Tenacity of the Millelith",score:20},
{name:"Scroll of the Hero of Cinder City",score:15}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["ATK%","Energy Recharge"],
goblet:["Cryo DMG Bonus","ATK%"],
circlet:["Crit Rate","Crit DMG"]
},

substats:{
"Crit Rate":10,
"Crit DMG":10,
"HP%":0,
"HP":0,
"ATK%":8,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":8,
"Elemental Mastery":0
}
},

{
character:"Eula",
image:"https://static.wikia.nocookie.net/gensin-impact/images/7/7c/Eula_Item.png/revision/latest?cb=20210621072702",
name:"DPS",

sets:[
{name:"Pale Flame",score:30},
{name:"Gladiator's Finale",score:25}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["ATK%"],
goblet:["Physical DMG Bonus"],
circlet:["Crit Rate","Crit DMG"]
},

substats:{
"Crit Rate":10,
"Crit DMG":10,
"HP%":0,
"HP":0,
"ATK%":6,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":8,
"Elemental Mastery":0
}
},
{
character:"Faruzan",
image:"https://static.wikia.nocookie.net/gensin-impact/images/3/32/Faruzan_Item.png/revision/latest?cb=20221207033424",
name:"Buff Support",

sets:[
{name:"Scroll of the Hero of Cinder City",score:30},
{name:"Noblesse Oblige",score:30},
{name:"Viridescent Venerer",score:25},
{name:"Emblem of Severed Fate",score:20}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["Energy Recharge"],
goblet:["Anemo DMG Bonus"],
circlet:["Crit Rate","Crit DMG"]
},

substats:{
"Crit Rate":8,
"Crit DMG":6,
"HP%":0,
"HP":0,
"ATK%":4,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":10,
"Elemental Mastery":0
}
},

{
character:"Fischl",
image:"https://static.wikia.nocookie.net/gensin-impact/images/e/e8/Fischl_Item.png/revision/latest?cb=20210621072704",
name:"Off-Field Aggravate DPS",

sets:[
{name:"Golden Troupe",score:30},
{name:"A Day Carved From Rising Winds",score:25},
{name:"Gilded Dreams",score:20},
{name:"Thundering Fury",score:20},
{name:"Thundersoother",score:15}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["ATK%","Elemental Mastery"],
goblet:["Electro DMG Bonus"],
circlet:["Crit Rate","Crit DMG"]
},

substats:{
"Crit Rate":8,
"Crit DMG":8,
"HP%":0,
"HP":0,
"ATK%":6,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":10,
"Elemental Mastery":6
}
},

{
character:"Fischl",
image:"https://static.wikia.nocookie.net/gensin-impact/images/e/e8/Fischl_Item.png/revision/latest?cb=20210621072704",
name:"Off-Field DPS",

sets:[
{name:"Golden Troupe",score:30},
{name:"A Day Carved From Rising Winds",score:25},
{name:"Thundersoother",score:20},
{name:"Tenacity of the Millelith",score:15}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["ATK%"],
goblet:["Electro DMG Bonus"],
circlet:["Crit Rate","Crit DMG"]
},

substats:{
"Crit Rate":8,
"Crit DMG":8,
"HP%":0,
"HP":0,
"ATK%":6,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":10,
"Elemental Mastery":4
}
},


{
character:"Flins",
image:"https://static.wikia.nocookie.net/gensin-impact/images/2/23/Flins_Item.png/revision/latest?cb=20250930200858",
name:"DPS",

sets:[
{name:"Night of the Sky's Unveiling",score:30},
{name:"Gilded Dreams",score:25}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["ATK%"],
goblet:["ATK%"],
circlet:["Crit DMG","Crit Rate"]
},

substats:{
"Crit Rate":10,
"Crit DMG":10,
"HP%":0,
"HP":0,
"ATK%":8,
"ATK":4,
"DEF%":0,
"DEF":0,
"Energy Recharge":6,
"Elemental Mastery":4
}
},

{
character:"Freminet",
image:"https://static.wikia.nocookie.net/gensin-impact/images/2/24/Freminet_Item.png/revision/latest?cb=20230905141238",
name:"Cryo DPS",

sets:[
{name:"Blizzard Strayer",score:30},
{name:"Golden Troupe",score:25},
{name:"A Day Carved From Rising Winds",score:25},
{name:"Marechaussee Hunter",score:20}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["ATK%"],
goblet:["Cryo DMG Bonus"],
circlet:["Crit Rate","Crit DMG"]
},

substats:{
"Crit Rate":10,
"Crit DMG":10,
"HP%":0,
"HP":0,
"ATK%":8,
"ATK":4,
"DEF%":0,
"DEF":0,
"Energy Recharge":8,
"Elemental Mastery":4
}
},

{
character:"Freminet",
image:"https://static.wikia.nocookie.net/gensin-impact/images/2/24/Freminet_Item.png/revision/latest?cb=20230905141238",
name:"Physical DPS",

sets:[
{name:"Pale Flame",score:30},
{name:"Disenchantment in Deep Shadows",score:25},
{name:"Golden Troupe",score:20},
{name:"A Day Carved From Rising Winds",score:20},
{name:"Gladiator's Finale",score:15},
{name:"Blizzard Strayer",score:15},
{name:"Gilded Dreams",score:15},
{name:"Marechaussee Hunter",score:10}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["ATK%"],
goblet:["Physical DMG"],
circlet:["Crit Rate","Crit DMG"]
},

substats:{
"Crit Rate":10,
"Crit DMG":10,
"HP%":0,
"HP":0,
"ATK%":8,
"ATK":4,
"DEF%":0,
"DEF":0,
"Energy Recharge":8,
"Elemental Mastery":0
}
},


{
character:"Furina",
image:"https://static.wikia.nocookie.net/gensin-impact/images/0/07/Furina_Item.png/revision/latest?cb=20231108031053",
name:"Off-Field DPS & Buff Support",

sets:[
{name:"Golden Troupe",score:30},
{name:"Tenacity of the Millelith",score:25}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["Energy Recharge","HP%"],
goblet:["HP%","Hydro DMG Bonus"],
circlet:["Crit Rate","Crit DMG"]
},

substats:{
"Crit Rate":10,
"Crit DMG":10,
"HP%":10,
"HP":8,
"ATK%":0,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":8,
"Elemental Mastery":0
}
},

{
character:"Gaming",
image:"https://static.wikia.nocookie.net/gensin-impact/images/a/ac/Gaming_Item.png/revision/latest?cb=20240131025413",
name:"DPS",

sets:[
{name:"Crimson Witch of Flames",score:30},
{name:"Marechaussee Hunter",score:25},
{name:"Long Night's Oath",score:25},
{name:"Gilded Dreams",score:20}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["Elemental Mastery","ATK%","Energy Recharge"],
goblet:["Pyro DMG Bonus"],
circlet:["Crit Rate","Crit DMG"]
},

substats:{
"Crit Rate":8,
"Crit DMG":8,
"HP%":0,
"HP":0,
"ATK%":4,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":10,
"Elemental Mastery":6
}
},


{
character:"Ganyu",
image:"https://static.wikia.nocookie.net/gensin-impact/images/e/ea/Ganyu_Item.png/revision/latest?cb=20210621072705"
name:"Freeze DPS",

sets:[
{name:"Blizzard Strayer",score:30},
{name:"Marechaussee Hunter",score:25}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["ATK%"],
goblet:["Cryo DMG Bonus"],
circlet:["Crit DMG"]
},

substats:{
"Crit Rate":10,
"Crit DMG":10,
"HP%":0,
"HP":0,
"ATK%":8,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":6,
"Elemental Mastery":0
}
},


{
character:"Ganyu",
image:"https://static.wikia.nocookie.net/gensin-impact/images/e/ea/Ganyu_Item.png/revision/latest?cb=20210621072705"
name:"Cryo DPS",

sets:[
{name:"Blizzard Strayer",score:30}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["ATK%"],
goblet:["Cryo DMG Bonus"],
circlet:["Crit DMG","Crit Rate"]
},

substats:{
"Crit Rate":10,
"Crit DMG":10,
"HP%":0,
"HP":0,
"ATK%":8,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":6,
"Elemental Mastery":0
}
},


{
character:"Ganyu",
image:"https://static.wikia.nocookie.net/gensin-impact/images/e/ea/Ganyu_Item.png/revision/latest?cb=20210621072705"
name:"Melt DPS",

sets:[
{name:"Wanderer's Troupe",score:30},
{name:"Shimenawa's Reminiscence",score:25},
{name:"Gilded Dreams",score:20},
{name:"Unfinished Reverie",score:15}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["Elemental Mastery","ATK%"],
goblet:["Cryo DMG Bonus"],
circlet:["Crit Rate","Crit DMG"]
},

substats:{
"Crit Rate":10,
"Crit DMG":10,
"HP%":0,
"HP":0,
"ATK%":8,
"ATK":4,
"DEF%":0,
"DEF":0,
"Energy Recharge":0,
"Elemental Mastery":8
}
},


{
character:"Traveler",
image:"https://static.wikia.nocookie.net/gensin-impact/images/1/14/Lumine_Item.png/revision/latest?cb=20260521152946",
name:"Geo DPS",

sets:[
{name:"Nighttime Whispers in the Echoing Woods",score:30},
{name:"Golden Troupe",score:30},
{name:"Emblem of Severed Fate",score:25},
{name:"Archaic Petra",score:20},
{name:"Noblesse Oblige",score:15},
{name:"Scroll of the Hero of Cinder City",score:15}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["ATK%"],
goblet:["Geo DMG Bonus"],
circlet:["Crit Rate","Crit DMG"]
},

substats:{
"Crit Rate":10,
"Crit DMG":10,
"HP%":0,
"HP":0,
"ATK%":8,
"ATK":4,
"DEF%":0,
"DEF":0,
"Energy Recharge":6,
"Elemental Mastery":0
}
},


{
character:"Gorou",
image:"https://static.wikia.nocookie.net/gensin-impact/images/1/1e/Gorou_Item.png/revision/latest?cb=20211214103025",
name:"Buff Support",

sets:[
{name:"Noblesse Oblige",score:30},
{name:"Scroll of the Hero of Cinder City",score:30},
{name:"Silken Moon's Serenade",score:25}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["Energy Recharge"],
goblet:["Geo DMG Bonus","DEF%"],
circlet:["Crit Rate","DEF%","Healing Bonus"]
},

substats:{
"Crit Rate":6,
"Crit DMG":0,
"HP%":0,
"HP":0,
"ATK%":0,
"ATK":0,
"DEF%":8,
"DEF":4,
"Energy Recharge":10,
"Elemental Mastery":0
}
},

{
character:"Hu Tao",
image:"https://static.wikia.nocookie.net/gensin-impact/images/d/d3/Hu_Tao_Item.png/revision/latest?cb=20260304040224",
name:"DPS",

sets:[
{name:"Shimenawa's Reminiscence",score:30},
{name:"Crimson Witch of Flames",score:25},
{name:"Gilded Dreams",score:20},
{name:"Marechaussee Hunter",score:15}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["Elemental Mastery","HP%"],
goblet:["Pyro DMG Bonus"],
circlet:["Crit Rate","Crit DMG"]
},

substats:{
"Crit Rate":10,
"Crit DMG":10,
"HP%":8,
"HP":0,
"ATK%":4,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":0,
"Elemental Mastery":6
}
},


{
character:"Traveler",
image:"https://static.wikia.nocookie.net/gensin-impact/images/1/14/Lumine_Item.png/revision/latest?cb=20260521152946",
name:"Support - Hydro",

sets:[
{name:"Noblesse Oblige",score:30},
{name:"Scroll of the Hero of Cinder City",score:30},
{name:"Tenacity of the Millelith",score:25}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["Energy Recharge","ATK%"],
goblet:["Hydro DMG Bonus"],
circlet:["Crit Rate","Crit DMG","Healing Bonus"]
},

substats:{
"Crit Rate":8,
"Crit DMG":8,
"HP%":4,
"HP":0,
"ATK%":6,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":10,
"Elemental Mastery":0
}
},


{
character:"Iansan",
image:"https://static.wikia.nocookie.net/gensin-impact/images/7/72/Iansan_Item.png/revision/latest?cb=20250326020737",
name:"Buff Support",

sets:[
{name:"Scroll of the Hero of Cinder City",score:30},
{name:"Noblesse Oblige",score:25}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["ATK%","Energy Recharge"],
goblet:["ATK%"],
circlet:["ATK%","Crit Rate"]
},

substats:{
"Crit Rate":6,
"Crit DMG":0,
"HP%":0,
"HP":0,
"ATK%":8,
"ATK":6,
"DEF%":0,
"DEF":0,
"Energy Recharge":10,
"Elemental Mastery":0
}
},


{
character:"Ifa",
image:"https://static.wikia.nocookie.net/gensin-impact/images/9/95/Ifa_Item.png/revision/latest?cb=20250507055620",
name:"Anemo DPS",

sets:[
{name:"Obsidian Codex",score:30},
{name:"Viridescent Venerer",score:25},
{name:"Scroll of the Hero of Cinder City",score:25},
{name:"A Day Carved From Rising Winds",score:20}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["ATK%"],
goblet:["Anemo DMG Bonus"],
circlet:["Crit DMG","Crit Rate"]
},

substats:{
"Crit Rate":10,
"Crit DMG":10,
"HP%":0,
"HP":0,
"ATK%":8,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":4,
"Elemental Mastery":6
}
},


{
character:"Illuga",
image:"https://static.wikia.nocookie.net/gensin-impact/images/5/5e/Illuga_Item.png/revision/latest?cb=20260205110258",
name:"Buff Support",

sets:[
{name:"Silken Moon's Serenade",score:30}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["Elemental Mastery","Energy Recharge"],
goblet:["Elemental Mastery"],
circlet:["Elemental Mastery"]
},

substats:{
"Crit Rate":6,
"Crit DMG":0,
"HP%":0,
"HP":0,
"ATK%":0,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":10,
"Elemental Mastery":10
}
},


{
character:"Ineffa",
image:"https://static.wikia.nocookie.net/gensin-impact/images/e/ef/Ineffa_Item.png/revision/latest?cb=20250730090559",
name:"Off-Field DPS & Buff & Shield Support",

sets:[
{name:"Aubade of Morningstar and Moon",score:30},
{name:"Gilded Dreams",score:25},
{name:"A Day Carved From Rising Winds",score:25},
{name:"Silken Moon's Serenade",score:15},
{name:"Tenacity of the Millelith",score:15}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["ATK%"],
goblet:["ATK%"],
circlet:["Crit Rate","Crit DMG"]
},

substats:{
"Crit Rate":10,
"Crit DMG":10,
"HP%":0,
"HP":0,
"ATK%":8,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":4,
"Elemental Mastery":6
}
},


{
character:"Jahoda",
image:"https://static.wikia.nocookie.net/gensin-impact/images/3/38/Jahoda_Item.png/revision/latest?cb=20260127111054",
name:"Off-Feild Reaction DPS & Heal Support",

sets:[
{name:"Viridescent Venerer",score:30},
{name:"Silken Moon's Serenade",score:25},
{name:"Deepwood Memories",score:20}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["Energy Recharge","ATK%"],
goblet:["ATK%"],
circlet:["Healing Bonus","ATK%","Crit Rate"]
},

substats:{
"Crit Rate":6,
"Crit DMG":0,
"HP%":0,
"HP":0,
"ATK%":8,
"ATK":4,
"DEF%":0,
"DEF":0,
"Energy Recharge":10,
"Elemental Mastery":4
}
},


{
character:"Jean",
image:"https://static.wikia.nocookie.net/gensin-impact/images/e/e7/Jean_Item.png/revision/latest?cb=20260304040253",
name:"Heal Support & Damage",

sets:[
{name:"Viridescent Venerer",score:30},
{name:"Noblesse Oblige",score:25},
{name:"Ocean-Hued Clam",score:20},
{name:"Emblem of Severed Fate",score:15}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["ATK%","Energy Recharge"],
goblet:["Anemo DMG Bonus","ATK%"],
circlet:["Crit Rate","crit DMG","Healing Bonus"]
},

substats:{
"Crit Rate":8,
"Crit DMG":8,
"HP%":0,
"HP":0,
"ATK%":6,
"ATK":2,
"DEF%":0,
"DEF":0,
"Energy Recharge":10,
"Elemental Mastery":4
}
},


{
character:"Kachina",
image:"https://static.wikia.nocookie.net/gensin-impact/images/0/0f/Kachina_Item.png/revision/latest?cb=20240828061519",
name:"Buff & Reaction Support",

sets:[
{name:"Scroll of the Hero of Cinder City",score:30},
{name:"Archaic Petra",score:25},
{name:"Noblesse Oblige",score:20},
{name:"Tenacity of the Millelith",score:20}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["DEF%","Energy Recharge"],
goblet:["Geo DMG Bonus","DEF%"],
circlet:["Crit Rate","Crit DMG"]
},

substats:{
"Crit Rate":8,
"Crit DMG":8,
"HP%":0,
"HP":0,
"ATK%":0,
"ATK":0,
"DEF%":8,
"DEF":0,
"Energy Recharge":10,
"Elemental Mastery":0
}
},


{
character:"Kaedehara Kazuha",
image:"https://static.wikia.nocookie.net/gensin-impact/images/1/18/Kaedehara_Kazuha_Item.png/revision/latest?cb=20210629205730",
name:"Reaction DPS & Buff Support",

sets:[
{name:"Viridescent Venerer",score:30},
{name:"Thundering Fury",score:25}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["Elemental Mastery","Energy Recharge"],
goblet:["Elemental Mastery"],
circlet:["Elemental Mastery"]
},

substats:{
"Crit Rate":6,
"Crit DMG":0,
"HP%":0,
"HP":0,
"ATK%":0,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":10,
"Elemental Mastery":8
}
},


{
character:"Kaeya",
image:"https://static.wikia.nocookie.net/gensin-impact/images/d/de/Kaeya_Item.png/revision/latest?cb=20260304040318",
name:"Freeze / Mono Cryo",

sets:[
{name:"Blizzard Strayer",score:30},
{name:"Emblem of Severed Fate",score:25},
{name:"Noblesse Oblige",score:20},
{name:"Scroll of the Hero of Cinder City",score:20}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["ATK%"],
goblet:["Cryo DMG Bonus"],
circlet:["Crit DMG"]
},

substats:{
"Crit Rate":4,
"Crit DMG":10,
"HP%":0,
"HP":0,
"ATK%":6,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":8,
"Elemental Mastery":0
}
},


{
character:"Kaeya",
image:"https://static.wikia.nocookie.net/gensin-impact/images/d/de/Kaeya_Item.png/revision/latest?cb=20260304040318",
name:"Reverse Melt",

sets:[
{name:"Emblem of Severed Fate",score:30},
{name:"Gilded Dreams",score:25},
{name:"Noblesse Oblige",score:20},
{name:"Scroll of the Hero of Cinder City",score:20}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["Energy Recharge","ATK%","Elemental Mastery"],
goblet:["Cryo DMG Bonus"],
circlet:["Crit Rate","Crit DMG"]
},

substats:{
"Crit Rate":8,
"Crit DMG":8,
"HP%":0,
"HP":0,
"ATK%":6,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":10,
"Elemental Mastery":6
}
},


{
character:"Kamisato Ayaka",
image:"https://static.wikia.nocookie.net/gensin-impact/images/9/9c/Kamisato_Ayaka_Item.png/revision/latest?cb=20210721040744",
name:"DPS",

sets:[
{name:"Blizzard Strayer",score:30}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["ATK%"],
goblet:["Cryo DMG Bonus"],
circlet:["Crit DMG","ATK%"]
},

substats:{
"Crit Rate":4,
"Crit DMG":10,
"HP%":0,
"HP":0,
"ATK%":8,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":6,
"Elemental Mastery":0
}
},


{
character:"Kamisato Ayato",
image:"https://static.wikia.nocookie.net/gensin-impact/images/1/14/Kamisato_Ayato_Item.png/revision/latest?cb=20220330025024",
name:"DPS",

sets:[
{name:"Heart of Depth",score:30},
{name:"Gladiator's Finale",score:30},
{name:"Nymph's Dream",score:30},
{name:"Blizzard Strayer",score:25},
{name:"Thundering Fury",score:20},
{name:"Echoes of an Offering",score:15},
{name:"Marechaussee Hunter",score:10}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["ATK%"],
goblet:["Hydro DMG Bonus"],
circlet:["Crit Rate","Crit DMG"]
},

substats:{
"Crit Rate":10,
"Crit DMG":10,
"HP%":4,
"HP":0,
"ATK%":8,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":6,
"Elemental Mastery":2
}
},


{
character:"Kaveh",
image:"https://static.wikia.nocookie.net/gensin-impact/images/8/81/Kaveh_Item.png/revision/latest?cb=20230502113407",
name:"Bloom / Burgeon Driver",

sets:[
{name:"Deepwood Memories",score:30},
{name:"Ocean-Hued Clam",score:25},
{name:"Flower of Paradise Lost",score:20},
{name:"Gilded Dreams",score:15}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["Energy Recharge","Elemental Mastery"],
goblet:["Elemental Mastery"],
circlet:["Elemental Mastery","Crit Rate"]
},

substats:{
"Crit Rate":6,
"Crit DMG":0,
"HP%":0,
"HP":0,
"ATK%":0,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":10,
"Elemental Mastery":8
}
},


{
character:"Keqing",
image:"https://static.wikia.nocookie.net/gensin-impact/images/e/ee/Keqing_Item.png/revision/latest?cb=20210621072711",
name:"Aggravate DPS",

sets:[
{name:"Thundering Fury",score:30},
{name:"Thundersoother",score:25},
{name:"Gilded Dreams",score:25}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["ATK%","Elemental Mastery"],
goblet:["Electro DMG Bonus"],
circlet:["Crit Rate","Crit DMG"]
},

substats:{
"Crit Rate":10,
"Crit DMG":10,
"HP%":0,
"HP":0,
"ATK%":8,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":6,
"Elemental Mastery":8
}
},


{
character:"Keqing",
image:"https://static.wikia.nocookie.net/gensin-impact/images/e/ee/Keqing_Item.png/revision/latest?cb=20210621072711",
name:"Quickbloom DPS",

sets:[
{name:"Thundering Fury",score:30},
{name:"Gilded Dreams",score:25},
{name:"Marechaussee Hunter",score:20}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["Elemental Mastery","ATK%"],
goblet:["Electro DMG Bonus"],
circlet:["Crit Rate","Crit DMG"]
},

substats:{
"Crit Rate":10,
"Crit DMG":10,
"HP%":0,
"HP":0,
"ATK%":4,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":8,
"Elemental Mastery":6
}
},


{
character:"Kinich",
image:"https://static.wikia.nocookie.net/gensin-impact/images/3/32/Kinich_Item.png/revision/latest?cb=202409171242300",
name:"DPS",

sets:[
{name:"Obsidian Codex",score:30},
{name:"Unfinished Reverie",score:30},
{name:"Golden Troupe",score:25},
{name:"Marechaussee Hunter",score:20}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["ATK%"],
goblet:["Dendro DMG Bonus"],
circlet:["Crit Rate","Crit DMG"]
},

substats:{
"Crit Rate":10,
"Crit DMG":10,
"HP%":0,
"HP":0,
"ATK%":8,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":10,
"Elemental Mastery":0
}
},


{
character:"Kirara",
image:"https://static.wikia.nocookie.net/gensin-impact/images/7/74/Kirara_Item.png/revision/latest?cb=20230524074302",
name:"Shield Support",

sets:[
{name:"Deepwood Memories",score:30},
{name:"Noblesse Oblige",score:25},
{name:"tenacity of the Millelith",score:20}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["HP%"],
goblet:["HP%"],
circlet:["HP%","Crit Rate"]
},

substats:{
"Crit Rate":6,
"Crit DMG":0,
"HP%":8,
"HP":4,
"ATK%":0,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":10,
"Elemental Mastery":0
}
},

{
character:"Klee",
image:"https://static.wikia.nocookie.net/gensin-impact/images/7/78/Klee_Item.png/revision/latest?cb=20210621072712",
name:"DPS",

sets:[
{name:"A Day Carved From Rising Winds",score:30},
{name:"Lavawalker",score:25},
{name:"Celestial Gift",score:25},
{name:"Echoes of an Offering",score:20},
{name:"Desert Pavilion Chronicle",score:15},
{name:"Fragment of Harmonic Whimsy",score:10}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["ATK%"],
goblet:["Pyro DMG Bonus"],
circlet:["Crit Rate","Crit DMG"]
},

substats:{
"Crit Rate":10,
"Crit DMG":10,
"HP%":0,
"HP":0,
"ATK%":8,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":8,
"Elemental Mastery":0
}
},

{
character:"Kujou Sara",
image:"https://static.wikia.nocookie.net/gensin-impact/images/9/91/Kujou_Sara_Item.png/revision/latest?cb=20210901042513",
name:"Buff Support",

sets:[
{name:"Emblem of Severed Fate",score:30},
{name:"Noblesse Oblige",score:25}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["Energy Recharge","ATK%"],
goblet:["Electro DMG Bonus"],
circlet:["Crit Rate","Crit DMG"]
},

substats:{
"Crit Rate":8,
"Crit DMG":8,
"HP%":0,
"HP":0,
"ATK%":8,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":10,
"Elemental Mastery":0
}
},


{
character:"Kuki Shinobu",
image:"https://static.wikia.nocookie.net/gensin-impact/images/0/0d/Kuki_Shinobu_Item.png/revision/latest?cb=20220621105512",
name:"Hyperbloom",

sets:[
{name:"Flower of Paradise Lost",score:30},
{name:"Gilded Dreams",score:25},
{name:"Thundering Fury",score:20}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["Elemental Mastery"],
goblet:["Elemental Mastery"],
circlet:["Elemental Mastery"]
},

substats:{
"Crit Rate":0,
"Crit DMG":0,
"HP%":10,
"HP":0,
"ATK%":0,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":6,
"Elemental Mastery":8
}
},


{
character:"Lan Yan",
image:"https://static.wikia.nocookie.net/gensin-impact/images/3/3f/Lan_Yan_Item.png/revision/latest?cb=20250124131221",
name:"Shield & Buff Support",

sets:[
{name:"Viridescent Venerer",score:30}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["ATK%","Energy Recharge"],
goblet:["ATK%"],
circlet:["ATK%","Crit Rate"]
},

substats:{
"Crit Rate":4,
"Crit DMG":0,
"HP%":0,
"HP":0,
"ATK%":8,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":10,
"Elemental Mastery":6
}
},


{
character:"Lauma",
image:"https://static.wikia.nocookie.net/gensin-impact/images/3/37/Lauma_Item.png/revision/latest?cb=20250910024807",
name:"Buff",

sets:[
{name:"Silken Moon's Serenade",score:30},
{name:"Deepwood Memories",score:30},
{name:"Night of the Sky's Unveiling",score:25},
{name:"Gilded Dreams",score:20}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["Energy Recharge","Elemental Mastery"],
goblet:["Elemental Mastery"],
circlet:["Elemental Mastery"]
},

substats:{
"Crit Rate":6,
"Crit DMG":6,
"HP%":0,
"HP":0,
"ATK%":0,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":8,
"Elemental Mastery":10
}
},


{
character:"Layla",
image:"https://static.wikia.nocookie.net/gensin-impact/images/2/21/Layla_Item.png/revision/latest?cb=20221124092625",
name:"Sheild Support",

sets:[
{name:"Tenacity of the Millelith",score:30},
{name:"Scroll of the Hero of Cinder City",score:25},
{name:"Noblesse Oblige",score:20}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["HP%","Energy Recharge"],
goblet:["HP%"],
circlet:["HP%","Crit Rate"]
},

substats:{
"Crit Rate":4,
"Crit DMG":0,
"HP%":10,
"HP":6,
"ATK%":0,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":8,
"Elemental Mastery":0
}
},


{
character:"Layla",
image:"https://static.wikia.nocookie.net/gensin-impact/images/2/21/Layla_Item.png/revision/latest?cb=20221124092625",
name:"Sheild Support and Damage",

sets:[
{name:"Tenacity of the Millelith",score:30},
{name:"Blizzard Strayer",score:25},
{name:"Noblesse Oblige",score:20},
{name:"Emblem of Severed Fate",score:15}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["HP%","Energy Recharge"],
goblet:["Cryo DMG Bonus","HP%"],
circlet:["Crit Rate","Crit DMG","HP%"]
},

substats:{
"Crit Rate":10,
"Crit DMG":10,
"HP%":10,
"HP":6,
"ATK%":8,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":8,
"Elemental Mastery":0
}
},

{
character:"Linnea",
image:"https://static.wikia.nocookie.net/gensin-impact/images/f/f2/Linnea_Item.png/revision/latest?cb=20260408075854",
name:"off-Field DPS & Buff and Heal Support",

sets:[
{name:"Aubade of the Morningstar and Moon",score:30},
{name:"Husk of Opulent Dreams",score:30}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["DEF%","Energy Recharge"],
goblet:["DEF%"],
circlet:["Crit DMG","Crit Rate"]
},

substats:{
"Crit Rate":10,
"Crit DMG":10,
"HP%":0,
"HP":0,
"ATK%":0,
"ATK":0,
"DEF%":8,
"DEF":0,
"Energy Recharge":4,
"Elemental Mastery":6
}
},


{
character:"Lisa",
image:"https://static.wikia.nocookie.net/gensin-impact/images/5/51/Lisa_Item.png/revision/latest?cb=20210621072713",
name:"Aggravate DPS",

sets:[
{name:"Thundering Fury",score:30},
{name:"Gilded Dreams",score:25},
{name:"Thundersoother",score:20}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["ATK%","Elemental Mastery"],
goblet:["Electro DMG Bonus"],
circlet:["Crit Rate","Crit DMG"]
},

substats:{
"Crit Rate":10,
"Crit DMG":10,
"HP%":0,
"HP":0,
"ATK%":8,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":6,
"Elemental Mastery":8
}
},


{
character:"Lisa",
image:"https://static.wikia.nocookie.net/gensin-impact/images/5/51/Lisa_Item.png/revision/latest?cb=20210621072713",
name:"Off-Field DPS & Support",

sets:[
{name:"Emblem of Severed Fate",score:30},
{name:"Scroll of the Hero of Cinder City",score:25},
{name:"Noblesse Oblige",score:20},
{name:"Gilded Dreams",score:15},
{name:"Thundersoother",score:10}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["Energy Recharge","ATK%","Elemental Mastery"],
goblet:["Electro DMG Bonus"],
circlet:["Crit Rate","Crit DMG"]
},

substats:{
"Crit Rate":8,
"Crit DMG":8,
"HP%":0,
"HP":0,
"ATK%":6,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":10,
"Elemental Mastery":4
}
},



{
character:"Lohen",
image:"https://static.wikia.nocookie.net/gensin-impact/images/a/af/Lohen_Item.png/revision/latest?cb=20260609140731",
name:"DPS",

sets:[
{name:"A Day Carved From Rising Winds",score:30},
{name:"Blizzard Strayer",score:25},
{name:"Shimenawa's Reminiscence",score:20},
{name:"Desert Pavilion Chronicle",score:15}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["ATK%"],
goblet:["Cryo DMG Bonus"],
circlet:["Crit Rate","Crit DMG"]
},

substats:{
"Crit Rate":10,
"Crit DMG":10,
"HP%":0,
"HP":0,
"ATK%":8,
"ATK":6,
"DEF%":0,
"DEF":0,
"Energy Recharge":4,
"Elemental Mastery":0
}
},


{
character:"Lynette",
image:"https://static.wikia.nocookie.net/gensin-impact/images/5/53/Lynette_Item.png/revision/latest?cb=20230816114257",
name:"Off-Field DPS",

sets:[
{name:"Viridescent Venerer",score:30},
{name:"Emblem of Severed Fate",score:25},
{name:"Noblesse Oblige",score:20}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["Energy Recharge","ATK%"],
goblet:["Anemo DMG Bonus"],
circlet:["Crit Rate","Crit DMG"]
},

substats:{
"Crit Rate":8,
"Crit DMG":6,
"HP%":0,
"HP":0,
"ATK%":4,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":10,
"Elemental Mastery":0
}
},


{
character:"Lyney",
image:"https://static.wikia.nocookie.net/gensin-impact/images/d/d8/Lyney_Item.png/revision/latest?cb=20230816114255",
name:"DPS",

sets:[
{name:"Marechaussee Hunter",score:30},
{name:"Lavawalker",score:25},
{name:"Vermillion Hereafter",score:25},
{name:"Shimenawa's Reminiscence",score:25},
{name:"Retracting Bolide",score:20},
{name:"Desert Pavilion Chronicle",score:20},
{name:"Wanderer's Troupe",score:15}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["ATK%"],
goblet:["Pyro DMG Bonus"],
circlet:["Crit DMG"]
},

substats:{
"Crit Rate":10,
"Crit DMG":10,
"HP%":0,
"HP":0,
"ATK%":8,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":6,
"Elemental Mastery":0
}
},


{
character:"Mavuika",
image:"https://static.wikia.nocookie.net/gensin-impact/images/0/0b/Mavuika_Item.png/revision/latest?cb=20250101130140",
name:"DPS & Buff Support",

sets:[
{name:"Obsidian Codex",score:30},
{name:"Scroll of the Hero of Cinder City",score:25},
{name:"Marechaussee Hunter",score:20},
{name:"Deepwood Memories",score:15}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["Elemental Mastery","ATK%"],
goblet:["Pyro DMG Bonus"],
circlet:["Crit Rate","Crit DMG"]
},

substats:{
"Crit Rate":10,
"Crit DMG":10,
"HP%":0,
"HP":0,
"ATK%":8,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":0,
"Elemental Mastery":6
}
},


{
character:"Mika",
image:"https://static.wikia.nocookie.net/gensin-impact/images/5/5c/Mika_Item.png/revision/latest?cb=20230321101924",
name:"Heal & Buff Support",

sets:[
{name:"Noblesse Oblige",score:30},
{name:"Ocean-Hued Clam",score:25},
{name:"Song of Days Past",score:20},
{name:"Scroll of the Hero of Cinder City",score:10},
{name:"Maiden Beloved",score:15}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["Energy Recharge","HP%"],
goblet:["HP%"],
circlet:["Healing Bonus","Crit Rate"]
},

substats:{
"Crit Rate":8,
"Crit DMG":0,
"HP%":6,
"HP":4,
"ATK%":0,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":10,
"Elemental Mastery":0
}
},

{
    character:"Mitya",
    image:"https://static.wikia.nocookie.net/gensin-impact/images/0/08/Mitya_Item.png/revision/latest?cb=20261104022120",
    name:"On-Field DPS",
    sets:[
        {name:"Disenchantment in Deep Shadow",score:30},
        {name:"Gilded Dreams",score:30}
    ],
    mainStats:{
        flower:["HP"],
        feather:["ATK"],
        sands:["Elemental Mastery"],
        goblet:["Elemental Mastery"],
        circlet:["Crit Rate","Crit DMG","Elemental Mastery"],
    },
    substats:{
        "Crit Rate":10,
        "Crit DMG":10,
        "Elemental Mastery":10,
        "Energy Recharge":8,
        "HP%":0,
        "HP":0,
        "ATK%":0,
        "ATK":0,
        "DEF%":0,
        "DEF":0
    }
},

{
character:"Mona",
image:"https://static.wikia.nocookie.net/gensin-impact/images/0/03/Mona_Item.png/revision/latest?cb=20260304040343",
name:"Buff Support",

sets:[
{name:"Celestial Gift",score:30},
{name:"Noblesse Oblige",score:25},
{name:"Tenacity of the Millelith",score:20},
{name:"Scroll of the Hero of Cinder City",score:20}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["Energy Recharge","ATK%"],
goblet:["Hydro DMG Bonus","ATK%"],
circlet:["Crit Rate"]
},

substats:{
"Crit Rate":8,
"Crit DMG":0,
"HP%":0,
"HP":0,
"ATK%":6,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":10,
"Elemental Mastery":0
}
},


{
character:"Mualani",
image:"https://static.wikia.nocookie.net/gensin-impact/images/5/5d/Mualani_Item.png/revision/latest?cb=20240828060917",
name:"Vaporize DPS",

sets:[
{name:"Obsidian Codex",score:30},
{name:"Heart of Depth",score:25},
{name:"Marechaussee Hunter",score:20}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["HP%","Elemental Mastery"],
goblet:["Hydro DMG Bonus"],
circlet:["Crit Rate","Crit DMG","HP%","Elemental Mastery"]
},

substats:{
"Crit Rate":10,
"Crit DMG":10,
"HP%":8,
"HP":6,
"ATK%":0,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":0,
"Elemental Mastery":8
}
},


{
character:"Nahida",
image:"https://static.wikia.nocookie.net/gensin-impact/images/a/ab/Nahida_Item.png/revision/latest?cb=20221102032035",
name:"Buff Support & Damage",

sets:[
{name:"Deepwood Memories",score:30},
{name:"Gilded Dreams",score:25},
{name:"Golden Troupe",score:25},
{name:"Tenaciry of the Millelith",score:20},
{name:"Flower of Paradise Lost",score:15}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["Elemental Mastery"],
goblet:["Elemental Mastery","Dendro DMG Bonus"],
circlet:["Elemental Mastery","Crit DMG","Crit Rate"]
},

substats:{
"Crit Rate":8,
"Crit DMG":8,
"HP%":0,
"HP":0,
"ATK%":6,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":10,
"Elemental Mastery":8
}
},


{
character:"Navia",
image:"https://static.wikia.nocookie.net/gensin-impact/images/0/0d/Navia_Item.png/revision/latest?cb=20231220022138",
name:"DPS",

sets:[
{name:"Nighttime Whispers in the Echoing Woods",score:30},
{name:"Golden Troupe",score:25},
{name:"Marechaussee Hunter",score:20},
{name:"A Day Carved From Rising Winds",score:20}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["ATK%"],
goblet:["Geo DMG Bonus"],
circlet:["Crit Rate","Crit DMG"]
},

substats:{
"Crit Rate":8,
"Crit DMG":8,
"HP%":0,
"HP":0,
"ATK%":6,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":10,
"Elemental Mastery":0
}
},


{
character:"Nefer",
image:"https://static.wikia.nocookie.net/gensin-impact/images/e/ef/Nefer_Item.png/revision/latest?cb=20251022051847",
name:"DPS",

sets:[
{name:"Night of the Sky's Unveiling",score:30}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["Elemental Mastery"],
goblet:["Elemental Mastery"],
circlet:["Crit Rate","Crit DMG"]
},

substats:{
"Crit Rate":10,
"Crit DMG":10,
"HP%":0,
"HP":0,
"ATK%":0,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":0,
"Elemental Mastery":8
}
},


{
character:"Nevuillette",
image:"https://static.wikia.nocookie.net/gensin-impact/images/3/35/Neuvillette_Item.png/revision/latest?cb=20230927113115",
name:"DPS",

sets:[
{name:"Marechaussee Hunter",score:30},
{name:"Heart of Depth",score:25},
{name:"Retracing Bolide",score:20},
{name:"Wanderer's Troupe",score:20},
{name:"Nymph's Dream",score:20}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["HP%"],
goblet:["Hydro DMG Bonus","HP%"],
circlet:["HP%","Crit DMG","Crit Rate"]
},

substats:{
"Crit Rate":10,
"Crit DMG":10,
"HP%":10,
"HP":8,
"ATK%":0,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":8,
"Elemental Mastery":0
}
},


{
character:"Nicole",
image:"https://static.wikia.nocookie.net/gensin-impact/images/a/a5/Nicole_Item.png/revision/latest?cb=20260520063721",
name:"Shield & Buff Support",

sets:[
{name:"Celestial Gift",score:30},
{name:"Scroll of the Hero of Cinder City",score:25},
{name:"Noblesse Oblige",score:20}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["Energy Recharge","ATK%"],
goblet:["ATK%"],
circlet:["ATK%","Crit Rate"]
},

substats:{
"Crit Rate":8,
"Crit DMG":0,
"HP%":0,
"HP":0,
"ATK%":10,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":10,
"Elemental Mastery":0
}
},

{
character:"Nilou",
image:"https://static.wikia.nocookie.net/gensin-impact/images/d/d2/Nilou_Item.png/revision/latest?cb=20221014113744",
name:"Bloom Support",

sets:[
{name:"Vourukasha's Glow",score:30},
{name:"Flower of Paradise Lost",score:25},
{name:"Gilded Dreams",score:20},
{name:"Deepwood Memories",score:15}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["HP%"],
goblet:["HP%"],
circlet:["HP%"]
},

substats:{
"Crit Rate":0,
"Crit DMG":0,
"HP%":10,
"HP":8,
"ATK%":0,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":0,
"Elemental Mastery":6
}
},

{
character:"Ningguang",
image:"https://static.wikia.nocookie.net/gensin-impact/images/e/ee/Ningguang_Item.png/revision/latest?cb=20260304040407",
name:"DPS",

sets:[
{name:"Nighttime Whispers in the Echoing Woods",score:30},
{name:"Husk of Opulent Dreams",score:25},
{name:"Emblem of Severed Fate",score:20},
{name:"Archaic Petra",score:15},
{name:"Thundersoother",score:10},
{name:"Lavawalker",score:10}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["ATK%"],
goblet:["Geo DMG Bonus"],
circlet:["Crit Rate","Crit DMG"]
},

substats:{
"Crit Rate":10,
"Crit DMG":10,
"HP%":0,
"HP":0,
"ATK%":8,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":6,
"Elemental Mastery":0
}
},

{
character:"Noelle",
image:"https://static.wikia.nocookie.net/gensin-impact/images/5/5b/Noelle_Item.png/revision/latest?cb=20210621072719",
name:"DPS",

sets:[
{name:"Husk of Opulent Dreams",score:30},
{name:"Retracing Bolide",score:25},
{name:"Gladiator's Finale",score:25},
{name:"Nighttime Whispers in the Echoing Woods",score:25},
{name:"Marechaussee Hunter",score:20}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["DEF%","ATK%","Energy Recharge"],
goblet:["Geo DMG Bonus"],
circlet:["Crit Rate","Crit DMG"]
},

substats:{
"Crit Rate":10,
"Crit DMG":10,
"HP%":0,
"HP":0,
"ATK%":0,
"ATK":0,
"DEF%":6,
"DEF":0,
"Energy Recharge":8,
"Elemental Mastery":0
}
},

{
character:"Noelle",
image:"https://static.wikia.nocookie.net/gensin-impact/images/5/5b/Noelle_Item.png/revision/latest?cb=20210621072719",
name:"Driver",

sets:[
{name:"Archaic Petra",score:30},
{name:"Husk of Opulent Dreams",score:25},
{name:"Retracing Bolide",score:20},
{name:"Gladiator's Finale",score:20},
{name:"Nighttime Whispers in the Echoing Woods",score:20}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["DEF%","Energy Recharge"],
goblet:["Geo DMG Bonus","DEF%"],
circlet:["Crit Rate","Crit DMG","DEF%"]
},

substats:{
"Crit Rate":10,
"Crit DMG":10,
"HP%":0,
"HP":0,
"ATK%":0,
"ATK":0,
"DEF%":6,
"DEF":0,
"Energy Recharge":8,
"Elemental Mastery":0
}
},
{
    character:"Noelle",
    image:"https://static.wikia.nocookie.net/gensin-impact/images/5/5b/Noelle_Item.png/revision/latest?cb=20210621072719",
    name:"Lunar-Crystallize DPS",
    sets:[
        {name:"Husk of Opulent Dreams",score:30},
        {name:"Nighttime Whispers in the Echoing Woods",score:25},
        {name:"Retracing Bolide",score:25},
        {name:"Gladiator's Finale",score:25}
    ],
    mainStats:{
        flower:["HP"],
        feather:["ATK"],
        sands:["DEF%","ATK%","Energy Recharge"],
        goblet:["Geo DMG Bonus","DEF%"],
        circlet:["Crit Rate","Crit DMG"]
    },
    substats:{
        "Energy Recharge":10,
        "Crit Rate":8,
        "Crit DMG":8,
        "DEF%":6,
        "ATK%":4,
        "Elemental Mastery":2,
        "HP%":0,
        "HP":0,
        "ATK":0,
        "DEF":0
    }
},
{
    character:"Odette",
    image:"https://static.wikia.nocookie.net/gensin-impact/images/8/88/Odette_Item.png/revision/latest?cb=20260812033959",
    name:"Off-field DPS",
    sets:[
        {name:"Heart of the Furnace",score:30},
        {name:"Disenchantment in Deep Shadow",score:25},
        {name:"Blizzard Strayer",score:20},
        {name:"Tenacity of the Millelith",score:20},
        {name:"A Day Carved From Rising Winds",score:15}
    ],
    mainStats:{
        flower:["HP"],
        feather:["ATK"],
        sands:["ATK%"],
        goblet:["ATK%"],
        circlet:["Crit Rate","Crit DMG"]
    },
    substats:{
        "Crit Rate":10,
        "Crit DMG":10,
        "ATK%":8,
        "Elemental Mastery":6,
        "Energy Recharge":0,
        "HP%":0,
        "HP":0,
        "ATK":0,
        "DEF%":0,
        "DEF":0
    }
},
{
character:"Ororon",
image:"https://static.wikia.nocookie.net/gensin-impact/images/6/67/Ororon_Item.png/revision/latest?cb=20241120132631",
name:"Off-Field DPS",

sets:[
{name:"Scroll of the Hero of Cinder City",score:30},
{name:"Noblesse Oblige",score:25},
{name:"Emblem of Severed Fate",score:20}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["ATK%","Energy Recharge"],
goblet:["Electro DMG Bonus"],
circlet:["Crit Rate","Crit DMG"]
},

substats:{
"Crit Rate":8,
"Crit DMG":8,
"HP%":0,
"HP":0,
"ATK%":6,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":10,
"Elemental Mastery":6
}
},

{
character:"Ororon",
image:"https://static.wikia.nocookie.net/gensin-impact/images/6/67/Ororon_Item.png/revision/latest?cb=20241120132631",
name:"Off-Field Reaction DPS",

sets:[
{name:"Scroll of the Hero of Cinder City",score:30},
{name:"Noblesse Oblige",score:25},
{name:"Emblem of Severed Fate",score:20}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["Elemental Mastery","Energy Recharge"],
goblet:["Elemental Mastery"],
circlet:["Elemental Mastery"]
},

substats:{
"Crit Rate":8,
"Crit DMG":8,
"HP%":0,
"HP":0,
"ATK%":6,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":10,
"Elemental Mastery":6
}
},

{
character:"Prune",
image:"https://static.wikia.nocookie.net/gensin-impact/images/9/9d/Prune_Item.png/revision/latest?cb=20260520080023",
name:"Buff Support",

sets:[
{name:"Viridescent Venerer",score:30},
{name:"Celestial Gift",score:30},
{name:"Noblesse Oblige",score:25}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["Energy Recharge","ATK%"],
goblet:["ATK%"],
circlet:["ATK%","Crit Rate"]
},

substats:{
"Crit Rate":6,
"Crit DMG":0,
"HP%":0,
"HP":0,
"ATK%":8,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":10,
"Elemental Mastery":0
}
},

{
    character:"Traveler",
    image:"https://static.wikia.nocookie.net/gensin-impact/images/1/14/Lumine_Item.png/revision/latest?cb=20260521152946",
    name:"Pyro DPS",
    sets:[
        {name:"Obsidian Codex",score:30},
        {name:"Scroll of the Hero of Cinder City",score:25},
        {name:"Crimson Witch of Flames",score:20},
        {name:"Gilded Dreams",score:20}
    ],
    mainStats:{
        flower:["HP"],
        feather:["ATK"],
        sands:["Energy Recharge","ATK%","Elemental Mastery"],
        goblet:["Pyro DMG Bonus"],
        circlet:["Crit Rate","Crit DMG"]
    },
    substats:{
        "Energy Recharge":10,
        "Crit Rate":8,
        "Crit DMG":8,
        "Elemental Mastery":6,
        "ATK%":4,
        "HP%":0,
        "HP":0,
        "ATK":0,
        "DEF%":0,
        "DEF":0
    }
},

{
character:"Traveler",
image:"https://static.wikia.nocookie.net/gensin-impact/images/1/14/Lumine_Item.png/revision/latest?cb=20260521152946",
name:"Pyro Buff Support",

sets:[
{name:"Scroll of the hero of Cinder City",score:30},
{name:"Tenacity of the Millelith",score:25},
{name:"Noblesse Oblige",score:25}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["Energy Recharge","ATK%"],
goblet:["Pyro DMG Bonus"],
circlet:["Crit DMG","Crit Rate"]
},

substats:{
"Crit Rate":8,
"Crit DMG":8,
"HP%":0,
"HP":0,
"ATK%":6,
"ATK":0,
"DEF%":4,
"DEF":0,
"Energy Recharge":10,
"Elemental Mastery":0
}
},


{
character:"Qiqi",
image:"https://static.wikia.nocookie.net/gensin-impact/images/c/c3/Qiqi_Item.png/revision/latest?cb=20210621072721",
name:"Heal & Buff Support",

sets:[
{name:"Tenacity of the Millelith",score:30},
{name:"Scroll of the Hero of Cinder City",score:25},
{name:"Ocean-Hued Clam",score:20},
{name:"Song of Days Past",score:15}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["ATK%","Energy Recharge"],
goblet:["ATK%"],
circlet:["Healing Bonus","ATK%"]
},

substats:{
"Crit Rate":4,
"Crit DMG":0,
"HP%":0,
"HP":0,
"ATK%":10,
"ATK":6,
"DEF%":2,
"DEF":0,
"Energy Recharge":8,
"Elemental Mastery":0
}
},

{
character:"Raiden Shogun",
image:"https://static.wikia.nocookie.net/gensin-impact/images/b/bc/Raiden_Shogun_Item.png/revision/latest?cb=20240717071804",
name:"DPS & Energy Support",

sets:[
{name:"Emblem of Severed Fate",score:30},
{name:"Tenacity of the Millelith",score:20}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["Energy Recharge","ATK%"],
goblet:["Electro DMG Bonus","ATK%"],
circlet:["Crit Rate","Crit DMG"]
},

substats:{
"Crit Rate":10,
"Crit DMG":10,
"HP%":0,
"HP":0,
"ATK%":8,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":6,
"Elemental Mastery":4
}
},

{
character:"Razor",
image:"https://static.wikia.nocookie.net/gensin-impact/images/8/8d/Razor_Item.png/revision/latest?cb=20210621072722",
name:"DPS",

sets:[
{name:"A Day Carved From Rising Winds",score:30},
{name:"Echoes of an Offering",score:25},
{name:"Emblem of Severed Fate",score:25},
{name:"Thundering Fury",score:25},
{name:"Gladiator's Finale",score:25},
{name:"Marechaussee Hunter",score:20}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["ATK%","Energy Recharge"],
goblet:["Electro DMG Bonus"],
circlet:["Crit Rate","Crit DMG"]
},

substats:{
"Crit Rate":8,
"Crit DMG":8,
"HP%":0,
"HP":0,
"ATK%":6,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":10,
"Elemental Mastery":0
}
},

{
character:"Rosaria",
image:"https://static.wikia.nocookie.net/gensin-impact/images/a/a5/Rosaria_Item.png/revision/latest?cb=20210621072723",
name:"Buff Support",

sets:[
{name:"Noblesse Oblige",score:30},
{name:"Scroll of the Hero of Cinder City",score:25},
{name:"Archaic Petra",score:20}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["ATK%","Energy Recharge"],
goblet:["Cryo DMG Bonus"],
circlet:["Crit Rate"]
},

substats:{
"Crit Rate":8,
"Crit DMG":6,
"HP%":0,
"HP":0,
"ATK%":4,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":10,
"Elemental Mastery":0
}
},

{
character:"Rosaria",
image:"https://static.wikia.nocookie.net/gensin-impact/images/a/a5/Rosaria_Item.png/revision/latest?cb=20210621072723",
name:"Freeze",

sets:[
{name:"Blizzard Strayer",score:30},
{name:"Emblem of Severed Fate",score:30},
{name:"Noblesse Oblige",score:25}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["ATK%"],
goblet:["Cryo DMG Bonus"],
circlet:["Crit DMG"]
},

substats:{
"Crit Rate":4,
"Crit DMG":8,
"HP%":0,
"HP":0,
"ATK%":6,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":10,
"Elemental Mastery":0
}
},

{
character:"Rosaria",
image:"https://static.wikia.nocookie.net/gensin-impact/images/a/a5/Rosaria_Item.png/revision/latest?cb=20210621072723",
name:"Reverse Melt",

sets:[
{name:"Gilded Dreams",score:30},
{name:"Emblem of Severed Fate",score:30}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["Elemental Mastery","ATK%"],
goblet:["Cryo DMG Bonus"],
circlet:["Crit Rate","Crit DMG"]
},

substats:{
"Crit Rate":8,
"Crit DMG":6,
"HP%":0,
"HP":0,
"ATK%":4,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":10,
"Elemental Mastery":4
}
},

{
character:"Sandrone",
image:"https://static.wikia.nocookie.net/gensin-impact/images/1/1b/Sandrone_Item.png/revision/latest?cb=20260701022140",
name:"DPS",

sets:[
{name:"Disenchantment in Deep Shadow",score:30},
{name:"Gilded Dreams",score:25}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["ATK%"],
goblet:["ATK%"],
circlet:["Crit Rate","Crit DMG"]
},

substats:{
"Crit Rate":10,
"Crit DMG":10,
"HP%":0,
"HP":0,
"ATK%":8,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":4,
"Elemental Mastery":6
}
},

{
character:"Sangonomiya Kokomi",
image:"https://static.wikia.nocookie.net/gensin-impact/images/3/34/Sangonomiya_Kokomi_Item.png/revision/latest?cb=20210921144931",
name:"Heal Support",

sets:[
{name:"Tenacity of the Millelith",score:30},
{name:"Ocean-Hued Clam",score:25},
{name:"Scroll of the Hero of Cinder City",score:20},
{name:"Song of Days Past",score:15},
{name:"Maiden Beloved",score:10}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["Energy Recharge","HP%"],
goblet:["HP%"],
circlet:["Healing Bonus","HP%"]
},

substats:{
"Crit Rate":0,
"Crit DMG":0,
"HP%":8,
"HP":4,
"ATK%":6,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":10,
"Elemental Mastery":0
}
},

{
character:"Sayu",
image:"https://static.wikia.nocookie.net/gensin-impact/images/2/25/Sayu_Item.png/revision/latest?cb=20210810103116",
name:"Heal Support",

sets:[
{name:"Viridescent Venerer",score:30},
{name:"Noblesse Oblige",score:25},
{name:"Ocean-Hued Clam",score:20}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["Energy Recharge","Elemental Mastery"],
goblet:["Elemental Mastery","ATK%"],
circlet:["Healing Bonus","Elemental Mastery"]
},

substats:{
"Crit Rate":4,
"Crit DMG":0,
"HP%":0,
"HP":0,
"ATK%":6,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":10,
"Elemental Mastery":8
}
},

{
character:"Sethos",
image:"https://static.wikia.nocookie.net/gensin-impact/images/6/65/Sethos_Item.png/revision/latest?cb=20240605022433",
name:"Charged Attack DPS",

sets:[
{name:"Wanderer's Troupe",score:30},
{name:"Gilded Dreams",score:25}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["Elemental Mastery","Energy Recharge"],
goblet:["Electro DMG Bonus"],
circlet:["Crit Rate","Crit DMG"]
},

substats:{
"Crit Rate":8,
"Crit DMG":8,
"HP%":0,
"HP":0,
"ATK%":4,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":10,
"Elemental Mastery":6
}
},


{
character:"Sethos",
image:"https://static.wikia.nocookie.net/gensin-impact/images/6/65/Sethos_Item.png/revision/latest?cb=20240605022433",
name:"Normal Attack DPS",

sets:[
{name:"Wanderer's Troupe",score:30},
{name:"Desert Pavilion Chronicle",score:30},
{name:"Gilded Dreams",score:25}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["Elemental Mastery","Energy Recharge"],
goblet:["Electro DMG Bonus"],
circlet:["Crit DMG","Crit Rate"]
},

substats:{
"Crit Rate":8,
"Crit DMG":8,
"HP%":0,
"HP":0,
"ATK%":4,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":10,
"Elemental Mastery":6
}
},


{
character:"Shenhe",
image:"https://static.wikia.nocookie.net/gensin-impact/images/4/44/Shenhe_Item.png/revision/latest?cb=20220105040849",
name:"Buff Support",

sets:[
{name:"Noblesse Oblige",score:30},
{name:"Scroll of the Hero of Cinder City",score:25}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["ATK%","Energy Recharge"],
goblet:["ATK%"],
circlet:["ATK%"]
},

substats:{
"Crit Rate":6,
"Crit DMG":6,
"HP%":0,
"HP":0,
"ATK%":8,
"ATK":4,
"DEF%":0,
"DEF":0,
"Energy Recharge":10,
"Elemental Mastery":0
}
},

{
character:"Shikanoin Heizou",
image:"https://static.wikia.nocookie.net/gensin-impact/images/4/4a/Shikanoin_Heizou_Item.png/revision/latest?cb=20220713061110",
name:"Anemo DPS",

sets:[
{name:"Viridescent Venerer",score:30},
{name:"Golden Troupe",score:25},
{name:"Desert Pavilion Chronicle",score:20}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["ATK%"],
goblet:["Anemo DMG Bonus"],
circlet:["Crit Rate","Crit DMG"]
},

substats:{
"Crit Rate":10,
"Crit DMG":10,
"HP%":0,
"HP":0,
"ATK%":8,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":6,
"Elemental Mastery":4
}
},

{
character:"Shikanoin Heizou",
image:"https://static.wikia.nocookie.net/gensin-impact/images/4/4a/Shikanoin_Heizou_Item.png/revision/latest?cb=20220713061110",
name:"Reaction DPS",

sets:[
{name:"Viridescent Venerer",score:30},
{name:"Noblesse Oblige",score:25}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["Elemental Mastery"],
goblet:["Elemental Mastery"],
circlet:["Elemental Mastery"]
},

substats:{
"Crit Rate":4,
"Crit DMG":0,
"HP%":0,
"HP":0,
"ATK%":8,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":6,
"Elemental Mastery":10
}
},

{
character:"Sigewinne",
image:"https://static.wikia.nocookie.net/gensin-impact/images/1/1e/Sigewinne_Item.png/revision/latest?cb=20240625101902",
name:"Heal Support",

sets:[
{name:"Ocean-Hued Clam",score:30},
{name:"Song of Days Past",score:30},
{name:"Scroll of the Hero of Cinder City",score:30},
{name:"Tenacity of the Millelith",score:20}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["HP%"],
goblet:["HP%"],
circlet:["HP%","Crit Rate"]
},

substats:{
"Crit Rate":4,
"Crit DMG":0,
"HP%":10,
"HP":8,
"ATK%":0,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":0,
"Elemental Mastery":0
}
},

{
character:"Skirk",
image:"https://static.wikia.nocookie.net/gensin-impact/images/0/04/Skirk_Item.png/revision/latest?cb=20250618025148",
name:"DPS",

sets:[
{name:"Finale of the Deep Galleries",score:30},
{name:"Desert Pavilion Chronicle",score:25},
{name:"Gladiator's Finale",score:20},
{name:"Blizzard Strayer",score:15},
{name:"Marechaussee Hunter",score:10}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["ATK%"],
goblet:["Cryo DMG Bonus","ATK%"],
circlet:["Crit Rate","Crit DMG"]
},

substats:{
"Crit Rate":10,
"Crit DMG":10,
"HP%":0,
"HP":0,
"ATK%":8,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":0,
"Elemental Mastery":0
}
},

{
character:"Sucrose",
image:"https://static.wikia.nocookie.net/gensin-impact/images/2/2d/Sucrose_Item.png/revision/latest?cb=20210621072725",
name:"Elemental Mastery Support",

sets:[
{name:"Viridescent Venerer",score:30}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["Elemental Mastery"],
goblet:["Elemental Mastery"],
circlet:["Elemental Mastery"]
},

substats:{
"Crit Rate":4,
"Crit DMG":4,
"HP%":0,
"HP":0,
"ATK%":6,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":8,
"Elemental Mastery":10
}
},

{
character:"Tartaglia",
image:"https://static.wikia.nocookie.net/gensin-impact/images/d/d5/Tartaglia_Item.png/revision/latest?cb=20210621072726",
name:"DPS",

sets:[
{name:"Nymph's Dream",score:30},
{name:"A Day Carved From Rising Winds",score:25},
{name:"Heart of Depth",score:20}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["ATK%"],
goblet:["Hydro DMG Bonus"],
circlet:["Crit Rate","Crit DMG"]
},

substats:{
"Crit Rate":10,
"Crit DMG":10,
"HP%":0,
"HP":0,
"ATK%":8,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":4,
"Elemental Mastery":6
}
},

{
character:"Thoma",
image:"https://static.wikia.nocookie.net/gensin-impact/images/a/a9/Thoma_Item.png/revision/latest?cb=20211102104019",
name:"Burgeon Support",

sets:[
{name:"Flower of Paradise Lost",score:30},
{name:"Gilded Dreams",score:25},
{name:"Crimson Witch of Flames",score:15}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["Energy Recharge","Elemental Mastery"],
goblet:["Elemental Mastery"],
circlet:["Elemental Mastery"]
},

substats:{
"Crit Rate":2,
"Crit DMG":0,
"HP%":6,
"HP":4,
"ATK%":0,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":10,
"Elemental Mastery":8
}
},

{
character:"Tighnari",
image:"https://static.wikia.nocookie.net/gensin-impact/images/b/b3/Tighnari_Item.png/revision/latest?cb=20220825214234",
name:"Quick Swap DPS",

sets:[
{name:"Wanderer's Troupe",score:30},
{name:"Gilded Dreams",score:30},
{name:"Emblem of Severed Fate",score:25},
{name:"Deepwood Memories",score:15}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["ATK%","Elemental Mastery","Energy Recharge"],
goblet:["Dendro DMG Bonus"],
circlet:["Crit Rate","Crit DMG"]
},

substats:{
"Crit Rate":10,
"Crit DMG":10,
"HP%":0,
"HP":0,
"ATK%":8,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":6,
"Elemental Mastery":8
}
},
{
    character:"Valeriy",
    image:"https://static.wikia.nocookie.net/gensin-impact/images/4/48/Valeriy_Item.png/revision/latest?cb=20261104022720",
    name:"Buff & Shield Support",
    sets:[
        {name:"Heart of the Furnace",score:30},
        {name:"Noblesse Oblige",score:30},
        {name:"A Day Carved From Rising Winds",score:25}
    ],
    mainStats:{
        flower:["HP"],
        feather:["ATK"],
        sands:["ATK%","Energy Recharge"],
        goblet:["ATK%"],
        circlet:["ATK%","Crit Rate"]
    },
    substats:{
        "Energy Recharge":10,
        "ATK%":8,
        "Crit Rate":6,
        "ATK":4,
        "Crit DMG":0,
        "HP%":0,
        "HP":0,
        "DEF%":0,
        "DEF":0,
        "Elemental Mastery":0
    }
},
{
character:"Varesa",
image:"https://static.wikia.nocookie.net/gensin-impact/images/9/9b/Varesa_Item.png/revision/latest?cb=20250326020741",
name:"Plunge DPS",

sets:[
{name:"Long Night's Oath",score:30},
{name:"Obsidian Codex",score:25},
{name:"Marechaussee Hunter",score:20}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["ATK%"],
goblet:["Electro DMG Bonus"],
circlet:["Crit Rate","Crit DMG"]
},

substats:{
"Crit Rate":8,
"Crit DMG":8,
"HP%":0,
"HP":0,
"ATK%":6,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":10,
"Elemental Mastery":0
}
},

{
character:"Varka",
image:"https://static.wikia.nocookie.net/gensin-impact/images/7/7e/Varka_Item.png/revision/latest?cb=20260225073916",
name:"DPS",

sets:[
{name:"A Day Carved From Rising Winds",score:30},
{name:"Shimenawa's Reminiscence",score:25},
{name:"Desert Pavilion Chronicle",score:20},
{name:"Gladiator's Finale",score:15}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["ATK%"],
goblet:["ATK%"],
circlet:["Crit Rate","Crit DMG"]
},

substats:{
"Crit Rate":10,
"Crit DMG":10,
"HP%":0,
"HP":0,
"ATK%":8,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":0,
"Elemental Mastery":0
}
},

{
character:"Venti",
image:"https://static.wikia.nocookie.net/gensin-impact/images/5/58/Venti_Item.png/revision/latest?cb=20210621072728",
name:"Off-Field DPS",

sets:[
{name:"Viridescent Venerer",score:30},
{name:"A Day Carved From Rising Winds",score:25},
{name:"Noblesse Oblige",score:20},
{name:"Scroll of the Hero of Cinder City",score:15},
{name:"Gilded Dreams",score:10},
{name:"Emblem of Severed Fate",score:5}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["ATK%","Elemental Mastery"],
goblet:["Anemo DMG Bonus","ATK%","Elemental Mastery"],
circlet:["Crit Rate","Crit DMG","Elemental Mastery"]
},

substats:{
"Crit Rate":10,
"Crit DMG":10,
"HP%":0,
"HP":0,
"ATK%":8,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":4,
"Elemental Mastery":6
}
},

{
character:"Venti",
image:"https://static.wikia.nocookie.net/gensin-impact/images/5/58/Venti_Item.png/revision/latest?cb=20210621072728",
name:"On-Field DPS",

sets:[
{name:"A Day Carved From Rising Winds",score:30},
{name:"Desert Pavilion Chronicle",score:25},
{name:"Echoes of an Offering",score:20},
{name:"Viridescent Venerer",score:15}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["ATK%"],
goblet:["Anemo DMG Bonus"],
circlet:["Crit Rate","Crit DMG"]
},

substats:{
"Crit Rate":10,
"Crit DMG":10,
"HP%":0,
"HP":0,
"ATK%":8,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":4,
"Elemental Mastery":6
}
},

{
    character:"Vesna",
    image:"https://static.wikia.nocookie.net/gensin-impact/images/a/af/Vesna_Item.png/revision/latest?cb=20260923165759",
    name:"Stellar Swirl DPS",
    sets:[
        {name:"Scarlet Proof",score:30},
        {name:"Gilded Dreams",score:25},
        {name:"A Day Carved From Rising Winds",score:20}
    ],
    mainStats:{
        flower:["HP"],
        feather:["ATK"],
        sands:["ATK%"],
        goblet:["ATK%"],
        circlet:["Crit Rate","Crit DMG"]
    },
    substats:{
        "Crit Rate":10,
        "Crit DMG":10,
        "ATK%":8,
        "Elemental Mastery":6,
        "Energy Recharge":4,
        "HP%":0,
        "HP":0,
        "ATK":0,
        "DEF%":0,
        "DEF":0
    }
},
{
    character:"Vodyanitsa",
    image:"https://static.wikia.nocookie.net/gensin-impact/images/7/7d/Vodyanitsa_Item.png/revision/latest?cb=20260923165407",
    name:"Heal & Buff Support",
    sets:[
        {name:"Tenacity of the Millelith",score:30},
        {name:"Scroll of the Hero of Cinder City",score:25},
        {name:"Song of Days Past",score:20},
        {name:"Ocean-Hued Clam",score:20}
    ],
    mainStats:{
        flower:["HP"],
        feather:["ATK"],
        sands:["HP%"],
        goblet:["HP%"],
        circlet:["HP%"]
    },
    substats:{
        "HP%":10,
        "HP":8,
        "Energy Recharge":6,
        "Crit Rate":0,
        "Crit DMG":0,
        "ATK%":0,
        "ATK":0,
        "DEF%":0,
        "DEF":0,
        "Elemental Mastery":0
    }
},
{
character:"Wanderer",
image:"https://static.wikia.nocookie.net/gensin-impact/images/b/b1/Wanderer_Item.png/revision/latest?cb=20221207033426",
name:"DPS",

sets:[
{name:"Desert Pavilion Chronicle",score:30},
{name:"Shimenawa's Reminiscence",score:25},
{name:"Echoes of an Offering",score:20},
{name:"Viridescent Venerer",score:15},
{name:"Blizzard Strayer",score:10}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["ATK%"],
goblet:["Anemo DMG Bonus"],
circlet:["Crit Rate","Crit DMG"]
},

substats:{
"Crit Rate":10,
"Crit DMG":10,
"HP%":0,
"HP":0,
"ATK%":8,
"ATK":6,
"DEF%":0,
"DEF":0,
"Energy Recharge":4,
"Elemental Mastery":0
}
},

{
character:"Wriothesley",
image:"https://static.wikia.nocookie.net/gensin-impact/images/f/fb/Wriothesley_Item.png/revision/latest?cb=20231017103332",
name:"Melt DPS",

sets:[
{name:"Marechaussee Hunter",score:30},
{name:"Shimenawa's Reminiscence",score:25},
{name:"Gilded Dreams",score:20},
{name:"Echoes of an Offering",score:15}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["ATK%","Elemental Mastery"],
goblet:["Cryo DMG Bonus"],
circlet:["Crit Rate","Crit DMG"]
},

substats:{
"Crit Rate":10,
"Crit DMG":10,
"HP%":0,
"HP":0,
"ATK%":8,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":0,
"Elemental Mastery":8
}
},

{
character:"Wriothesley",
image:"https://static.wikia.nocookie.net/gensin-impact/images/f/fb/Wriothesley_Item.png/revision/latest?cb=20231017103332",
name:"Mono Cryo / Freeze DPS",

sets:[
{name:"Marechaussee Hunter",score:30},
{name:"Blizzard Strayer",score:25},
{name:"Shimenawa's Reminiscence",score:25}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["ATK%"],
goblet:["Cryo DMG Bonus"],
circlet:["Crit DMG"]
},

substats:{
"Crit Rate":10,
"Crit DMG":10,
"HP%":0,
"HP":0,
"ATK%":8,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":6,
"Elemental Mastery":0
}
},
{
    character:"Wriothesley",
    image:"https://static.wikia.nocookie.net/gensin-impact/images/f/fb/Wriothesley_Item.png/revision/latest?cb=20231017103332",
    name:"Stellar-Conduct DPS",
    sets:[
        {name:"Disenchantment in Deep Shadow",score:30},
        {name:"Marechaussee Hunter",score:25},
        {name:"A Day Carved From Rising Winds",score:20},
        {name:"Blizzard Strayer",score:15},
        {name:"Gilded Dreams",score:10}
    ],
    mainStats:{
        flower:["HP"],
        feather:["ATK"],
        sands:["ATK%","Elemental Mastery"],
        goblet:["ATK%"],
        circlet:["Crit Rate","Crit DMG"]
    },
    substats:{
        "Crit Rate":10,
        "Crit DMG":10,
        "ATK%":8,
        "Elemental Mastery":8,
        "HP%":0,
        "HP":0,
        "ATK":0,
        "DEF%":0,
        "DEF":0,
        "Energy Recharge":0
    }
},

{
character:"Xiangling",
image:"https://static.wikia.nocookie.net/gensin-impact/images/f/ff/Xiangling_Item.png/revision/latest?cb=20210621072729",
name:"Off-Field DPS",

sets:[
{name:"Emblem of Severed Fate",score:30},
{name:"Crimson Witch of Flames",score:25},
{name:"Gilded Dreams",score:20},
{name:"Noblesse Oblige",score:15},
{name:"Deepwood Memories",score:15}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["Energy Recharge","ATK%","Elemental Mastery"],
goblet:["Pyro DMG Bonus"],
circlet:["Crit Rate","Crit DMG"]
},

substats:{
"Crit Rate":10,
"Crit DMG":10,
"HP%":0,
"HP":0,
"ATK%":6,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":10,
"Elemental Mastery":4
}
},

{
character:"Xianyun",
image:"https://static.wikia.nocookie.net/gensin-impact/images/e/ec/Xianyun_Item.png/revision/latest?cb=20240131024554",
name:"Buff & Heal Support",

sets:[
{name:"Viridescent Venerer",score:30},
{name:"Noblesse Oblige",score:25},
{name:"Ocean-Hued Clam",score:20},
{name:"Song of Days Past",score:20},
{name:"Scroll of the Hero of Cinder City",score:20}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["ATK%","Energy Recharge"],
goblet:["ATK%"],
circlet:["ATK%"]
},

substats:{
"Crit Rate":4,
"Crit DMG":0,
"HP%":0,
"HP":0,
"ATK%":8,
"ATK":6,
"DEF%":0,
"DEF":0,
"Energy Recharge":10,
"Elemental Mastery":0
}
},

{
character:"Xiao",
image:"https://static.wikia.nocookie.net/gensin-impact/images/1/11/Xiao_Item.png/revision/latest?cb=20210621072730",
name:"DPS",

sets:[
{name:"Marechaussee Hunter",score:30},
{name:"Vermillion Hereafter",score:30},
{name:"Long Night's Oath",score:30},
{name:"Desert Pavilion Chronicle",score:25}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["ATK%"],
goblet:["Anemo DMG Bonus","ATK%"],
circlet:["Crit Rate","Crit DMG"]
},

substats:{
"Crit Rate":8,
"Crit DMG":8,
"HP%":0,
"HP":0,
"ATK%":6,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":10,
"Elemental Mastery":0
}
},

{
character:"Xilonen",
image:"https://static.wikia.nocookie.net/gensin-impact/images/a/ab/Xilonen_Item.png/revision/latest?cb=20241009114730",
name:"Buff & Reaction Support",

sets:[
{name:"Scroll of the Hero of Cinder City",score:30},
{name:"Archaic Petra",score:25},
{name:"Noblesse Oblige",score:20}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["DEF%","Energy Recharge"],
goblet:["DEF%"],
circlet:["DEF%","Healing Bonus","Crit Rate"]
},

substats:{
"Crit Rate":4,
"Crit DMG":0,
"HP%":0,
"HP":0,
"ATK%":0,
"ATK":0,
"DEF%":8,
"DEF":6,
"Energy Recharge":10,
"Elemental Mastery":0
}
},

{
character:"Xingqiu",
image:"https://static.wikia.nocookie.net/gensin-impact/images/5/52/Xingqiu_Item.png/revision/latest?cb=20260304040420",
name:"Off-Field DPS",

sets:[
{name:"Emblem of Severed Fate",score:30},
{name:"Noblesse Oblige",score:25},
{name:"Scroll of the Hero of Cinder City",score:25},
{name:"Nymph's Dream",score:20},
{name:"A Day Carved From Rising Winds",score:20},
{name:"Blizzard Strayer",score:15}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["Energy Recharge","ATK%"],
goblet:["Hydro DMG Bonus"],
circlet:["Crit Rate","Crit DMG"]
},

substats:{
"Crit Rate":10,
"Crit DMG":10,
"HP%":0,
"HP":0,
"ATK%":8,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":6,
"Elemental Mastery":0
}
},

{
character:"Xinyan",
image:"https://static.wikia.nocookie.net/gensin-impact/images/5/59/Xinyan_Item.png/revision/latest?cb=20260304040443",
name:"Physical DPS",

sets:[
{name:"Pale Flame",score:30},
{name:"Disenchantment in Deep Shadows",score:25},
{name:"A Day Carved From Rising Winds",score:20},
{name:"Retracing Bolide",score:20}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["ATK%","Energy Recharge"],
goblet:["Physical DMG Bonus"],
circlet:["Crit Rate","Crit DMG"]
},

substats:{
"Crit Rate":10,
"Crit DMG":10,
"HP%":0,
"HP":0,
"ATK%":8,
"ATK":0,
"DEF%":4,
"DEF":0,
"Energy Recharge":6,
"Elemental Mastery":0
}
},
{
    character:"Xinyan",
    image:"https://static.wikia.nocookie.net/gensin-impact/images/5/59/Xinyan_Item.png/revision/latest?cb=20260304040443",
    name:"Shield Support",
    sets:[
        {name:"Tenacity of the Millelith",score:30},
        {name:"Scroll of the Hero of Cinder City",score:30},
        {name:"Husk of Opulent Dreams",score:25}
    ],
    mainStats:{
        flower:["HP"],
        feather:["ATK"],
        sands:["DEF%","Energy Recharge"],
        goblet:["DEF%"],
        circlet:["DEF%"]
    },
    substats:{
        "Energy Recharge":10,
        "ATK%":8,
        "DEF%":8,
        "Crit Rate":6,
        "Crit DMG":6,
        "HP%":0,
        "HP":0,
        "ATK":0,
        "DEF":0,
        "Elemental Mastery":0
    }
},

{
character:"Yae Miko",
image:"https://static.wikia.nocookie.net/gensin-impact/images/7/77/Yae_Miko_Item.png/revision/latest?cb=20220216070129",
name:"Stellar Conduct Off-Field DPS",

sets:[
{name:"Disenchantment in Deep Shadow",score:30},
{name:"Gilded Dreams",score:25},
{name:"Golden Troupe",score:20}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["ATK%","Elemental Mastery"],
goblet:["ATK%","Elemental Mastery"],
circlet:["Crit Rate","Crit DMG"]
},

substats:{
"Crit Rate":10,
"Crit DMG":10,
"HP%":0,
"HP":0,
"ATK%":8,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":4,
"Elemental Mastery":6
}
},

{
character:"Yanfei",
image:"https://static.wikia.nocookie.net/gensin-impact/images/b/bf/Yanfei_Item.png/revision/latest?cb=20260304040508",
name:"Vaporise DPS",

sets:[
{name:"Crimson Witch of Flames",score:30},
{name:"Gilded Dreams",score:25},
{name:"Wanderer's Troupe",score:20},
{name:"Marechaussee Hunter",score:15}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["ATK%","Elemental Mastery"],
goblet:["Pyro DMG Bonus"],
circlet:["Crit Rate","Crit DMG"]
},

substats:{
"Crit Rate":10,
"Crit DMG":10,
"HP%":0,
"HP":0,
"ATK%":8,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":4,
"Elemental Mastery":6
}
},

{
character:"Yaoyao",
image:"https://static.wikia.nocookie.net/gensin-impact/images/c/c2/Yaoyao_Item.png/revision/latest?cb=20230118023140",
name:"Heal Support",

sets:[
{name:"Deepwood Memories",score:30},
{name:"Tenacity of the Millelith",score:25},
{name:"Ocean-Hued Clam",score:15},
{name:"Maiden Beloved",score:10},
{name:"Flower of Paradise Lost",score:5},
{name:"Gilded Dreams",score:5}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["HP%","Energy Recharge"],
goblet:["HP%"],
circlet:["Healing Bonus"]
},

substats:{
"Crit Rate":4,
"Crit DMG":0,
"HP%":8,
"HP":6,
"ATK%":0,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":10,
"Elemental Mastery":0
}
},

{
character:"Yelan",
image:"https://static.wikia.nocookie.net/gensin-impact/images/e/ea/Yelan_Item.png/revision/latest?cb=20220531064319",
name:"Off-Field DPS",

sets:[
{name:"Emblem of Severed Fate",score:30},
{name:"Marechaussee Hunter",score:20}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["Energy Recharge","HP%"],
goblet:["Hydro DMG Bonus","HP%"],
circlet:["Crit Rate","Crit DMG","HP%"]
},

substats:{
"Crit Rate":8,
"Crit DMG":8,
"HP%":8,
"HP":6,
"ATK%":0,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":10,
"Elemental Mastery":0
}
},

{
character:"Yoimiya",
image:"https://static.wikia.nocookie.net/gensin-impact/images/b/b4/Yoimiya_Item.png/revision/latest?cb=20210810103711",
name:"Overload DPS",

sets:[
{name:"Shimenawa's Reminiscence",score:30},
{name:"Echoes of an Offering",score:25}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["ATK%","Elemental Mastery"],
goblet:["Pyro DMG Bonus"],
circlet:["Crit Rate","Crit DMG"]
},

substats:{
"Crit Rate":10,
"Crit DMG":10,
"HP%":0,
"HP":0,
"ATK%":8,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":4,
"Elemental Mastery":6
}
},
{
    character:"Yoimiya",
    image:"https://static.wikia.nocookie.net/gensin-impact/images/b/b4/Yoimiya_Item.png/revision/latest?cb=20210810103711",
    name:"Vaporize/Melt DPS",
    sets:[
        {name:"Shimenawa's Reminiscence",score:30},
        {name:"Crimson Witch of Flames",score:25},
        {name:"Gilded Dreams",score:20},
        {name:"Echoes of an Offering",score:15}
    ],
    mainStats:{
        flower:["HP"],
        feather:["ATK"],
        sands:["ATK%","Elemental Mastery"],
        goblet:["Pyro DMG Bonus"],
        circlet:["Crit Rate","Crit DMG"]
    },
    substats:{
        "Crit Rate":10,
        "Crit DMG":10,
        "ATK%":8,
        "Elemental Mastery":6,
        "Energy Recharge":4,
        "HP%":0,
        "HP":0,
        "ATK":0,
        "DEF%":0,
        "DEF":0
    }
},

{
character:"Yumemizuki Mizuki",
image:"https://static.wikia.nocookie.net/gensin-impact/images/5/5d/Yumemizuki_Mizuki_Item.png/revision/latest?cb=20250212083414",
name:"Reaction DPS",

sets:[
{name:"Viridescent Venerer",score:30}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["Elemental Mastery","Energy Recharge"],
goblet:["Elemental Mastery"],
circlet:["Elemental Mastery"]
},

substats:{
"Crit Rate":4,
"Crit DMG":0,
"HP%":0,
"HP":0,
"ATK%":0,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":10,
"Elemental Mastery":8
}
},
{
    character:"Yumemizuki Mizuki",
    image:"https://static.wikia.nocookie.net/gensin-impact/images/5/5d/Yumemizuki_Mizuki_Item.png/revision/latest?cb=20250212083414",
    name:"Stellar Swirl DPS",
    sets:[
        {name:"Gilded Dreams",score:30},
        {name:"Scarlet Proof",score:25}
    ],
    mainStats:{
        flower:["HP"],
        feather:["ATK"],
        sands:["Elemental Mastery"],
        goblet:["Elemental Mastery"],
        circlet:["Crit Rate","Crit DMG"]
    },
    substats:{
        "Crit Rate":10,
        "Crit DMG":10,
        "Elemental Mastery":8,
        "Energy Recharge":6,
        "HP%":0,
        "HP":0,
        "ATK%":0,
        "ATK":0,
        "DEF%":0,
        "DEF":0
    }
},

{
character:"Yun Jin",
image:"https://static.wikia.nocookie.net/gensin-impact/images/3/30/Yun_Jin_Item.png/revision/latest?cb=20220105040851",
name:"Buff Support",

sets:[
{name:"Husk of Opulent Dreams",score:30},
{name:"Noblesse Oblige",score:20},
{name:"Scroll of the Hero of Cinder City",score:20}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["DEF%","Energy Recharge"],
goblet:["DEF%"],
circlet:["DEF%","Crit Rate"]
},

substats:{
"Crit Rate":4,
"Crit DMG":0,
"HP%":0,
"HP":0,
"ATK%":0,
"ATK":0,
"DEF%":10,
"DEF":6,
"Energy Recharge":8,
"Elemental Mastery":0
}
},

{
character:"Zhongli",
image:"https://static.wikia.nocookie.net/gensin-impact/images/b/b1/Zhongli_Item.png/revision/latest?cb=20210621072736",
name:"Shield Support",

sets:[
{name:"Archaic Petra",score:30},
{name:"Scroll of the Hero of Cinder City",score:30},
{name:"Deepwood Memories",score:25},
{name:"Tenacity of the Millelith",score:20}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["HP%"],
goblet:["HP%"],
circlet:["HP%","Crit Rate"]
},

substats:{
"Crit Rate":4,
"Crit DMG":0,
"HP%":10,
"HP":8,
"ATK%":0,
"ATK":0,
"DEF%":0,
"DEF":0,
"Energy Recharge":6,
"Elemental Mastery":0
}
},

{
character:"Zibai",
image:"https://static.wikia.nocookie.net/gensin-impact/images/f/f1/Zibai_Item.png/revision/latest?cb=20260205111249",
name:"DPS",

sets:[
{name:"Night of the Sky's Unveiling",score:30},
{name:"Husk of Opulent Dreams",score:25}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["DEF%"],
goblet:["DEF%"],
circlet:["Crit Rate","Crit DMG"]
},

substats:{
"Crit Rate":10,
"Crit DMG":10,
"HP%":0,
"HP":0,
"ATK%":0,
"ATK":0,
"DEF%":8,
"DEF":0,
"Energy Recharge":6,
"Elemental Mastery":4
}
},



];

window.characters = characters;