

const dnd5e = {
  abilityScores: {
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
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
    
    passive: {
      perception: 10,
      insight: 10,
      investigation: 10,
    },
    
    other: {},
  },

  classes: {
    fighter: dnd5eClasses.fighter,
    rogue: dnd5eClasses.rogue,
    wizard: dnd5eClasses.wizard,
  },

  savingThrows: {
    stregth: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0,
  },

  otherProficiencies: {},

  languages: {},

  armourClass: 10,
  initiative: 0,
  speed: 30,

  hitPoints: {
    current: 0,
    max: 0,
    temp: 0,
  },

  deathSaves: {
    successes: 0,
    failures: 0,

    resetDeathSaves: function() {
      this.successes = 0;
      this.failures = 0;
    },
  },

  attacks: {},

  equipment: {},

  features: {},

  actions: {},

  baseCharacter: {

  },

  experienceMethods: ['experiencePoints', 'milestone'],

}


const dnd5eBio = {

  // id like to think of a better name for this category
  personality: {
    personalityTraits: [],
    ideals: [],
    bonds: [],
    flaws: [],
  },


}





const dnd5eClasses = {
  fighter: fighter,
  rogue: rogue,
}

const fighter = {
  hitDie: 10,
  primaryAbility: "strength",
  savingThrows: ["strength", "constitution"],
  proficiencies: {
    armor: ["light", "medium", "heavy", "shields"],
    weapons: ["simple", "martial"],
    tools: [],
    skills: ["acrobatics", "animal handling", "athletics", "history", "insight", "intimidation", "perception", "survival"],
  },
}

const rogue = {
  hitDie: 8,
  primaryAbility: "dexterity",
  savingThrows: ["dexterity", "intelligence"],
  proficiencies: {
    armor: ["light"],
    weapons: ["simple", "hand crossbows", "longswords", "rapiers", "shortswords"],
    tools: ["thieves' tools"],
    skills: ["acrobatics", "athletics", "deception", "insight", "intimidation", "investigation", "perception", "performance", "persuasion", "sleight of hand", "stealth"],
  },
}