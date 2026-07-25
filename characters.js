const characters = [
{
character:"Aino",
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
"Elemental Mastery":0
}
},

{
character:"Candace",
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
name:"DPS",

sets:[
{name:"Fragment of Harmonic Whimsy",score:30},
{name:"Gladiator's Finale",score:25},
{name:"Thundering Fury",score:20}
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
character:"Collei",
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
character:"Cyno",
name:"Aggravate DPS",

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
name:"Quickbloom/Hyperbloom DPS",

sets:[
{name:"Thundering Fury",score:30},
{name:"Gilded Dreams",score:25},
{name:"Flower of Paradise Lost",score:25},
{name:"Gladiator's Finale",score:20}
],

mainStats:{
flower:["HP"],
feather:["ATK"],
sands:["Elemental Mastery"],
goblet:["Electro DMG Bonus","Elemental Mastery"],
circlet:["Crit Rate","Crit DMG","Elemental Mastery"]
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
"Elemental Mastery":10
}
},

{
character:"Dahlia",
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
name:"Dendro Reaction Support",

sets:[
{name:"Deepwood Memories",score:30},
{name:"Noblesse Oblige",score:25},
{name:"Gilded Dreams",score:20}
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
name:"Cryo DPS",

sets:[
{name:"Blizzard Strayer",score:30},
{name:"Golden Troupe",score:25},
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
name:"Physical DPS",

sets:[
{name:"Pale Flame",score:30},
{name:"Golden Troupe",score:25},
{name:"Gladiator's Finale",score:20},
{name:"Marechaussee Hunter",score:15}
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
name:"Geo DPS",

sets:[
{name:"Nighttime Whispers in the Echoing Woods",score:30},
{name:"Golden Troupe",score:30},
{name:"Emblem of Severed Fate",score:25},
{name:"Archaic Petra",score:20},
{name:"Noblesse Oblige",score:15}
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



];

window.characters = characters;