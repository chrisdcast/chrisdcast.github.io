//////////////////////////////////////
// Weapon Die Scale 0=d2 1=d4 2=d6 3=d8 4=d10 5=d12 6=2d8 7=d20 8=2d10 9=2d20
//////////////////////////////////////

//////////////////////////////////////
// Rarity Scale 0-19=Common 20-29=Uncommon 30+=Rare
//////////////////////////////////////

const gunDieScale = ["d2", "d4", "d6", "d8", "d10", "d12", "2d8", "d20", "2d10", "2d20"];
const armorDieScale = ["0", "d2", "d4", "d6", "d8"];

const baseGun = [
    {
        "name": "Mini Pistol", // Name of base weapon
        "dmgDie": 1, // Where that base weapon initially falls on the die scale
        "totalValue": 40, // The base weapon's initial money value.
        "totalRank": 10, // The base weapon's initial rarity rank 
        "bpMod": 2, // Build Points used for determining chance of having a mod or two
        "isAuto": false, // Base weapon's autofire capabilites
        "isIllegal": false,
        "isNonLethal": false
    },
    {
        "name": "Pistol",
        "dmgDie": 2,
        "totalValue": 60,
        "totalRank": 5,
        "bpMod": 5,
        "isAuto": false,
        "isIllegal": false,
        "isNonLethal": false
    },
    {
        "name": "SMG",
        "dmgDie": 2,
        "totalValue": 150,
        "totalRank": 10,
        "bpMod": 3,
        "isAuto": true,
        "isIllegal": false,
        "isNonLethal": false
    },
    {
        "name": "Revolver",
        "dmgDie": 3,
        "totalValue": 50,
        "totalRank": 15,
        "bpMod": 5,
        "isAuto": false,
        "isIllegal": false,
        "isNonLethal": false
    },
    {
        "name": "Shotgun",
        "dmgDie": 3,
        "totalValue": 350,
        "totalRank": 10,
        "bpMod": 4,
        "isAuto": false,
        "isIllegal": false,
        "isNonLethal": false
    },
    {
        "name": "Assault Rifle",
        "dmgDie": 3,
        "totalValue": 400,
        "totalRank": 10,
        "bpMod": 2,
        "isAuto": true,
        "isIllegal": false,
        "isNonLethal": false
    },
    {
        "name": "Pulse Rifle",
        "dmgDie": 4,
        "totalValue": 800,
        "totalRank": 15,
        "bpMod": 3,
        "isAuto": true,
        "isIllegal": false,
        "isNonLethal": false
    },
    {
        "name": "Sniper Rifle",
        "dmgDie": 8,
        "totalValue": 1000,
        "totalRank": 15,
        "bpMod": 6,
        "isAuto": false,
        "isIllegal": false,
        "isNonLethal": false
    }
];
const ammoTypeStandard = [
    {
        "name": "Standard Ammunition",
        "dieMod": 0,
        "nonLethalMod": null,
        "illegalMod": null,
        "valueMod": 0,
        "rankMod": 0,
        "bpMod": 0,
        "autoMod": null,
        "details": [],
        "descriptor": []
    },
    {
        "name": "Rubber Bullets",
        "dieMod": -2,
        "nonLethalMod": null,
        "illegalMod": null,
        "valueMod": -100,
        "rankMod": -10,
        "bpMod": 0,
        "autoMod": null,
        "details": [],
        "descriptor": ["Riot"]
    },
    {
        "name": "Taser Darts",
        "dieMod": -3,
        "nonLethalMod": null,
        "illegalMod": null,
        "valueMod": -100,
        "rankMod": -10,
        "bpMod": 0,
        "autoMod": null,
        "details": ["Target must test Toughness DR12 or fall prone"],
        "descriptor": ["Corp Sec Issued",
            "Incapacitating"]
    },
    {
        "name": "Armor Piercing",
        "dieMod": 1,
        "nonLethalMod": null,
        "illegalMod": true,
        "valueMod": 200,
        "rankMod": 10,
        "bpMod": 4,
        "autoMod": null,
        "details": ["Ignore 2 points of armor"],
        "descriptor": ["Combat",
            "Penetrating",
            "Shredding"]
    }
];
const ammoTypeExotic = [
    {
        "name": "Water",
        "dieMod": 0,
        "nonLethalMod": true,
        "illegalMod": null,
        "valueMod": -300,
        "rankMod": 0,
        "bpMod": 2,
        "autoMod": null,
        "details": ["On closer inspection you realize it's a really detailed water gun"],
        "descriptor": ["Collector's",
            "Life-like",
            "Toy"]
    },
    {
        "name": "Tranquilizer Darts",
        "dieMod": 0,
        "nonLethalMod": true,
        "illegalMod": null,
        "valueMod": 0,
        "rankMod": 5,
        "bpMod": 2,
        "autoMod": null,
        "details": ["Target must test Toughness DR 12 or fall asleep in d4 rounds"],
        "descriptor": ["Sleepy",
            "Tranquil",
            "Hunter's"]
    },
    {
        "name": "Spikey Balls",
        "dieMod": 0,
        "nonLethalMod": null,
        "illegalMod": null,
        "valueMod": 50,
        "rankMod": 10,
        "bpMod": 2,
        "autoMod": null,
        "details": ["Fires metal spikey balls that can act as caltrops after hitting their target"],
        "descriptor": ["Ballsy",
            "Brutal",
            "Bloody"]
    },
    {
        "name": "Harpoon",
        "dieMod": 1,
        "nonLethalMod": null,
        "illegalMod": null,
        "valueMod": 100,
        "rankMod": 5,
        "bpMod": 2,
        "autoMod": false,
        "details": ["Fires harpoon with carbon fiber rope tethered to the side of the weapon"],
        "descriptor": ["Nautical",
            "Gouging",
            "Captain's"]
    },
    {
        "name": "Remote Mines",
        "dieMod": 1,
        "nonLethalMod": null,
        "illegalMod": true,
        "valueMod": 100,
        "rankMod": 10,
        "bpMod": 4,
        "autoMod": null,
        "details": ["Fires mines that detonate on command"],
        "descriptor": ["Time Sensitive",
            "Explosive",
            "Remote"]
    },
    {
        "name": "Spider Mines",
        "dieMod": 1,
        "nonLethalMod": null,
        "illegalMod": true,
        "valueMod": 200,
        "rankMod": 15,
        "bpMod": 5,
        "autoMod": false,
        "details": ["Fires mines that can climb walls and detonate on command",
            "1-in-20 chance they turn on you"],
        "descriptor": ["Crawling",
            "Creepy",
            "Sentient"]
    },
    {
        "name": "Breaching Charges",
        "dieMod": 1,
        "nonLethalMod": null,
        "illegalMod": true,
        "valueMod": 300,
        "rankMod": 10,
        "bpMod": 5,
        "autoMod": null,
        "details": ["Fires sticky explosives primarily used to breach thick metal and brick surfaces",
            "Deals double damage to vehicles"],
        "descriptor": ["Breaching",
            "Tactical"]
    },
    {
        "name": "Bouncy Bullets",
        "dieMod": -1,
        "nonLethalMod": null,
        "illegalMod": null,
        "valueMod": 50,
        "rankMod": 5,
        "bpMod": 2,
        "autoMod": null,
        "details": ["Bullets that hit target have a 1 in 3 chance of hitting a nearby opponent as well"],
        "descriptor": ["Springy",
            "Tricky",
            "Uncontrollable"]
    },
    {
        "name": "Corp Killer Bees",
        "dieMod": 0,
        "nonLethalMod": true,
        "illegalMod": null,
        "valueMod": 100,
        "rankMod": 10,
        "bpMod": 3,
        "autoMod": true,
        "details": ["Fires proprietary genetically engineered super bees",
            "-2 DR to hit",
            "Bees swarm target and deal d6 damage per round"],
        "descriptor": ["Frenzied",
            "Hive Minded",
            "Insectoid",
            "Buzzing"]
    },
    {
        "name": "Air Cannon",
        "dieMod": 0,
        "nonLethalMod": null,
        "illegalMod": null,
        "valueMod": -100,
        "rankMod": 5,
        "bpMod": 2,
        "autoMod": false,
        "details": ["Fires 1 object per reload", "Doesn't use mags"],
        "descriptor": ["Stadium",
            "Party",
            "Promotional"]
    },
    {
        "name": "Shock Net",
        "dieMod": 0,
        "nonLethalMod": true,
        "illegalMod": null,
        "valueMod": 50,
        "rankMod": 5,
        "bpMod": 2,
        "autoMod": false,
        "details": ["Target must test Agility DR 12 or become entangled",
            "Net deals d4 damage per round"],
        "descriptor": ["Debilitating",
            "Kidnapper's"]
    },
    {
        "name": "Weaponized Ads",
        "dieMod": 0,
        "nonLethalMod": true,
        "illegalMod": null,
        "valueMod": -50,
        "rankMod": 10,
        "bpMod": 2,
        "autoMod": true,
        "details": ["Fires an ad bomb that targets enemy RCDs",
            "Target must test Toughness DR12 or have their senses overloaded for d4 rounds"],
        "descriptor": ["Annoying",
            "Offensive",
            "Sponsored"]
    },
    {
        "name": "Putty Capsules",
        "dieMod": 0,
        "nonLethalMod": true,
        "illegalMod": null,
        "valueMod": 100,
        "rankMod": 5,
        "bpMod": 3,
        "autoMod": null,
        "details": ["Target must test Agility DR 12 or become entangled",
            "Test Strength DR 12 to break free",
            "Putty is highly flammable and can conduct electricity",
            "Tastes like vanilla"],
        "descriptor": ["Goopy",
            "Delicious",
            "Sticking"]
    },
    {
        "name": "Incendiary Capsules",
        "dieMod": -2,
        "nonLethalMod": null,
        "illegalMod": true,
        "valueMod": 150,
        "rankMod": 5,
        "bpMod": 3,
        "autoMod": null,
        "details": ["Deals d6 damage per round until the target spends a round putting the flames out"],
        "descriptor": ["Fire Starting",
            "Burning",
            "Spicy",
            "Incinerating"]
    },
    {
        "name": "Sentient Slime Capsules",
        "dieMod": -2,
        "nonLethalMod": null,
        "illegalMod": false,
        "valueMod": 250,
        "rankMod": 7,
        "bpMod": 3,
        "autoMod": null,
        "details": ["Launched slimes swarm targets and corrode bodies",
            "Deals d4 damage per round"],
        "descriptor": ["Squirming",
            "Acidic",
            "Hungry"]
    },
    {
        "name": "Aggressively Invasive Bio Capsule",
        "dieMod": -1,
        "nonLethalMod": null,
        "illegalMod": null,
        "valueMod": 50,
        "rankMod": 7,
        "bpMod": 4,
        "autoMod": null,
        "details": ["Deals d6 damage per round as target is swarmed with hyper aggressive mold",
            "On death target quickly turns into rapidly expanding ecosystem",
            "Mold is edible but addictive"],
        "descriptor": ["Moldy",
            "Infecting",
            "Gross"]
    },
    {
        "name": "Hyperang",
        "dieMod": 1,
        "nonLethalMod": null,
        "illegalMod": null,
        "valueMod": 150,
        "rankMod": 7,
        "bpMod": 5,
        "autoMod": false,
        "details": ["Make two attacks on a single target as the 'hyperang' flys out and returns back"],
        "descriptor": ["Radical",
            "Gnarly",
            "Roundabout"]
    },
    {
        "name": "Circular Saws",
        "dieMod": 1,
        "nonLethalMod": null,
        "illegalMod": null,
        "valueMod": 50,
        "rankMod": 10,
        "bpMod": 4,
        "autoMod": null,
        "details": ["On 5 or more damage the saw continues flying in a straight line."],
        "descriptor": ["Bloody",
            "Horrifying",
            "Gruesome"]
    },
    {
        "name": "Dampening Foam",
        "dieMod": 0,
        "nonLethalMod": true,
        "illegalMod": null,
        "valueMod": -100,
        "rankMod": 2,
        "bpMod": 4,
        "autoMod": true,
        "details": ["Intense sound and shock absorption"],
        "descriptor": ["Quieting",
            "Slowing",
            "Spongey"]
    },
    {
        "name": "EMP Charges",
        "dieMod": 0,
        "nonLethalMod": true,
        "illegalMod": true,
        "valueMod": 250,
        "rankMod": 10,
        "bpMod": 4,
        "autoMod": null,
        "details": ["Fires sticky EMP charges that can be activated remotely"],
        "descriptor": ["EMP",
            "Neutralizing"]
    },
    {
        "name": "Glass Marble Clusters",
        "dieMod": -1,
        "nonLethalMod": false,
        "illegalMod": false,
        "valueMod": 50,
        "rankMod": 5,
        "bpMod": 5,
        "autoMod": null,
        "details": ["Fires clusters of slippery glass marbles",
            "Targets must test Agility DR 12 or fall prone"],
        "descriptor": ["Glass",
            "Slippery"]
    },
    {
        "name": "Wailing Rounds",
        "dieMod": 0,
        "nonLethalMod": null,
        "illegalMod": true,
        "valueMod": 50,
        "rankMod": 4,
        "bpMod": 3,
        "autoMod": null,
        "details": ["Bullets make an unnerving shreiking noise when shot",
            "If fired from a surprise attack, enemies immediately test morale"],
        "descriptor": ["Unnerving",
            "Startling",
            "Wailing"]
    },
    {
        "name": "Lightning Arcs",
        "dieMod": -1,
        "nonLethalMod": null,
        "illegalMod": true,
        "valueMod": 200,
        "rankMod": 10,
        "bpMod": 5,
        "autoMod": null,
        "details": ["When a target is hit, lightning arcs out and strikes d4 nearby enemies as well"],
        "descriptor": ["Electric",
            "Shocking",
            "Juiced",
            "Amped"]
    }
];
const gunMod = [
    {
        "name": "Performance Data Collection Subroutine",
        "dieMod": 0,
        "nonLethalMod": null,
        "illegalMod": null,
        "valueMod": 0,
        "rankMod": 5,
        "bpMod": 3,
        "autoMod": null,
        "details": ["Player must agree to contract to use weapon",
            "2d20 credits per kill deposited to player's account",
            "Corp retains all rights to revoke gun access"],
        "descriptor": ["Sponsored"]
    },
    {
        "name": "Gold Plated",
        "dieMod": 0,
        "nonLethalMod": null,
        "illegalMod": null,
        "valueMod": 1000,
        "rankMod": 10,
        "bpMod": 4,
        "autoMod": null,
        "details": ["-2 DR to intimidation & persuasion tests"],
        "descriptor": ["Glamorous",
            "Shining",
            "Eye Catching"]
    },
    {
        "name": "BioID® Locked",
        "dieMod": 0,
        "nonLethalMod": null,
        "illegalMod": null,
        "valueMod": 300,
        "rankMod": 10,
        "bpMod": 4,
        "autoMod": null,
        "details": ["BioID® registers to first encountered user",
            "Explodes for d6 damage if anyone but the initial user tries to fire"],
        "descriptor": ["ID Locked"]
    },
    {
        "name": "Kr4rk's Trigger Finger",
        "dieMod": 0,
        "nonLethalMod": null,
        "illegalMod": null,
        "valueMod": 150,
        "rankMod": 15,
        "bpMod": 5,
        "autoMod": null,
        "details": ["Pale green finger that hangs from a chain attached to the barrel",
            "Once per day, roll twice on a single attack & take the better result"],
        "descriptor": ["Trusty",
            "Lucky"]
    },
    {
        "name": "Booster Generator",
        "dieMod": 0,
        "nonLethalMod": null,
        "illegalMod": null,
        "valueMod": 350,
        "rankMod": 15,
        "bpMod": 5,
        "autoMod": null,
        "details": ["Automatically creates 1 random booster mod per day"],
        "descriptor": ["Boosted",
            "Hopped",
            "Jacked"]
    },
    {
        "name": "Fungal Infestation",
        "dieMod": 0,
        "nonLethalMod": null,
        "illegalMod": null,
        "valueMod": -200,
        "rankMod": 5,
        "bpMod": 3,
        "autoMod": null,
        "details": ["Constantly shedding spores",
            "1-in-4 chance of having an out-of-body experience when sleeping"],
        "descriptor": ["Black",
            "Hallucinogenic",
            "Dusty",
            "Moldy"]
    },
    {
        "name": "Double Barrel",
        "dieMod": 0,
        "nonLethalMod": null,
        "illegalMod": null,
        "valueMod": 400,
        "rankMod": 20,
        "bpMod": 6,
        "autoMod": null,
        "details": ["+2 DR to hit",
            "On hit roll double the hit die",
            "When rolling reload die at the end of combat, always roll as if you were firing auto"],
        "descriptor": ["Overtuned",
            "Chopped",
            "Double Barrel"]
    },
    {
        "name": "Heart Beat LCD",
        "dieMod": 0,
        "nonLethalMod": null,
        "illegalMod": null,
        "valueMod": 150,
        "rankMod": 5,
        "bpMod": 3,
        "autoMod": null,
        "details": ["Fold out monochrome LCD screen attached to the side of the weapon",
            "Shows heart beat signatures through concrete and wooden walls"],
        "descriptor": ["Peeping",
            "Infiltrator's",
            "Scouting"]
    },
    {
        "name": "Crank",
        "dieMod": 0,
        "nonLethalMod": null,
        "illegalMod": null,
        "valueMod": 100,
        "rankMod": 5,
        "bpMod": 5,
        "autoMod": null,
        "details": ["Awkward looking crank bolted to side of weapon",
            "Player can spend a full round cranking the gun to do double damage on the next shot"],
        "descriptor": ["Cranked",
            "Odd",
            "Modded"]
    },
    {
        "name": "Bayonette",
        "dieMod": 0,
        "nonLethalMod": null,
        "illegalMod": null,
        "valueMod": 25,
        "rankMod": 3,
        "bpMod": 2,
        "autoMod": null,
        "details": ["Carbon fiber blade attached to the front of the weapon",
            "Deals d4 damage"],
        "descriptor": ["Close Quarters",
            "Infantry"]
    },
    {
        "name": "Chainsaw Bayonette",
        "dieMod": 0,
        "nonLethalMod": null,
        "illegalMod": null,
        "valueMod": 200,
        "rankMod": 10,
        "bpMod": 5,
        "autoMod": null,
        "details": ["Deals d6+1 damage",
            "1-in-4 chance to hit yourself on a miss"],
        "descriptor": ["Overkill",
            "Viscera Covered",
            "Gas Powered"]
    },
    {
        "name": "Drum Magazine",
        "dieMod": 0,
        "nonLethalMod": null,
        "illegalMod": null,
        "valueMod": 200,
        "rankMod": 5,
        "bpMod": 3,
        "autoMod": null,
        "details": ["When rolling reload die, only reload on a 1"],
        "descriptor": ["Never Ending",
            "Deep Reserve",
            "Belt Loaded"]
    },
    {
        "name": "Tripod",
        "dieMod": 0,
        "nonLethalMod": null,
        "illegalMod": null,
        "valueMod": 200,
        "rankMod": 5,
        "bpMod": 2,
        "autoMod": null,
        "details": ["-2 DR to hit if you lay down or prop your weapon on a wall"],
        "descriptor": ["Steady",
            "Sharpshooter's"]
    },
    {
        "name": "Suppressor",
        "dieMod": 0,
        "nonLethalMod": null,
        "illegalMod": true,
        "valueMod": 250,
        "rankMod": 10,
        "bpMod": 3,
        "autoMod": null,
        "details": [],
        "descriptor": ["Quiet",
            "Spec Ops",
            "Silenced"]
    },
    {
        "name": "Laser Sight",
        "dieMod": 0,
        "nonLethalMod": null,
        "illegalMod": null,
        "valueMod": 200,
        "rankMod": 5,
        "bpMod": 2,
        "autoMod": null,
        "details": ["-2 DR to hit"],
        "descriptor": ["Standard Issue"]
    },
    {
        "name": "Reinforced Frame",
        "dieMod": 0,
        "nonLethalMod": null,
        "illegalMod": null,
        "valueMod": 400,
        "rankMod": 10,
        "bpMod": 5,
        "autoMod": null,
        "details": ["Neutralizes 1 fumble per day"],
        "descriptor": ["Tough",
            "Heavy Duty",
            "Reinforced"]
    },
    {
        "name": "Stock-Mounted Bullet Shield",
        "dieMod": 0,
        "nonLethalMod": null,
        "illegalMod": null,
        "valueMod": 300,
        "rankMod": 10,
        "bpMod": 5,
        "autoMod": null,
        "details": ["Add an additional -d2 to armor when equipped"],
        "descriptor": ["Armored",
            "Protective",
            "Tested"]
    },
    {
        "name": "Flashlight",
        "dieMod": 0,
        "nonLethalMod": null,
        "illegalMod": null,
        "valueMod": 10,
        "rankMod": 0,
        "bpMod": 1,
        "autoMod": null,
        "details": [],
        "descriptor": [""]
    },
    {
        "name": "Infrared Scope",
        "dieMod": 0,
        "nonLethalMod": null,
        "illegalMod": null,
        "valueMod": 400,
        "rankMod": 10,
        "bpMod": 5,
        "autoMod": null,
        "details": [],
        "descriptor": ["Infrared",
            "Predator"]
    },
    {
        "name": "Higher Caliber Chamber",
        "dieMod": 1,
        "nonLethalMod": null,
        "illegalMod": null,
        "valueMod": 400,
        "rankMod": 10,
        "bpMod": 5,
        "autoMod": null,
        "details": ["Increases the damage dice amount"],
        "descriptor": ["High Caliber",
            "Hole Punch"]
    },
    {
        "name": "Smart Scope",
        "dieMod": 0,
        "nonLethalMod": null,
        "illegalMod": null,
        "valueMod": 500,
        "rankMod": 10,
        "bpMod": 3,
        "autoMod": null,
        "details": ["Outlines targets through smoke & darkness",
            "Focus on an enemy for a round to get the enemy's HP"],
        "descriptor": ["Smart",
            "Calculating"]
    },
    {
        "name": "Hidden Compartment",
        "dieMod": 0,
        "nonLethalMod": null,
        "illegalMod": null,
        "valueMod": 150,
        "rankMod": 2,
        "bpMod": 1,
        "autoMod": null,
        "details": ["Hides a small object"],
        "descriptor": ["Smuggler's"]
    },
    {
        "name": "Super Charger",
        "dieMod": 0,
        "nonLethalMod": null,
        "illegalMod": true,
        "valueMod": 300,
        "rankMod": 7,
        "bpMod": 5,
        "autoMod": null,
        "details": ["Bulky mechanism bolted to the top of the weapon",
            "Shots ignore 2 points of armor while super charger is turned on",
            "Emits a high pitch whine that is immediately annoying"],
        "descriptor": ["Super Charged",
            "Bulky",
            "Experimental"]
    },
    {
        "name": "Spider Legs",
        "dieMod": 0,
        "nonLethalMod": null,
        "illegalMod": null,
        "valueMod": 400,
        "rankMod": 10,
        "bpMod": 5,
        "autoMod": null,
        "details": ["Gun will walk and fire on its own or on command",
            "Gun doesn't enjoy being held",
            "1-in-4 chance the gun doesn't follow your commands"],
        "descriptor": ["Cranky",
            "Arachnid",
            "Skittering"]
    },
    {
        "name": "Self Destruct Trap Trigger",
        "dieMod": 0,
        "nonLethalMod": null,
        "illegalMod": true,
        "valueMod": 250,
        "rankMod": 10,
        "bpMod": 6,
        "autoMod": null,
        "details": ["Can be set and remotely detonated",
            "Deals d10 damage to nearby targets"],
        "descriptor": ["Volatile",
            "Trapped",
            "Explosive"]
    }
];

