import { Button, Col, Container, Row } from 'react-bootstrap';
import '../styles/CharacterSheet.scss';


// class AbilityScore {
// 	constructor(name, score) {
// 		this.name = name;
// 		this.displayName = this.name.charAt(0).toUpperCase() + this.name.slice(1);
// 		this.score = score;
// 	}
// }



// class Skill {
// 	constructor(name, abilityScore, proficiency = false, expertise = false, displayName = null) {
// 		this.name = name;
// 		this.displayName = displayName || capitalizeWords(name);
// 		this.abilityScore = abilityScore;
// 		this.proficiency = proficiency;
// 		this.expertise = expertise;
// 	}
// }

// const user = {
// 	stats: {
// 		health: 0,
// 		level: 0,
// 	},
// 	abilityScores: {
// 		strength: 			new AbilityScore("strength", 0),
// 		dexterity: 			new AbilityScore("dexterity", 0),
// 		constitution: 	new AbilityScore("constitution", 0),
// 		intelligence:		new AbilityScore("intelligence", 0),
// 		wisdom: 				new AbilityScore("wisdom", 0),
// 		charisma: 			new AbilityScore("charisma", 0),
// 	},
// 	skills: {
// 		athletics: 			new Skill("athletics", 				"strength",			false, false),
// 		acrobatics: 		new Skill("acrobatics", 			"dexterity",		false, false),
// 		sleightOfHand: 	new Skill("sleight of hand", 	"dexterity", 		false, false),
// 		stealth: 				new Skill("stealth", 					"dexterity", 		false, false),
// 		arcana: 				new Skill("arcana", 					"intelligence", false, false),
// 		history: 				new Skill("history", 					"intelligence", false, false),
// 		investigation: 	new Skill("investigation", 		"intelligence", false, false),
// 		nature: 				new Skill("nature", 					"intelligence", false, false),
// 		religion: 			new Skill("religion", 				"intelligence", false, false),
// 		animalHandling: new Skill("animal handling", 	"wisdom", 			false, false),
// 		insight: 				new Skill("insight", 					"wisdom", 			false, false),
// 		medicine: 			new Skill("medicine", 				"wisdom", 			false, false),
// 		perception: 		new Skill("perception", 			"wisdom", 			false, false),
// 		survival: 			new Skill("survival", 				"wisdom", 			false, false),
// 		deception: 			new Skill("deception", 				"charisma", 		false, false),
// 		intimidation: 	new Skill("intimidation", 		"charisma", 		false, false),
// 		performance: 		new Skill("performance", 			"charisma", 		false, false),
// 		persuasion: 		new Skill("persuasion", 			"charisma", 		false, false),
// 	},
// }

// const capitalizeWords = (string) => {
// 	return string.split(" ").map(word => {
// 		if (word.length > 2) {
// 			return word.charAt(0).toUpperCase() + word.slice(1);
// 		} else {
// 			return word;
// 		}
// 	}).join(" ");
// }

// class LevelFeatures {
// 	constructor(features) {
// 		this.features = features;
// 	}
// }

// const features = {
// 	inventor: {
// 		startingProficiencies: {},
// 		inventorsTools: {
// 			type: ['tool', 'skill bonus'],
// 			bonus: {
// 				target: 'crafting',
// 				value: 2,
// 			},
// 			checkIf: () => {
// 				console.log('print checking if bonus is valid');
// 			}
// 		},
// 		spellcasting: {},
// 		inventorsInspiration: {},
// 		inventionDice: {},
// 		inventorsSchematics: {},
// 	}
// }

// features.inventor.inventorsTools.checkIf();


// const Inventor = {
// 	levels: {
// 		maxLevels: 20,
// 		1: new LevelFeatures({
// 			// features: ['starting proficiencies', 'inventor\'s tools', 'spellcasting', 'inventor\'s inspiration', 'invention dice', 'inventor\'s schematics']
// 			features: [
// 				features.inventor.startingProficiencies,
// 				features.inventor.inventorsTools,
// 				features.inventor.spellcasting,
// 				features.inventor.inventorsInspiration,
// 				features.inventor.inventionDice,
// 				features.inventor.inventorsSchematics,
// 			]
// 		}),
// 		2: new LevelFeatures(),
// 		3: new LevelFeatures(),
// 		4: new LevelFeatures(),
// 		5: new LevelFeatures(),
// 		6: new LevelFeatures(),
// 		7: new LevelFeatures(),
// 		8: new LevelFeatures(),
// 		9: new LevelFeatures(),
// 		10: new LevelFeatures(),
// 	},
// 	hitDie: 8,
// 	startingProficiencies: {
// 		armor: ["light armor"],
// 		weapons: ["simple weapons", "hand crossbows", "heavy crossbows"],
// 		tools: ["thieves' tools", "tinker's tools"],
// 		skills: ["arcana", "investigation", "sleight of hand", "stealth"],
// 		savingThrows: ["intelligence", "constitution"],
// 	},
// 	features: {
// 		inventions: {},
// 		discoveries: {},
// 		inventionDice: {},
// 	}
// }


