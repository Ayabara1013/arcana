import { Button, Col, Container, FloatingLabel, Form, FormControl, InputGroup, Row, Toast } from 'react-bootstrap';
import '../styles/CharacterSheet.scss';
import generic from './systems/generic';
import { useState } from 'react';

import toast, { Toaster } from 'react-hot-toast';
import Stats from './systems/sheets/dnd 5e/StatsPage';


const notify = (text, icon) => toast(text || 'cool.', icon || '');
const system = generic;

const Pages = {
	Stats: Stats,
}



export default function CharacterSheet() {

	const [page, setPage] = useState('stats');
	const [character, setCharacter] = useState(system.baseCharacter);

	const defaultProps = {
		character: character,
		setCharacter: setCharacter,
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

	return (
		<div className={`character-sheet box -blue -w2 d-flex flex-column`}>
			<div className={`page-window box -red -w2`}>
				<Pages.Stats {...defaultProps} />
			</div>

			<div className={`toolbar d-flex flex-row-reverse gap-1 box -red`}>
				<button className='btn btn-primary'
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