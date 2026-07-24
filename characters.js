const characters = [
{
character:"Aino",
name:"Reaction Support",

sets:[
{name:"Silken Moon's Serenade",score:30},
{name:"Noblesse Oblige",score:25},
{name:"Scroll of the Hero od Cinder City",score:20},
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
name:"Off-Feild DPS",

sets:[
{name:"Husk Of Opulant Dreams",score:30},
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
];

window.characters = characters;