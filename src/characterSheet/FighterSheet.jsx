import { useState } from 'react';
import fighter from './character classes/fighter';
import monk from './character classes/monk';
import { useEffect } from 'react';

const characterState = {
	name: "character",
	health: 0,
	hitDie: {
		4: 0,
		6: 0,
		8: 0,
		10: 0,
		12: 0,
	},
	level: 6,
	classLevels: {
		1: fighter,
		2: fighter,
		3: monk,
		4: monk,
		5: monk,
		6: monk,
		// 3: fighter,
		// 4: fighter,
		// 5: fighter,
		// 6: fighter,
		// 7: fighter,
		// 8: fighter,
		// 9: fighter,
		// 10: fighter,
	},
	prof: 0,
	stats: {
		strength: 10,
		dexterity: 10,
		constitution: 10,
		intelligence: 10,
		wisdom: 10,
		charisma: 10
	},
	skills: {

	},

	features: {
		emptyFeature: {
			name: 'empty feature',
			description: 'this is an empty feature',
			use: (character) => {
				console.log('empty feature');
			}
		}
	},

	actions: {
		emptyAction: {
			name: 'empty action',
			description: 'this is an empty action',
			charges: {current: 0, max: 0},
			use() {
				console.log(`you have [cast] : ${this.name}`);
			},
		}
	}
}


function assignClassLevelsToCharacter(character, classLevels) {
	for (let pClass in classLevels) {
		character.classLevels[pClass] = classLevels[pClass];
	}
}

export default function FighterSheet(props) {

const [character, setCharacter] = useState(characterState);
	// const { character } = props;

	function assignClassFeaturesToCharacter() {
		let classLevels = {};
		let classFeatures = {};

		for (let level = 1; level <= character.level; level++) {
			console.log('-----------------------------------------');

			const pclass = character.classLevels[level];
			// const clevel = pclass.levels[classLevels[pclass.name]];
			// const features = clevel.features;
			
			if (classLevels[pclass.name]) {
				classLevels[pclass.name]++;
			}
			else {
				classLevels[pclass.name] = 1;
			}

			const clevel = pclass.levels[classLevels[pclass.name]];

			console.log(classLevels);

			
			console.log(`checking level ${level}, new level is ${pclass.name} (${classLevels[pclass.name]})`);

			// are we looking at the right class?
			console.log(pclass.name);

			// are we looking at the right level?
			console.log(classLevels[pclass.name]);

			// what are the features for that level?
			if (clevel.features) {
				for (let feature of clevel.features) {
					console.log(feature.name);
				}
			}
			else console.log(`no features`);
		}
	}

	useEffect(() => {
		assignClassFeaturesToCharacter();
	}, []);

	const features = {
		set: (pclass, item) => {
			if (character.features[item]) {
				console.log(`${item} already exists`);
				return;
			}

			setCharacter(prevState => ({
				...prevState,
				features: {
					...prevState.features,
					[item]: pclass.features[item]
				}
			}))
		},

		remove: (pclass, item) => {
			if (!character.features[item]) {
				console.log(`${item} is already gone`);
				return;
			}

			setCharacter(prevState => {
				const features = prevState.features;
				delete features[item];

				return {
					...prevState,
					features
				}
			})
		},

		display: (character) => {
			let featuresArray = Object.keys(character.features).map((featureKey) => {
				const item = character.features[featureKey];
				if (!item) return null;
	
				return <ClassFeatureItem featureKey={featureKey} feature={item} features={features} />
			});
		
			featuresArray = featuresArray.filter((feature) => feature !== null);
		
			return featuresArray;
		}
	}

	return (
		<div className='container d-flex flex-column gap-2 w-100 h-100 box -rose -w2'>

			{/* ROW */}
			<div className='row d-flex flex-grow-1 m-0 gap-2 box -dotted -red'>
				<div className='col box -teal'>
					<div className="fw-bold fs-2">Character Sheet</div>
					<ClassFeatureList character={character} features={features} />
					<ActionBar character={character} />
				</div>
				
				<div className='col d-flex flex-column box -teal'>
					<div className="fs-2 fw-bold">Class Levels</div>
					{/* {displayClassLevels(character)} */}
				</div>
			</div>
			
			{/* ROW */}
			<div className='row m-auto w-100 box -dotted -red'>
				<div className="col">
					<button
						className='btn btn-primary'
						onClick={() => {
							features.set(fighter, `actionSurge`);
							console.log(character.features)
						}}>
						set action surge
					</button>

					<button className='btn btn-primary'
						onClick={() => console.log(fighter)}>
						print fighter
					</button>

					<button className='btn btn-primary'
						onClick={() => console.log(monk)}>
						print monk
					</button>

					<button className='btn btn-primary'
						onClick={() => {
							console.log(character)
						}}>
						check character
					</button>

					<button className='btn btn-primary' onClick={() => assignClassFeaturesToCharacter()}>test class features/levels</button>
				</div>
			</div>

			{/* ROW */}
			<div className='row d-flex flex-grow-0 m-0 box -dotted -red'>
				rolls
			</div>
		</div>
	)
}




function ClassFeatureList(props) {
	const { character, features } = props;

	return (
		<div>
			{features.display(character)}
		</div>
	)
}

/**
 * 
 * @param {*} props featureKey, feature[name], features({set, remove, display}) 
 * @returns 
 */
function ClassFeatureItem(props) {
	const { featureKey, feature, features } = props;
	return (
		<div className='d-flex justify-content-between mb-2 box' key={featureKey}>
			<div className="my-auto">{feature.name}</div>
			<button
				className='btn btn-primary'
				onClick={() => {
					// console.log(character.features);
					// console.log(feature);
					features.remove(null, featureKey);
				}}>
				x
			</button>
		</div>
	)
}



function ActionBar(props) {
	const { character } = props;

	let actionsArray = [];

	if (!character.actions) {
		console.log(`no actions`);
	}
	else {
		actionsArray.push(Object.keys(character.actions).map((actionKey) => { 
			const action = character.actions[actionKey];
			return (
				<div className='d-flex flex-column mb-2 p-2 bg-light rounded'>
					<div>{action.name}</div>
					<div>{action.description}</div>
					<button onClick={() => action.use()}>cast</button>
				</div>
			)
		}))
	}

	return (
		<div className='box'>
			<div>actions</div>
			{actionsArray}
		</div>
	)
}