import { useState } from 'react';
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';

import '../../styles/Home.scss';

import hordeTradingPost1 from '../../assets/images/horde-trading-post-1.png';
import Contact from '../Contact';

const toolData = {
	tendiesCalculator: {
		title: 'Tendies Calculator',
		description: 'Calculate the tendies you need to get all of the awesome class sets you want!',
	},
	tpTracker: {
		title: 'Trading Post Tracker',
		description: 'Track all past and current trading post rewards that you want or have already collected!'
	},
  diceRoller: {
    title: 'Dice Roller',
    description: 'A dice roller for tabletop gaming.',
  },
  characterSheet: {
    title: 'Character Sheet',
    description: 'A character sheet for tabletop gaming.',
  },
  initiativeTracker: {
    title: 'Initiative Tracker',
    description: 'An initiative tracker for tabletop gaming.',
  },
  lootGenerator: {
    title: 'Loot Generator',
    description: 'A loot generator for tabletop gaming.',
  },
  lootTracker: {
    title: 'Loot Tracker',
    description: 'A loot tracker for tabletop gaming.',
  },
  encounterGenerator: {
    title: 'Encounter Generator',
    description: 'An encounter generator for tabletop gaming.',
  },
  encounterTracker: {
    title: 'Encounter Tracker',
    description: 'An encounter tracker for tabletop gaming.',
  },
  campaignManager: {
    title: 'Campaign Manager',
    description: 'A campaign manager for tabletop gaming.',
  },
  campaignTracker: {
    title: 'Campaign Tracker',
    description: 'A campaign tracker for tabletop gaming.',
  },
  characterCreator: {
    title: 'Character Creator',
    description: 'A character creator for tabletop gaming.',
  },
};

const toolList = () => {
	const list = [];
	for (const tool in toolData) {
		list.push(
			<ToolCard
				title={toolData[tool].title}
				description={toolData[tool].description}
			/>
		);
	}
	return list;
}



function Home(props) {
	return (
		<Container fluid className='home d-flex flex-column px-0 h-100'>

			<h1 className='arcana-header text-center'>Welcome to Arcana!</h1>
			
			<div className='intro-blurb text-center'>
				Welcome! I put all these tools together as personal projects, and I hope you can find them useful too!
			</div>

			<div className='tool-container'>
				<ToolCard
					title={toolData.tendiesCalculator.title}
					description={toolData.tendiesCalculator.description}
					img={hordeTradingPost1}
					route='/trading-post'
				/>

				<ToolCard
					title={toolData.tpTracker.title}
					description={toolData.tpTracker.description}
					img={hordeTradingPost1}
					route='/trading-post/rewards-tracker'
				/>

				<ToolCard title='character generator' />
				{/* <ToolCard title='scifi/fantasy race generator' />
				<ToolCard title='spellcasting theme creator' /> */}
			</div>

			{/* <Contact /> */}
		</Container>
	);
}

function ToolCard(props) {
	const { title, description, route, img } = props;

	const fontColour = img ? '' : 'text-secondary';
// className='normal-text'
	return (
		// <div className='tool-card'>
			
		// </div>

		<Link to={route || '/'} className='tool-card'>
			<h3 className={`-title ${fontColour} px-2`}>
				{title || 'coming soon...'}
			</h3>

			<div className='-image-container'>
				<Image className='-image' src={img || 'https://via.placeholder.com/150'} />
			</div>

			<div className='pb-2'></div>
			<div className='-description px-2'>
				{description || 'coming soon...'}
			</div>
			<div className='pb-2'></div>
		</Link>
	);
}



export default Home;