const armorColor = ["Hot Pink",
    "Neon Green",
    "Pitch Black",
    "Deep Purple",
    "Blood Red",
    "Cyan",
    "Electric Yellow",
    "Light Gray",
    "Beige",
    "Forest Green",
    "Royal Blue",
    "Maroon",
    "Pastel",
    "Mustard Yellow"];
const armorDescriptor = ["Studded",
    "Graffiti Covered",
    "Sticker Covered",
    "Slimy",
    "Glow Painted",
    "Dusty",
    "Perpetually Wet",
    "See Through",
    "Plastic",
    "Tight Fitting",
    "Tailored",
    "Unusually Clean",
    "Itchy",
    "Stuffy",
    "Large",
    "Slutty",
    "Tiny"];
const baseArmor = [
    {
        "name": "Bomber Jacket", // Name of base armor
        "armorDie": 1, // Where that base armor initially falls on the die scale
        "numPockets": 4, // Amount of pockets that random items could spawn in.
        "totalValue": 20, // The base armor's initial money value.
        "totalRank": 10, // The base armor's initial rarity rank 
        "bpMod": 2, // Build Points used for determining chance of having a mod or two
        "isIllegal": false,
        "descriptor": []
    },
    {
        "name": "PPE Suit",
        "armorDie": 0,
        "numPockets": 0,
        "totalValue": 30,
        "totalRank": 15,
        "bpMod": 5,
        "isIllegal": false,
        "descriptor": ["Protection from gases and pathogens...until punctured"]
    },
    {
        "name": "Street Preacher Robes",
        "armorDie": 1,
        "numPockets": 2,
        "totalValue": 15,
        "totalRank": 15,
        "bpMod": 5,
        "isIllegal": false,
        "descriptor": ["While equipped, player gets +2 to strength",
            "On death, player erupts into a large electrical explosion"]
    },
    {
        "name": "CorpSec Body Armor",
        "armorDie": 2,
        "numPockets": 4,
        "totalValue": 30,
        "totalRank": 15,
        "bpMod": 7,
        "isIllegal": true,
        "descriptor": ["Able to fool CorpSec from afar"]
    },
    {
        "name": "Duster",
        "armorDie": 2,
        "numPockets": 2,
        "totalValue": 30,
        "totalRank": 10,
        "bpMod": 5,
        "isIllegal": false,
        "descriptor": ["Smells of ash and cheap whiskey"]
    },
    {
        "name": "Cat Burgaler's Leotard",
        "armorDie": 0,
        "numPockets": 4,
        "totalValue": 40,
        "totalRank": 15,
        "bpMod": 5,
        "isIllegal": false,
        "descriptor": ["-2 DR to stealth tests while equipped"]
    },
    {
        "name": "Motorcycle Jacket",
        "armorDie": 2,
        "numPockets": 4,
        "totalValue": 20,
        "totalRank": 10,
        "bpMod": 7,
        "isIllegal": false,
        "descriptor": []
    },
    {
        "name": "Tuxedo",
        "armorDie": 0,
        "numPockets": 2,
        "totalValue": 80,
        "totalRank": 15,
        "bpMod": 7,
        "isIllegal": false,
        "descriptor": []
    },
    {
        "name": "Tuxedo",
        "armorDie": 0,
        "numPockets": 2,
        "totalValue": 80,
        "totalRank": 15,
        "bpMod": 7,
        "isIllegal": false,
        "descriptor": []
    }
];
const pocketItem = [
    {
        name: "Credstick",
        bpMod: 2,
        rankMod: 2,
        descriptor: ["An anonymous credstick with 2d100"]
    },
    {
        name: "Pocket Full of Spiders",
        bpMod: 2,
        rankMod: 0,
        descriptor: []
    },
    {
        name: "A Blood Spattered Key Card",
        bpMod: 4,
        rankMod: 5,
        descriptor: ["Looking up the company logo lets you know it's from a defunct cybertech lab"]
    },
    {
        name: "Human Finger Wrapped In a Napkin",
        bpMod: 2,
        rankMod: 2,
        descriptor: ["1 in 6 change the finger is still warm"]
    },
    {
        name: "Broken Radio",
        bpMod: 2,
        rankMod: 2,
        descriptor: ["Heavy duty military grade design",
            "On cold and lonely nights you can hear faint crying coming from it"]
    }
]

