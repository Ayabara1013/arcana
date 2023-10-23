class AbilityScore {
	constructor(name, score) {
		this.name = name;
		this.displayName = this.name.charAt(0).toUpperCase() + this.name.slice(1);
		this.score = score;
	}
}

class Skill {
	constructor(name, abilityScore, proficiency = false, expertise = false, displayName = null) {
		this.name = name;
		this.displayName = displayName || capitalizeWords(name);
		this.abilityScore = abilityScore;
		this.proficiency = proficiency;
		this.expertise = expertise;
	}
}

const user = {
	stats: {
		health: 0,
		level: 0,
	},
	abilityScores: {
		strength: 			new AbilityScore("strength", 0),
		dexterity: 			new AbilityScore("dexterity", 0),
		constitution: 	new AbilityScore("constitution", 0),
		intelligence:		new AbilityScore("intelligence", 0),
		wisdom: 				new AbilityScore("wisdom", 0),
		charisma: 			new AbilityScore("charisma", 0),
	},
	skills: {
		athletics: 			new Skill("athletics", 				"strength",			false, false),
		acrobatics: 		new Skill("acrobatics", 			"dexterity",		false, false),
		sleightOfHand: 	new Skill("sleight of hand", 	"dexterity", 		false, false),
		stealth: 				new Skill("stealth", 					"dexterity", 		false, false),
		arcana: 				new Skill("arcana", 					"intelligence", false, false),
		history: 				new Skill("history", 					"intelligence", false, false),
		investigation: 	new Skill("investigation", 		"intelligence", false, false),
		nature: 				new Skill("nature", 					"intelligence", false, false),
		religion: 			new Skill("religion", 				"intelligence", false, false),
		animalHandling: new Skill("animal handling", 	"wisdom", 			false, false),
		insight: 				new Skill("insight", 					"wisdom", 			false, false),
		medicine: 			new Skill("medicine", 				"wisdom", 			false, false),
		perception: 		new Skill("perception", 			"wisdom", 			false, false),
		survival: 			new Skill("survival", 				"wisdom", 			false, false),
		deception: 			new Skill("deception", 				"charisma", 		false, false),
		intimidation: 	new Skill("intimidation", 		"charisma", 		false, false),
		performance: 		new Skill("performance", 			"charisma", 		false, false),
		persuasion: 		new Skill("persuasion", 			"charisma", 		false, false),
	},
}

const capitalizeWords = (string) => {
	return string.split(" ").map(word => {
		if (word.length > 2) {
			return word.charAt(0).toUpperCase() + word.slice(1);
		} else {
			return word;
		}
	}).join(" ");
}

class LevelFeatures {
	constructor(features) {
		this.features = features;
	}
}

const features = {
	inventor: {
		startingProficiencies: {},
		inventorsTools: {
			type: ['tool', 'skill bonus'],
			bonus: {
				target: 'crafting',
				value: 2,
			},
			checkIf: () => {
				console.log('print checking if bonus is valid');
			}
		},
		spellcasting: {},
		inventorsInspiration: {},
		inventionDice: {},
		inventorsSchematics: {},
	}
}

features.inventor.inventorsTools.checkIf();


const Inventor = {
	levels: {
		maxLevels: 20,
		1: new LevelFeatures({
			// features: ['starting proficiencies', 'inventor\'s tools', 'spellcasting', 'inventor\'s inspiration', 'invention dice', 'inventor\'s schematics']
			features: [
				features.inventor.startingProficiencies,
				features.inventor.inventorsTools,
				features.inventor.spellcasting,
				features.inventor.inventorsInspiration,
				features.inventor.inventionDice,
				features.inventor.inventorsSchematics,
			]
		}),
		2: new LevelFeatures(),
		3: new LevelFeatures(),
		4: new LevelFeatures(),
		5: new LevelFeatures(),
		6: new LevelFeatures(),
		7: new LevelFeatures(),
		8: new LevelFeatures(),
		9: new LevelFeatures(),
		10: new LevelFeatures(),
	},
	hitDie: 8,
	startingProficiencies: {
		armor: ["light armor"],
		weapons: ["simple weapons", "hand crossbows", "heavy crossbows"],
		tools: ["thieves' tools", "tinker's tools"],
		skills: ["arcana", "investigation", "sleight of hand", "stealth"],
		savingThrows: ["intelligence", "constitution"],
	},
	features: {
		inventions: {},
		discoveries: {},
		inventionDice: {},
	}
}




function CharacterSheet() {


	return (
		<div>

		</div>
	)
}