const template = {
	stats: {
		abilityScores: {
			strength: {
				name: 'strength',
				score: 15,
			},
			dexterity: {
				name: 'dexterity',
				score: 14,
			},
			constitution: {
				name: 'constitution',
				score: 13,
			},
			intelligence: {
				name: 'intelligence',
				score: 12,
			},
			wisdom: {
				name: 'wisdom',
				score: 10,
			},
			charisma: {
				name: 'charisma',
				score: 8,
			},
		},

		skills: {
			athletics: {
				name: 'athletics',
				abilityScore: 'strength',
				proficiency: false,
				expertise: false,
			},
			acrobatics: {
				name: 'acrobatics',
				abilityScore: 'dexterity',
				proficiency: false,
				expertise: false,
			},
			sleightOfHand: {
				name: 'sleight of hand',
				abilityScore: 'dexterity',
				proficiency: false,
				expertise: false,
			},
			stealth: {
				name: 'stealth',
				abilityScore: 'dexterity',
				proficiency: false,
				expertise: false,
			},
			arcana: {
				name: 'arcana',
				abilityScore: 'intelligence',
				proficiency: false,
				expertise: false,
			},
			history: {
				name: 'history',
				abilityScore: 'intelligence',
				proficiency: false,
				expertise: false,
			},
			investigation: {
				name: 'investigation',
				abilityScore: 'intelligence',
				proficiency: false,
				expertise: false,
			},
			nature: {
				name: 'nature',
				abilityScore: 'intelligence',
				proficiency: false,
				expertise: false,
			},
			religion: {
				name: 'religion',
				abilityScore: 'intelligence',
				proficiency: false,
				expertise: false,
			},
			animalHandling: {
				name: 'animal handling',
				abilityScore: 'wisdom',
				proficiency: false,
				expertise: false,
			},
			insight: {
				name: 'insight',
				abilityScore: 'wisdom',
				proficiency: false,
				expertise: false,
			},
			medicine: {
				name: 'medicine',
				abilityScore: 'wisdom',
				proficiency: false,
				expertise: false,
			},
			perception: {
				name: 'perception',
				abilityScore: 'wisdom',
				proficiency: false,
				expertise: false,
			},
			survival: {
				name: 'survival',
				abilityScore: 'wisdom',
				proficiency: false,
				expertise: false,
			},
			deception: {
				name: 'deception',
				abilityScore: 'charisma',
				proficiency: false,
				expertise: false,
			},
			intimidation: {
				name: 'intimidation',
				abilityScore: 'charisma',
				proficiency: false,
				expertise: false,
			},
			performance: {
				name: 'performance',
				abilityScore: 'charisma',
				proficiency: false,
				expertise: false,
			},
			persuasion: {
				name: 'persuasion',
				abilityScore: 'charisma',
				proficiency: false,
				expertise: false,
			},
		},

		proficiencyBonus: 2,
	}
};

for (const abilityScore in template.stats.abilityScores) {
	const abs = template.stats.abilityScores;

	abs[abilityScore].modifier = Math.floor((abs[abilityScore].score - 10) / 2);
}

for (const skill in template.stats.skills) {
	const skills = template.stats.skills;
	const abs = template.stats.abilityScores;

	skills[skill].modifier = abs[skills[skill].abilityScore].modifier;
}



function Stats(props) {
	const { character } = props;
	const abs = character.stats.abilityScores;
	const skills = character.stats.skills;

	return (
		<div className={`stats-page`}>

			<div className='p-1 bg-secondary text-white rounded'>
				<h3>Stats</h3>
				<div className="d-flex flex-wrap">
					<AbilityScore character={template} ability='strength' />
					<AbilityScore character={template} ability='dexterity' />
					<AbilityScore character={template} ability='constitution' />
					<AbilityScore character={template} ability='intelligence' />
					<AbilityScore character={template} ability='wisdom' />
					<AbilityScore character={template} ability='charisma' />
					<div className='ability-score m-1 p-2 bg-light text-dark rounded' onClick={() => console.log(`you pressed other`)}>
						<div>other stat</div>
						<div>10 (0)</div>
					</div>
				</div>

				<AbilityScoreInput id='strength' type='strength' />
			</div>

		</div>
	)
}

function AbilityScoreInput({ id, type }) {
  return (
      <div className="center w-full">
        <div className="form-control w-10/12">
          <label className="label">
            <span className="label-text">{ type }:</span>
          </label>
          <input type="text" placeholder="Type here" className="input input-bordered w-full" id={ id } abilityScore={ type }/>
        </div>
      </div>
  )
}

function AbilityScore(props) {
	const { character, ability} = props;
	const abs = character.stats.abilityScores;

	return (
		<div className='ability-score m-1 p-2 bg-light text-dark rounded' onClick={() => console.log(`you pressed ${ability}`)}>
			<div>{abs[ability].name}</div>
			<div>{abs[ability].score} ({abs[ability].modifier})</div>
		</div>
	)
}


const Pages = {
	Stats: Stats,
}


export default function CharacterSheet() {
	return (
		<Container className='d-flex flex-column h-100'>
			<Row className='flex-grow-1'>
				<Col>
					<Pages.Stats character={template} />
				</Col>
			</Row>

			<Row className='d-flex flex-column'>
				<Col className='bottom-bar'>
					<div className='roll-window bg-light'>Column</div>

					<Button variant="primary" onClick={() => console.log("Primary")}>
						Primary
					</Button>

					<Button variant="primary" onClick={() => console.log("Primary")}>
						Primary
					</Button>
				</Col>
			</Row>
			
		</Container>
	)
}