function generateArmor() {
    let currentBP = 0;
    const BPMax = 10;

    //Generate random armor and a descriptor to add on to it
    let generatedArmor = {...baseArmor[Math.floor(Math.random() * baseArmor.length)]};

    //25% chance a descriptor won't be added.
    if (Math.floor(Math.random() * 4) !== 0){
        generatedArmor.name = `${armorDescriptor[Math.floor(Math.random() * armorDescriptor.length)]} ${generatedArmor.name}`;
    }
    
    //33% chance that a unique color will be added.
    if (Math.floor(Math.random() * 3) === 0){
        generatedArmor.name = `${armorColor[Math.floor(Math.random() * armorColor.length)]} ${generatedArmor.name}`;
    }

    //25% chance there are items generated in each of the pockets
    createItemCard({...generatedArmor, itemType: "armor"});
}

function generateGun() {
    let currentBP = 0;
    const BPMax = 10;

    // Randomly determine base gun & update values.
    let generatedGun = { ...baseGun[Math.floor(Math.random() * baseGun.length)] };
    currentBP += generatedGun.bpMod;

    let ammoType = ammoTypeStandard[0];
    // Randomly determine ammo type & update values.
    // 20% chance of exotic ammo type.
    if (Math.floor(Math.random() * 5) === 3) {
        ammoType = ammoTypeExotic[Math.floor(Math.random() * ammoTypeExotic.length)];

        generatedGun.name = `${ammoType.descriptor[Math.floor(Math.random() * ammoType.descriptor.length)]} ${generatedGun.name}`;
    }
    else {
        // 50% chance ammo type within the standard is not just regular bullets.
        if (Math.floor(Math.random() * 4) > 2) {
            ammoType = ammoTypeStandard[Math.floor((Math.random() * (ammoTypeStandard.length - 1) + 1))];

            generatedGun.name = `${ammoType.descriptor[Math.floor(Math.random() * ammoType.descriptor.length)]} ${generatedGun.name}`;
        }
    }
    if (ammoType.autoMod != null) { generatedGun.isAuto = ammoType.autoMod; }
    if (ammoType.illegalMod != null) { generatedGun.isIllegal = ammoType.illegalMod; }
    if (ammoType.nonLethalMod != null) { generatedGun.isNonLethal = ammoType.nonLethalMod; }
    currentBP += ammoType.bpMod;
    generatedGun.dmgDie += ammoType.dieMod;
    generatedGun.totalRank += ammoType.rankMod;
    generatedGun.totalValue += ammoType.valueMod;

    //Randomly determine if and which mods are generated based on current Build Points
    let weaponMods = [];
    let modIndex = 0;
    let addedMods = [];
    while ((Math.floor(Math.random() * BPMax) + 1) > currentBP) {
        let randomMod = Math.floor(Math.random() * gunMod.length);

        // Checking to make sure two of the same mods aren't added
        if (addedMods.includes(randomMod) != true) {
            weaponMods.push(gunMod[randomMod]);
            currentBP += weaponMods[modIndex].bpMod;

            if (weaponMods[modIndex].autoMod != null) { generatedGun.isAuto = weaponMods[modIndex].autoMod; }
            if (weaponMods[modIndex].illegalMod != null) { generatedGun.isAuto = weaponMods[modIndex].illegalMod; }
            if (weaponMods[modIndex].nonLethalMod != null) { generatedGun.isNonLethal = weaponMods[modIndex].nonLethalMod; }
            generatedGun.dmgDie += weaponMods[modIndex].dieMod;
            generatedGun.totalRank += weaponMods[modIndex].rankMod;
            generatedGun.totalValue += weaponMods[modIndex].valueMod;
            generatedGun.name = `${weaponMods[modIndex].descriptor[Math.floor(Math.random() * weaponMods[modIndex].descriptor.length)]} ${generatedGun.name}`;

            addedMods.push(randomMod);
            modIndex++;
        }
    }

    if (generatedGun.totalValue < 20) { generatedGun.totalValue = 20; }
    console.log(generatedGun);
    console.log(ammoType);
    console.log(weaponMods);

    createItemCard({ ...generatedGun, ammoType, weaponMods, itemType: "gun" });
}

