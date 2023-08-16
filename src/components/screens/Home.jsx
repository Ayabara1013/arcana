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
				
				<ToolCard title='character generator' description={toolData.tendiesCalculator.description} />
				
				{/* <ToolCard title='race generator' img={hordeTradingPost1}  />
				<ToolCard /> */}
				<div className='p-2 bg-danger'>boop</div>
			</div>

			{/* <Row className='my-2 flex-grow-1 border border-danger border-2 tool-row'>
				<div id='tools' className='p-0'>
					<div className='tool-container m-auto gap-2'>
						<ToolCard
							title={toolData.tendiesCalculator.title}
							description={toolData.tendiesCalculator.description}
							img={hordeTradingPost1}
							route='/trading-post'
						/>

						<ToolCard title='character generator' />
						<ToolCard title='race generator' />
						<ToolCard />
					</div>
				</div>
			</Row> */}

			{/* <div class="box">
				<div class="row header">
					<p>header (sized to content)</p>
				</div>
				<div class="row content">
					<p>content (fills remaining space)</p>
				</div>
				<div class="row footer">
					<p>footer (fixed height)</p>
				</div>
			</div> */}

			{/* <div className='border d-flex flex-grow-1'>

			</div> */}

			<Contact />
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
			<h3 className={`-title ${fontColour} phe`}>
				{title || 'coming soon...'}
			</h3>

			<div className='-image-container phe'>
				<Image className='-image' src={img || 'https://via.placeholder.com/150'} />
			</div>

			<div className='-description phe'>
				{description || 'coming soon...'}
			</div>
		</Link>
	);
}



export default Home;