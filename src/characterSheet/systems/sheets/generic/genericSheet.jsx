import { Button, Col, Container, FloatingLabel, Form, FormControl, InputGroup, Row, Toast } from 'react-bootstrap';
import '../styles/CharacterSheet.scss';
import generic from './systems/generic';
import { useState } from 'react';

import toast, { Toaster } from 'react-hot-toast';


const notify = (text, icon) => toast(text || 'cool.', icon || '');


const system = generic;

const character = {
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

// for (const abilityScore in character.stats.abilityScores) {
// 	const abs = character.stats.abilityScores;

// 	abs[abilityScore].modifier = Math.floor((abs[abilityScore].score - 10) / 2);
// }

// for (const skill in character.stats.skills) {
// 	const skills = character.stats.skills;
// 	const abs = character.stats.abilityScores;

// 	skills[skill].modifier = abs[skills[skill].abilityScore].modifier;
// }

function Stats(props) {
	const { character } = props;

	const handleAddStat = (value) => {
		let errors = 0;

		console.log('adding stat...');

		if (!value[0] || value[0] === null) {
			notify('no category', { icon: '❌' });
			console.error('no category');
			errors++;
		}
		
		if (!value[1] || value[1] === null) {
			notify('no item', { icon: '❌' });
			console.error('no item');
			errors++;
		}
		
		if (!value[2] || value[2] === null) {
			notify('no value', { icon: '❌' });
			console.error('no value');
			errors++;
		}

		if (errors) return;

		system.stats[value[0]][value[1]] = value[2];
		notify('added stat!', { icon: '✅' });
	}

	const displayStats = (category) => {
		const statItems = [];

		for (const stat in character.stats[category]) {
			statItems.push(<StatItem character={character} category={category} stat={stat} key={stat} />);
		}

		return statItems;
	}

	return (
		<div className={`stats-page`}>

			<div className='p-1 bg-secondary text-white rounded'>
				<div>
					<h3>Primary Stats</h3>
					<div className="d-flex flex-wrap">
					{ displayStats('primary') } 
					</div>
				</div>

				<div>
					<h3>Secondary Stats</h3>
					<div className="d-flex flex-wrap">
					{ displayStats('secondary') } 
					</div>
				</div>

				<div>
					<h3>add primary stat</h3>

					<InputGroup className='rounded-2'>
						<Form.Control id='add-stat:category' type="text" placeholder="category" />
						<Form.Control id='add-stat:item' type="text" placeholder="stat" />
						<Form.Control id='add-stat:value' type="number" placeholder="value" />

						<Button variant="primary" onClick={() => {
							const values = [
								document.getElementById('add-stat:category').value,
								document.getElementById('add-stat:item').value,
								document.getElementById('add-stat:value').value,
							];
							
							handleAddStat(values);
						}}>
							Primary
						</Button>
					</InputGroup>

					<Button variant="primary"
						className='m-1'
						onClick={() => {
							handleAddStat(null, ['secondary', 'new stat', 0]);
							console.log(system.stats.secondary);
						}}>
						<div>add secondary 1</div>
					</Button>

					<Button variant="primary"
						className='m-1'
						onClick={() => {
							handleAddStat(null, ['tertiary', 'new stat', 0]);
							console.log(system.stats.tertiary);
						}}>
						<div>add tertiary 1</div>
					</Button>

					<Button variant="primary"
						className='m-1'
						onClick={() => console.log(system.stats)}>
						log stats
					</Button>

					{/* <input type="text" placeholder='name' />
					<input type="number" placeholder='value' /> */}
				</div>
			</div>

		</div>
	)
}

// function DnD5eAbilities(props) {
// 	const { character } = props;
	
// 	return (
// 		<>
// 			<div className="d-flex flex-wrap">
// 				<AbilityScore character={character} ability='strength' />
// 				<AbilityScore character={character} ability='dexterity' />
// 				<AbilityScore character={character} ability='constitution' />
// 				<AbilityScore character={character} ability='intelligence' />
// 				<AbilityScore character={character} ability='wisdom' />
// 				<AbilityScore character={character} ability='charisma' />
// 				<div className='ability-score m-1 p-2 bg-light text-dark rounded' onClick={() => console.log(`you pressed other`)}>
// 					<div>other stat</div>
// 					<div>10 (0)</div>
// 				</div>
// 			</div>

// 			{/* <AbilityScoreInput id='strength' type='strength' /> */}
// 		</>
// 	)
// }

// function AbilityScoreInput({ id, type }) {
//   return (
//       <div className="center w-full">
//         <div className="form-control w-10/12">
//           <label className="label">
//             <span className="label-text">{ type }:</span>
//           </label>
//           <input type="text" placeholder="Type here" className="input input-bordered w-full" id={ id } abilityScore={ type }/>
//         </div>
//       </div>
//   )
// }

// function AbilityScore(props) {
// 	const { character, ability} = props;
// 	const abs = character.stats.abilityScores;

// 	return (
// 		<div className='ability-score m-1 p-2 bg-light text-dark rounded' onClick={() => console.log(`you pressed ${ability}`)}>
// 			<div>{abs[ability].name}</div>
// 			<div>{abs[ability].score} ({abs[ability].modifier})</div>
// 		</div>
// 	)
// }

function StatItem(props) {
	const {character, category, stat, key} = props;
	const abs = character.stats[category];

	return (
		<div key={key} className='stat-item m-1 p-2 bg-light text-dark rounded'>
			<div>{abs[stat].name}</div>
			<div>{abs[stat].value} ({abs[stat].modifier})</div>
		</div>
	)
}


const Pages = {
	Stats: Stats,
}


export default function CharacterSheet() {

	const [page, setPage] = useState('stats');
	const [character, setCharacter] = useState(system.baseCharacter);

	return (
		<Container className='d-flex flex-column h-100'>
			<Row className='flex-grow-1'>
				<Col>
					<Stats character={character} />
				</Col>
			</Row>

			<Row className='box -blue p-2'>
				<Col className='d-flex justify-content-end box -red'>
					<Button variant="primary" onClick={() => notify()}>
						Primary
					</Button>
				</Col>
			</Row>

			<Toaster
				position="bottom-left"
				reverseOrder={false}
			/>

		</Container>
	)
}