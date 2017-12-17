// database that holds all the binding information
db = {

    ///////////////////////////////
    // List Of All Binds
    binds: [
        
        ///////////////////////////////
        // Level 1 Binds
        {
            id: 1,
            name: "Basic Fighter",
            level: 1,
            cost: 3000,
            end: false,
            requirements: [ ],
        },
        
        ///////////////////////////////
        // Level 2 Binds
        {
            id: 2,
            name: "Militia Commander",
            level: 2,
            cost: 0,
            end: false,
            requirements: [ 1, 1, 1 ],
        }, {
            id: 3,
            name: "Footman",
            level: 2,
            cost: 4000,
            end: false,
            requirements: [ 1 ],
        }, {
            id: 4,
            name: "Lap Dog",
            level: 2,
            cost: 3000,
            end: false,
            requirements: [ 1 ],
        }, {
            id: 5,
            name: "Apprentice",
            level: 2,
            cost: 5000,
            end: false,
            requirements: [ 1 ],
        }, {
            id: 6,
            name: "Flame Apprentice",
            level: 2,
            cost: 6000,
            end: false,
            requirements: [ 1 ],
        }, {
            id: 7,
            name: "Archer",
            level: 2,
            cost: 4000,
            end: false,
            requirements: [ 1 ],
        }, {
            id: 8,
            name: "Raccoon",
            level: 2,
            cost: 3000,
            end: false,
            requirements: [ 1 ],
        }, {
            id: 9,
            name: "Rock Golem",
            level: 2,
            cost: 5000,
            end: false,
            requirements: [ 1 ],
        }, {
            id: 10,
            name: "Toad Man",
            level: 2,
            cost: 6000,
            end: false,
            requirements: [ 1 ],
        },

        ///////////////////////////////
        // Level 3 Binds
        {
            id: 11,
            name: "Captain",
            level: 3,
            cost: 12000,
            end: false,
            requirements: [ 3 ],
        }, {
            id: 12,
            name: "Hunting Dog",
            level: 3,
            cost: 10000,
            end: false,
            requirements: [ 4 ],
        }, {
            id: 13,
            name: "Wizard",
            level: 3,
            cost: 14000,
            end: false,
            requirements: [ 5 ],
        }, {
            id: 14,
            name: "Flame Conjurer",
            level: 3,
            cost: 15000,
            end: false,
            requirements: [ 6 ],
        }, {
            id: 15,
            name: "Rifleman",
            level: 3,
            cost: 12000,
            end: false,
            requirements: [ 7 ],
        }, {
            id: 16,
            name: "Pack Mule",
            level: 3,
            cost: 10000,
            end: false,
            requirements: [ 8 ],
        }, {
            id: 17,
            name: "Stone Golem",
            level: 3,
            cost: 14000,
            end: false,
            requirements: [ 9 ],
        }, {
            id: 18,
            name: "Sea Turtle",
            level: 3,
            cost: 15000,
            end: false,
            requirements: [ 10 ],
        },
        
        ///////////////////////////////
        // Level 4 Binds
        {
            id: 19,
            name: "Secret Spy",
            level: 4,
            cost: 0,
            end: false,
            requirements: [ 2, 2 ],
        }, {
            id: 20,
            name: "Hazardous Chemical",
            level: 4,
            cost: 25000,
            end: false,
            requirements: [ 1 ],
        }, {
            id: 21,
            name: "Mystical Eye",
            level: 4,
            cost: 58000,
            end: false,
            requirements: [ 1 ],
        }, {
            id: 22,
            name: "Knight",
            level: 4,
            cost: 28000,
            end: false,
            requirements: [ 11 ],
        }, {
            id: 23,
            name: "Dire Wolf",
            level: 4,
            cost: 25000,
            end: false,
            requirements: [ 12 ],
        }, {
            id: 24,
            name: "Magician",
            level: 4,
            cost: 31000,
            end: false,
            requirements: [ 13 ],
        }, {
            id: 25,
            name: "Disciple of Fire",
            level: 4,
            cost: 33000,
            end: false,
            requirements: [ 14 ],
        }, {
            id: 26,
            name: "Marine",
            level: 4,
            cost: 28000,
            end: false,
            requirements: [ 15 ],
        }, {
            id: 27,
            name: "Horse",
            level: 4,
            cost: 25000,
            end: false,
            requirements: [ 16 ],
        }, {
            id: 28,
            name: "Steel Golem",
            level: 4,
            cost: 31000,
            end: false,
            requirements: [ 17 ],
        }, {
            id: 29,
            name: "Sea Lord",
            level: 4,
            cost: 33000,
            end: false,
            requirements: [ 18 ],
        },

        ///////////////////////////////
        // Level 5 Binds
        
        {
            id: 30,
            name: "Armored Wolf",
            level: 5,
            cost: 0,
            end: false,
            requirements: [ 23, 28 ],
        }, {
            id: 31,
            name: "Bat Flame",
            level: 5,
            cost: 0,
            end: false,
            requirements: [ 19, 25 ],
        }, {
            id: 32,
            name: "Battlemage",
            level: 5,
            cost: 0,
            end: false,
            requirements: [ 22, 24 ],
        }, {
            id: 33,
            name: "Big Bear",
            level: 5,
            cost: 0,
            end: false,
            requirements: [ 21, 23 ],
        }, {
            id: 34,
            name: "Bird Man",
            level: 5,
            cost: 0,
            end: false,
            requirements: [ 27, 28 ],
        }, {
            id: 35,
            name: "Burning Spill",
            level: 5,
            cost: 0,
            end: false,
            requirements: [ 20, 25 ],
        }, {
            id: 36,
            name: "Cavalry",
            level: 5,
            cost: 0,
            end: false,
            requirements: [ 22, 27 ],
        }, {
            id: 37,
            name: "Chaos Crab",
            level: 5,
            cost: 0,
            end: false,
            requirements: [ 21, 29 ],
        }, {
            id: 38,
            name: "Chaos Knight",
            level: 5,
            cost: 0,
            end: false,
            requirements: [ 22, 23 ],
        }, {
            id: 39,
            name: "Conjuror",
            level: 5,
            cost: 0,
            end: false,
            requirements: [ 24, 27 ],
        }, {
            id: 40,
            name: "Deformed Golem",
            level: 5,
            cost: 0,
            end: false,
            requirements: [ 20, 28 ],
        }, {
            id: 41,
            name: "Druid",
            level: 5,
            cost: 0,
            end: false,
            requirements: [ 23, 24 ],
        }, {
            id: 42,
            name: "Dyrad",
            level: 5,
            cost: 0,
            end: false,
            requirements: [ 26, 27 ],
        }, {
            id: 43,
            name: "Electric Mage",
            level: 5,
            cost: 0,
            end: false,
            requirements: [ 24, 26 ],
        }, {
            id: 44,
            name: "Elemental Revenant",
            level: 5,
            cost: 0,
            end: false,
            requirements: [ 19, 21 ],
        }, {
            id: 45,
            name: "Elite Knight",
            level: 5,
            cost: 0,
            end: false,
            requirements: [ 19, 22 ],
        }, {
            id: 46,
            name: "Eye of Chaos",
            level: 5,
            cost: 0,
            end: false,
            requirements: [ 21, 21, 21 ],
        }, {
            id: 47,
            name: "Fighter of the Flame",
            level: 5,
            cost: 0,
            end: false,
            requirements: [ 22, 25 ],
        }, {
            id: 48,
            name: "Fire Seer",
            level: 5,
            cost: 0,
            end: false,
            requirements: [ 23, 25 ],
        }, {
            id: 49,
            name: "Flame Cavalry",
            level: 5,
            cost: 0,
            end: false,
            requirements: [ 25, 27 ],
        }, {
            id: 50,
            name: "Flaming Golem",
            level: 5,
            cost: 0,
            end: false,
            requirements: [ 25, 28 ],
        }, {
            id: 51,
            name: "Giant Jungle Beast",
            level: 5,
            cost: 0,
            end: false,
            requirements: [ 28, 29 ],
        }, {
            id: 52,
            name: "Hydra",
            level: 5,
            cost: 0,
            end: false,
            requirements: [ 20, 29 ],
        }, {
            id: 53,
            name: "Hydralisk",
            level: 5,
            cost: 0,
            end: false,
            requirements: [ 20, 26 ],
        }, {
            id: 54,
            name: "Infected Drake",
            level: 5,
            cost: 0,
            end: false,
            requirements: [ 19, 20 ],
        }, {
            id: 55,
            name: "Mage of the Wilds",
            level: 5,
            cost: 0,
            end: false,
            requirements: [ 21, 24 ],
        }, {
            id: 56,
            name: "Magical Fire Breathing Dragon",
            level: 5,
            cost: 0,
            end: false,
            requirements: [ 24, 25 ],
        }, {
            id: 57,
            name: "Magical Sheep",
            level: 5,
            cost: 0,
            end: false,
            requirements: [ 21, 27 ],
        }, {
            id: 58,
            name: "Mana Golem",
            level: 5,
            cost: 0,
            end: false,
            requirements: [ 24, 28 ],
        }, {
            id: 59,
            name: "Mechanical Knight",
            level: 5,
            cost: 0,
            end: false,
            requirements: [ 22, 26 ],
        }, {
            id: 60,
            name: "Mutant Horse",
            level: 5,
            cost: 0,
            end: false,
            requirements: [ 20, 27 ],
        }, {
            id: 61,
            name: "Naga Archer",
            level: 5,
            cost: 0,
            end: false,
            requirements: [ 26, 29 ],
        }, {
            id: 62,
            name: "Naga Myrmidon",
            level: 5,
            cost: 0,
            end: false,
            requirements: [ 22, 29 ],
        }, {
            id: 63,
            name: "Necromancer",
            level: 5,
            cost: 0,
            end: false,
            requirements: [ 20, 24 ],
        }, {
            id: 64,
            name: "Night Rider",
            level: 5,
            cost: 0,
            end: false,
            requirements: [ 23, 26 ],
        }, {
            id: 65,
            name: "Plated Ogre",
            level: 5,
            cost: 0,
            end: false,
            requirements: [ 21, 28 ],
        }, {
            id: 66,
            name: "Projectile of the Sun",
            level: 5,
            cost: 0,
            end: false,
            requirements: [ 21, 25 ],
        }, {
            id: 67,
            name: "Rock Blaster",
            level: 5,
            cost: 0,
            end: false,
            requirements: [ 26, 28 ],
        }, {
            id: 68,
            name: "Satyr",
            level: 5,
            cost: 0,
            end: false,
            requirements: [ 23, 27 ],
        }, {
            id: 69,
            name: "Sea Horse",
            level: 5,
            cost: 0,
            end: false,
            requirements: [ 27, 29 ],
        }, {
            id: 70,
            name: "Sea Wolf",
            level: 5,
            cost: 0,
            end: false,
            requirements: [ 23, 29 ],
        }, {
            id: 71,
            name: "Siege Tank",
            level: 5,
            cost: 0,
            end: false,
            requirements: [ 21, 26 ],
        }, {
            id: 72,
            name: "Siren",
            level: 5,
            cost: 0,
            end: false,
            requirements: [ 24, 29 ],
        }, {
            id: 73,
            name: "Skeletal Knight",
            level: 5,
            cost: 0,
            end: false,
            requirements: [ 20, 22 ],
        }, {
            id: 74,
            name: "Skink",
            level: 5,
            cost: 0,
            end: false,
            requirements: [ 19, 23 ],
        }, {
            id: 75,
            name: "Steam Being",
            level: 5,
            cost: 0,
            end: false,
            requirements: [ 25, 29 ],
        }, {
            id: 76,
            name: "Stone Man",
            level: 5,
            cost: 0,
            end: false,
            requirements: [ 22, 28 ],
        }, {
            id: 77,
            name: "Strange Magician",
            level: 5,
            cost: 0,
            end: false,
            requirements: [ 19, 24 ],
        }, {
            id: 78,
            name: "Terran Firebat",
            level: 5,
            cost: 0,
            end: false,
            requirements: [ 25, 26 ],
        }, {
            id: 79,
            name: "The Forgotten One",
            level: 5,
            cost: 0,
            end: false,
            requirements: [ 20, 21 ],
        }, {
            id: 80,
            name: "Warrior of the Wilds",
            level: 5,
            cost: 0,
            end: false,
            requirements: [ 21, 22 ],
        }, {
            id: 81,
            name: "Wyvern",
            level: 5,
            cost: 0,
            end: false,
            requirements: [ 19, 26 ],
        }, {
            id: 82,
            name: "Zergling",
            level: 5,
            cost: 0,
            end: false,
            requirements: [ 20, 23 ],
        }, {
            id: 83,
            name: "hypeX",
            level: 5,
            cost: 0,
            end: false,
            requirements: [ 19, 19, 19 ],
        },

        ///////////////////////////////
        // Level 6 Binds
        {
            id: 84,
            name: "Banshee",
            level: 6,
            cost: 0,
            end: false,
            requirements: [ 19, 63 ],
        }, {
            id: 85,
            name: "Chaos Hydra",
            level: 6,
            cost: 0,
            end: false,
            requirements: [ 46, 52 ],
        }, {
            id: 86,
            name: "Cow Man",
            level: 6,
            cost: 0,
            end: false,
            requirements: [ 42, 68 ],
        }, {
            id: 87,
            name: "Death Knight",
            level: 6,
            cost: 0,
            end: false,
            requirements: [ 38, 73 ],
        }, {
            id: 88,
            name: "Death Revenant",
            level: 6,
            cost: 0,
            end: false,
            requirements: [ 44, 73 ],
        }, {
            id: 89,
            name: "Denjira - Master of Sheep",
            level: 6,
            cost: 0,
            end: false,
            requirements: [ 19, 57, 57 ],
        }, {
            id: 90,
            name: "Draenei Magician",
            level: 6,
            cost: 0,
            end: false,
            requirements: [ 41, 53 ],
        }, {
            id: 91,
            name: "Earth Revenant",
            level: 6,
            cost: 0,
            end: false,
            requirements: [ 41, 44 ],
        }, {
            id: 92,
            name: "Elite Warrior",
            level: 6,
            cost: 0,
            end: false,
            requirements: [ 32, 76 ],
        }, {
            id: 93,
            name: "Fire Truck",
            level: 6,
            cost: 0,
            end: false,
            requirements: [ 67, 78 ],
        }, {
            id: 94,
            name: "Flame Revenant",
            level: 6,
            cost: 0,
            end: false,
            requirements: [ 44, 50 ],
        }, {
            id: 95,
            name: "Flaming Makrura",
            level: 6,
            cost: 0,
            end: false,
            requirements: [ 35, 70 ],
        }, {
            id: 96,
            name: "Force of Nature",
            level: 6,
            cost: 0,
            end: false,
            requirements: [ 55, 80 ],
        }, {
            id: 97,
            name: "Frankenstein",
            level: 6,
            cost: 0,
            end: false,
            requirements: [ 40, 43 ],
        }, {
            id: 98,
            name: "Giant Spider",
            level: 6,
            cost: 0,
            end: false,
            requirements: [ 51, 52 ],
        }, {
            id: 99,
            name: "Gryphon",
            level: 6,
            cost: 0,
            end: false,
            requirements: [ 19, 68 ],
        }, {
            id: 100,
            name: "Holy Knight",
            level: 6,
            cost: 0,
            end: false,
            requirements: [ 36, 80 ],
        }, {
            id: 101,
            name: "Infected Wyvern",
            level: 6,
            cost: 0,
            end: false,
            requirements: [ 54, 81 ],
        }, {
            id: 102,
            name: "Infested Terran",
            level: 6,
            cost: 0,
            end: false,
            requirements: [ 78, 82 ],
        }, {
            id: 103,
            name: "Kirby64",
            level: 6,
            cost: 0,
            end: false,
            requirements: [ 57, 57, 60 ],
        }, {
            id: 104,
            name: "Kyonite",
            level: 6,
            cost: 0,
            end: true,
            requirements: [ 1, 66, 80 ],
        }, {
            id: 105,
            name: "Lich",
            level: 6,
            cost: 0,
            end: false,
            requirements: [ 58, 63 ],
        }, {
            id: 106,
            name: "Magical Lizard",
            level: 6,
            cost: 0,
            end: false,
            requirements: [ 39, 74 ],
        }, {
            id: 107,
            name: "Mechanical Mammoth",
            level: 6,
            cost: 0,
            end: false,
            requirements: [ 37, 71 ],
        }, {
            id: 108,
            name: "Naga Lord",
            level: 6,
            cost: 0,
            end: false,
            requirements: [ 61, 62 ],
        }, {
            id: 109,
            name: "Night Shadow",
            level: 6,
            cost: 0,
            end: false,
            requirements: [ 19, 64 ],
        }, {
            id: 110,
            name: "Ogre Rider",
            level: 6,
            cost: 0,
            end: false,
            requirements: [ 43, 65 ],
        }, {
            id: 111,
            name: "Pyromancer Wyvern",
            level: 6,
            cost: 0,
            end: false,
            requirements: [ 31, 34 ],
        }, {
            id: 112,
            name: "Rusty Machinery",
            level: 6,
            cost: 0,
            end: false,
            requirements: [ 59, 69 ],
        }, {
            id: 113,
            name: "Sand Beast",
            level: 6,
            cost: 0,
            end: false,
            requirements: [ 21, 33 ],
        }, {
            id: 114,
            name: "Sea Revenant",
            level: 6,
            cost: 0,
            end: false,
            requirements: [ 44, 69 ],
        }, {
            id: 115,
            name: "Skeletal Warrior",
            level: 6,
            cost: 0,
            end: false,
            requirements: [ 45, 54 ],
        }, {
            id: 116,
            name: "Sky Dragon",
            level: 6,
            cost: 0,
            end: false,
            requirements: [ 21, 56 ],
        }, {
            id: 117,
            name: "Spirit of Nature",
            level: 6,
            cost: 0,
            end: false,
            requirements: [ 19, 42 ],
        }, {
            id: 118,
            name: "Storm Revenant",
            level: 6,
            cost: 0,
            end: false,
            requirements: [ 43, 44 ],
        }, {
            id: 119,
            name: "Troll",
            level: 6,
            cost: 0,
            end: false,
            requirements: [ 42, 51 ],
        }, {
            id: 120,
            name: "Tuskarr Zombie",
            level: 6,
            cost: 0,
            end: false,
            requirements: [ 30, 75 ],
        }, {
            id: 121,
            name: "Two-Headed Ogre",
            level: 6,
            cost: 0,
            end: false,
            requirements: [ 65, 65 ],
        }, {
            id: 122,
            name: "Undead Siren",
            level: 6,
            cost: 0,
            end: false,
            requirements: [ 44, 72 ],
        }, {
            id: 123,
            name: "Warlock",
            level: 6,
            cost: 0,
            end: false,
            requirements: [ 48, 77 ],
        }, {
            id: 124,
            name: "Zerg Cerebrate",
            level: 6,
            cost: 0,
            end: false,
            requirements: [ 53, 79 ],
        }, 

        ///////////////////////////////
        // Level 7 Binds
        {
            id: 125,
            name: "Burning Royal Bird",
            level: 7,
            cost: 0,
            end: true,
            requirements: [ 111, 99 ],
        },  {
            id: 126,
            name: "Crazy Voodoo Troll",
            level: 7,
            cost: 0,
            end: true,
            requirements: [ 119, 46 ],
        },  {
            id: 127,
            name: "Destroyer Magnataur",
            level: 7,
            cost: 0,
            end: true,
            requirements: [ 107, 92 ],
        },  {
            id: 128,
            name: "Doom Tank",
            level: 7,
            cost: 0,
            end: true,
            requirements: [ 112, 93 ],
        },  {
            id: 129,
            name: "Flame Lord",
            level: 7,
            cost: 0,
            end: true,
            requirements: [ 47, 49, 66 ],
        },  {
            id: 130,
            name: "Hell Walker",
            level: 7,
            cost: 0,
            end: false,
            requirements: [ 120, 123 ],
        },  {
            id: 131,
            name: "Lord of Destruction",
            level: 7,
            cost: 0,
            end: false,
            requirements: [ 46, 56 ],
        },  {
            id: 132,
            name: "Magnificant",
            level: 7,
            cost: 0,
            end: true,
            requirements: [ 110, 95 ],
        },  {
            id: 133,
            name: "Master of Pain",
            level: 7,
            cost: 0,
            end: false,
            requirements: [ 46, 50 ],
        },  {
            id: 134,
            name: "Nature",
            level: 7,
            cost: 0,
            end: true,
            requirements: [ 117, 96 ],
        },  {
            id: 135,
            name: "NewbieNub",
            level: 7,
            cost: 0,
            end: true,
            requirements: [ 37, 66 ],
        },  {
            id: 136,
            name: "Queen of Torment",
            level: 7,
            cost: 0,
            end: false,
            requirements: [ 46, 63 ],
        },  {
            id: 137,
            name: "Sand Devorour",
            level: 7,
            cost: 0,
            end: true,
            requirements: [ 106, 113 ],
        },  {
            id: 138,
            name: "Spirit of Doom",
            level: 7,
            cost: 0,
            end: true,
            requirements: [ 119, 122 ],
        },  {
            id: 139,
            name: "Supreme Knight",
            level: 7,
            cost: 0,
            end: true,
            requirements: [ 100, 87 ],
        },  {
            id: 140,
            name: "The Incredible Hulk",
            level: 7,
            cost: 0,
            end: true,
            requirements: [ 100, 97 ],
        },  {
            id: 141,
            name: "Undead Guardian",
            level: 7,
            cost: 0,
            end: false,
            requirements: [ 115, 84 ],
        },  {
            id: 142,
            name: "Undead Lord of Dragon",
            level: 7,
            cost: 0,
            end: true,
            requirements: [ 101, 116 ],
        },  {
            id: 143,
            name: "Underworld Conjuror",
            level: 7,
            cost: 0,
            end: true,
            requirements: [ 105, 90 ],
        },  {
            id: 144,
            name: "Vengeance",
            level: 7,
            cost: 0,
            end: false,
            requirements: [ 109, 84 ],
        },  

        ///////////////////////////////
        // Level 8 Binds
        {
            id: 145,
            name: "Crypt Lord",
            level: 8,
            cost: 0,
            end: true,
            requirements: [ 105, 98 ],
        },  {
            id: 146,
            name: "Demon Lord",
            level: 8,
            cost: 0,
            end: true,
            requirements: [ 133, 144 ],
        },  {
            id: 147,
            name: "Milka Revenge",
            level: 8,
            cost: 0,
            end: true,
            requirements: [ 121, 86 ],
        },  {
            id: 148,
            name: "Xantrax",
            level: 8,
            cost: 0,
            end: true,
            requirements: [ 120, 92 ],
        },  {
            id: 149,
            name: "[w]In[D]",
            level: 8,
            cost: 0,
            end: true,
            requirements: [ 116, 89 ],
        },  

        ///////////////////////////////
        // Level 9 Binds
        {
            id: 150,
            name: "Balerius",
            level: 9,
            cost: 0,
            end: true,
            requirements: [ 101, 107 ],
        },  {
            id: 151,
            name: "JellyFIsh",
            level: 9,
            cost: 0,
            end: true,
            requirements: [ 85, 85 ],
        },  {
            id: 152,
            name: "ShrooMs",
            level: 9,
            cost: 0,
            end: true,
            requirements: [ 103, 89 ],
        },  {
            id: 153,
            name: "YOoYOo",
            level: 9,
            cost: 0,
            end: true,
            requirements: [ 103, 46 ],
        },

        ///////////////////////////////
        // Level 10 Binds
        {
            id: 154,
            name: "MaGic",
            level: 10,
            cost: 0,
            end: true,
            requirements: [ 130, 136 ],
        },  {
            id: 155,
            name: "The Overmind",
            level: 10,
            cost: 0,
            end: true,
            requirements: [ 102, 102, 124, 53, 82 ],
        },  {
            id: 156,
            name: "Vespa",
            level: 10,
            cost: 0,
            end: true,
            requirements: [ 108, 87, 97 ],
        },  

        ///////////////////////////////
        // Level 11 Binds
        {
            id: 157,
            name: "Blue_fir3 the Uber",
            level: 11,
            cost: 0,
            end: true,
            requirements: [ 131, 133, 136 ],
        },  {
            id: 158,
            name: "Quanyang",
            level: 11,
            cost: 0,
            end: true,
            requirements: [ 131, 141 ],
        },  

        ///////////////////////////////
        // Level 12 Binds
        {
            id: 159,
            name: "Mask of the Element",
            level: 12,
            cost: 0,
            end: true,
            requirements: [ 114, 118, 88, 91, 94 ],
        },

    ],

};

/// <summary>
/// Function that will attempt to get the specified bind by its id.
/// </summary>
/// <param name="id" type="Number">The id of the bind.</param>
/// <returns type="Object">The bind object, or null if not found.</returns>
db.getBindById = function(id) {

    // go through all the binds in the database
    for (i = 0; i < db.binds.length; i ++) {
        if (db.binds[i].id == id) 
            return db.binds[i];
    }

    // return null if no matches were found
    return null;

}

/// <summary>
/// Function that will attempt to get the id of the specified bind by searching
/// for their name in the database.
/// </summary>
/// <param name="name" type="String">The name of the bind.</param>
/// <returns type="Number">The bind Id, -1 if not found.</returns>
db.getIdByName = function(name){

    // iterate over each bind in the database
    for (i = 0; i < db.binds.length; i ++) {
        if (db.binds[i].name.equalIgnoreCase(name))
            return db.binds[i].id;
    }

    // if no matches are found, return -1.
    return -1;

};

// String prototype helper method for case-insensitive comparison
String.prototype.equalIgnoreCase = function(str) {
    return (str != null &&
        typeof str === 'string' &&
        this.toUpperCase() === str.toUpperCase());
};