import { Button, Form, InputGroup } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';
import getRandomString from '../../../../assets/functions/getRandomString';

const notify = (text, icon) => toast(text || 'cool.', icon || '');


export default function Stats(props) {
  const { character, setCharacter } = props;
  
  const statTestQuantity = 20;

  // #region handlers ----------------------------------
	const handleAddStat = (value) => {
		let errors = 0;

		console.log('adding stat...');

		if (value[0] === null) {
			notify('no category', { icon: '❌' });
			console.error('no category');
			errors++;
		}
		
		if (value[1] === null) {
			notify('no item', { icon: '❌' });
			console.error('no item');
			errors++;
		}
		
		if (value[2] === null) {
			notify('no value', { icon: '❌' });
			console.error('no value');
			errors++;
		}

		if (errors) return;

		setCharacter(prevState => ({
			...prevState, stats: {
				...prevState.stats, [value[0]]: {
					...prevState.stats[value[0]], [value[1]]: {
						name: value[1],
						value: value[2],
						modifier: Math.floor((value[2] - 10) / 2),
					}
				}
			}
		}))

		notify('added stat!', { icon: '✅' });
  }

	const displayStats = (category) => {
		const statItems = [];

		for (const stat in character.stats[category]) {
			statItems.push(<StatItem character={character} category={category} stat={stat} key={stat} />);
		}

		return statItems;
  }
  // #endregion handlers -------------------------------
  
  // #region components --------------------------------
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
  // #endregion components -----------------------------

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
					<h3>Tertiary Stats</h3>
					<div className="d-flex flex-wrap">
					{ displayStats('tertiary') } 
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
							for (let i = 0; i < statTestQuantity; i++) {
                console.log(i);
                handleAddStat(['primary', getRandomString(), Math.ceil(Math.random() * 20)]);
              }
							console.log(character.stats.secondary);
						}}>
						<div>add prim. stat</div>
					</Button>

					<Button variant="primary"
						className='m-1'
						onClick={() => {
              for (let i = 0; i < statTestQuantity; i++) {
                console.log(i);
                handleAddStat(['secondary', getRandomString(), Math.ceil(Math.random() * 100)]);
              }
							console.log(character.stats.secondary);
						}}>
						<div>add sec. stat</div>
					</Button>

					<Button variant="primary"
						className='m-1'
						onClick={() => {
							for (let i = 0; i < statTestQuantity; i++) {
                console.log(i);
                handleAddStat(['tertiary', getRandomString(), Math.ceil(Math.random() * 10)]);
              }
							console.log(character.stats.tertiary);
						}}>
						<div>add tert. stat</div>
					</Button>

					<Button variant="primary"
						className='m-1'
						onClick={() => console.log(character)}>
						log stats
					</Button>

					{/* <input type="text" placeholder='name' />
					<input type="number" placeholder='value' /> */}
				</div>
			</div>

		</div>
	)
}