function createItemCard(item) {
    console.log(item);

    let activeArea = document.getElementById("activeArea");

    // Create item card, border, and regenerate button
    let itemCardBorder = document.createElement("div");
    itemCardBorder.classList.add("itemCardBorder");

    let itemCard = document.createElement("div");
    itemCard.classList.add("itemCard");

    let regenerateButton = document.createElement("button");
    regenerateButton.classList.add("regenerateButton");
    regenerateButton.innerHTML = "Regenerate";
    regenerateButton.addEventListener("mousedown", generateItem);

    activeArea.appendChild(itemCardBorder);
    itemCardBorder.appendChild(itemCard);
    activeArea.appendChild(regenerateButton);

    //Create Name Row
    let itemName = document.createElement("div");
    itemName.classList.add("cardRow", "rowName");
    itemName.innerHTML = `> ${item.name}`;
    itemCard.appendChild(itemName);

    //Added illegal row if applicable
    if (item.isIllegal) {
        let illegalBG = document.createElement("div");
        illegalBG.classList.add("rowIllegalBG");

        let illegalText = document.createElement("div");
        illegalText.classList.add("rowIllegalText");
        illegalText.innerHTML = "ILLEGAL";
    }

    switch (item.itemType) {
        case "gun":
            //////////////////////////////////////////////////
            //Create ammo & damage tab row
            //////////////////////////////////////////////////
            let rowAmmoDmg = document.createElement("div");
            rowAmmoDmg.classList.add("cardRow", "rowAmmoDmg");

            let colAmmo = document.createElement("div");
            colAmmo.classList.add("ammoRow");

            let ammoTab = document.createElement("div");
            ammoTab.classList.add("featureTab");

            let ammoTabIcon = document.createElement("img");
            ammoTabIcon.src = "Assets/Icon-Bullet.svg";
            ammoTabIcon.classList.add("tabIcon");

            let ammoName = document.createElement("div");
            ammoName.classList.add("featureName");
            ammoName.innerHTML = item.ammoType.name;

            let dmgTab = document.createElement("div");
            dmgTab.classList.add("dmgTab");
            // If the weapon is nonlethal it should just read 'N/A'
            if (item.isNonLethal === false) {
                // Checking to make sure the die value for the weapon is within the die scale.
                if (item.dmgDie < 0) { weapon.dmgDie = 0; }
                if (item.dmgDie > gunDieScale.length - 1) { item.dmgDie = gunDieScale.length - 1; }
                dmgTab.innerHTML += gunDieScale[item.dmgDie];

                if (item.isAuto === true) { dmgTab.innerHTML += "a" }
            }
            else {
                dmgTab.innerHTML = "N/A"
            }

            if (item.totalRank >= 30) {
                dmgTab.classList.add("dmgTabRarityRare");
            }
            else if (item.totalRank >= 20) {
                dmgTab.classList.add("dmgTabRarityUncommon");
            }

            itemCard.appendChild(rowAmmoDmg);
            rowAmmoDmg.appendChild(colAmmo);
            colAmmo.appendChild(ammoTab);
            ammoTab.appendChild(ammoTabIcon);
            colAmmo.appendChild(ammoName);
            rowAmmoDmg.appendChild(dmgTab);

            //////////////////////////////////////////////////
            // Create ammo details
            //////////////////////////////////////////////////
            if (item.ammoType.details.length > 0) {
                let ammoDetailContainer = document.createElement("div");
                ammoDetailContainer.classList.add("cardRow");

                let ammoDetailList = document.createElement("ul");
                ammoDetailList.classList.add("featureDetails");

                itemCard.appendChild(ammoDetailContainer);
                ammoDetailContainer.appendChild(ammoDetailList);

                for (let index = 0; index <= item.ammoType.details.length - 1; index++) {
                    let ammoDetail = document.createElement("li");
                    ammoDetail.classList.add("featureDetailItem");
                    ammoDetail.innerHTML = item.ammoType.details[index];
                    ammoDetailList.appendChild(ammoDetail);
                }
            }

            //////////////////////////////////////////////////
            // Create Mod Row
            //////////////////////////////////////////////////
            if (item.weaponMods.length > 0) {
                for (let index = 0; index <= item.weaponMods.length - 1; index++) {
                    let modNameRow = document.createElement("div");
                    modNameRow.classList.add("cardRow", "featureRow");

                    let modTab = document.createElement("div");
                    modTab.classList.add("featureTab");

                    let modTabIcon = document.createElement("img");
                    modTabIcon.src = "Assets/Icon-Mod.svg";
                    modTabIcon.classList.add("tabIcon");

                    let modName = document.createElement("div");
                    modName.classList.add("featureName");
                    modName.innerHTML = item.weaponMods[index].name;

                    itemCard.appendChild(modNameRow);
                    modNameRow.appendChild(modTab);
                    modTab.appendChild(modTabIcon);
                    modNameRow.appendChild(modName);

                    if (item.weaponMods[index].details.length > 0) {
                        let modDetailsContainer = document.createElement("div");
                        modDetailsContainer.classList.add("cardRow");

                        let modDetailsList = document.createElement("ul");
                        modDetailsList.classList.add("featureDetails");

                        itemCard.appendChild(modDetailsContainer);
                        modDetailsContainer.appendChild(modDetailsList);

                        for (let liIndex = 0; liIndex <= item.weaponMods[index].details.length - 1; liIndex++) {
                            let listItem = document.createElement("li");
                            listItem.classList.add("featureDetailItem");
                            listItem.innerHTML = item.weaponMods[index].details[liIndex];
                            modDetailsList.appendChild(listItem);
                        }
                    }
                }
            }

            break;

            case "armor":
                console.log(item);
            break;
    }

    //////////////////////////////////////////////////
    // Add value tab
    //////////////////////////////////////////////////
    let valueTab = document.createElement("div");
    valueTab.classList.add("valueTab");
    valueTab.innerHTML = "¤ " + item.totalValue;
    itemCard.appendChild(valueTab);

    //////////////////////////////////////////////////
    // Adjust rarity colors
    //////////////////////////////////////////////////
    if (item.totalRank >= 30) {
        itemCardBorder.classList.add("borderRarityRare");
        itemName.classList.add("rowNameRarityRare");
    }
    else if (item.totalRank >= 20) {
        itemCardBorder.classList.add("borderRarityUncommon");
        itemName.classList.add("rowNameRarityUncommon");
    }
}

function generateItem() {
    clearActiveArea();

    generateArmor();

    //generateGun();
}

function clearActiveArea() {
    const activeArea = document.getElementById("activeArea");

    while (activeArea.firstChild) {
        activeArea.removeChild(activeArea.firstChild);
    }
}

generateItem();