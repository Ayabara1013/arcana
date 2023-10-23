import { Button, Col, Container, FloatingLabel, Form, FormControl, InputGroup, Row, Toast } from 'react-bootstrap';
import '../styles/CharacterSheet.scss';
import generic from './systems/generic';
import { useState } from 'react';

import toast, { Toaster } from 'react-hot-toast';
import Stats from './sheets/generic/StatsPage';
import { SystemSelect } from './SystemSelect';


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




const Pages = {
	Stats: Stats,
	SystemSelect: SystemSelect,	
}


export default function CharacterSheet() {

	const [page, setPage] = useState(`main`);
	const [character, setCharacter] = useState(system.baseCharacter);

	const defaultProps = {
		character: character,
		setCharacter: setCharacter,
	}

	const pageProps = {
		page: page,
		setPage: setPage,
	}


	const removeAllStats = () => {
		setCharacter(prevState => ({
			...prevState, stats: {
				primary: {},
				secondary: {},
				tertiary: {},
			}
		}))
	}

	const renderPage = () => {
		if (page === 'main') {
			return <Pages.SystemSelect {...defaultProps} {...pageProps} />;
		}
		else if (page === 'dnd5e') {
			return <Pages.Dnd5e {...defaultProps} {...pageProps} />;
		}
		else if (page === 'generic') {
			return <Pages.Stats {...defaultProps} {...pageProps} />;
		}
	};

	return (
		<div className={`character-sheet d-flex flex-column`}>
			<div className={`page-window`}>
				{/* <Pages.Stats {...defaultProps} /> */}
				{/* <Pages.SystemSelect {...defaultProps} {...pageProps} /> */}
				
				{ renderPage() }
			</div>

			<div className={`toolbar d-flex flex-row-reverse gap-1 bg-dark`}>
				<button
					className='btn btn-primary'
					onClick={() => {
						notify('wiped all stats', { icon:	'❌' });
						removeAllStats();
					}}>
					<span>wipe stats</span>
				</button>

				<button className='btn btn-primary' onClick={() => notify()}>
					<span>toast</span>
				</button>

			</div>

			<Toaster
				position="bottom-left"
				reverseOrder={false}
			/>
		</div>
	)
}