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

{
character:"Alhaitham",
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
name:"Burst Support",

sets:[
{name:"Blizzard Strayer",score:30},
{name:"Emblem of  Severed Fate",score:25},
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
character:"Amber",
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
name:"Anemo DPS",

sets:[
{name:"Viridescent Venerer",score:30}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["Elemental Mastery","ATK%", "Energy Recharge"],
goblet:["Elemental Mastery","Anemo DMG Bonus"],
circlet:["Elemental Mastery","Crit Rate","Crit DMG"]
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
name:"DPS",

sets:[
{name:"Husk of Opulent Dreams",score:30},
{name:"Desert Pavillion Chronicle",score:25},
{name:"Retracting Bolide",score:20}
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
name:"DPS",

sets:[
{name:"Fragment of Harmonic Whismy",score:30},
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
"ATK":0
"DEF%":0,
"DEF":0,
"Energy Recharge":0,
"Elemental Mastery":8
}
},




{
character:"Baizhu",
name:"Heal Support",

sets:[
{name:"Deepwood Memories",score:30},
{name:"Ocean-Hued Clam ",score:25},
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


{
character:"Beidou",
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
"Elemental Mastery"0
}
},


];

window.characters = characters;