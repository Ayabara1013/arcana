import { useState } from 'react';
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';

import '../../styles/Home.scss';

import hordeTradingPost1 from '../../images/horde-trading-post-1.png';

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
		<Container fluid className='home'>
			<Row>
				<Col>
					<h1 className='text-center'>Welcome to Arcana!</h1>
				</Col>
			</Row>
			<Row>
				<Col id='about'>
					{/* <div>Arcana is a personal project of mine where I keep a series of tools I have developed for tabletop gaming and video games!</div> */}
					<div className='intro-blurb text-center'>
						Welcome! I put all these tools together as personal projects, and I hope you can find them useful too!
					</div>
				</Col>
			</Row>

			<Row className='my-2'>
				<div id='tools' className='p-0'>
					{/* <h2>the tools</h2> */}

					<div className='tool-container m-auto gap-2'>
						<ToolCard
							title={toolData.tendiesCalculator.title}
							description={toolData.tendiesCalculator.description}
							route='/trading-post'
						/>
						<ToolCard
							title={toolData.tendiesCalculator.title}
							description={toolData.tendiesCalculator.description}
							route='/trading-post'
						/>
						<ToolCard
							title={toolData.tendiesCalculator.title}
							description={toolData.tendiesCalculator.description}
							route='/trading-post'
						/>
						<ToolCard
							title={toolData.tendiesCalculator.title}
							description={toolData.tendiesCalculator.description}
							route='/trading-post'
						/>
						<ToolCard
							title={toolData.tendiesCalculator.title}
							description={toolData.tendiesCalculator.description}
							route='/trading-post'
						/>

					</div>
				</div>
			</Row>

			<Row>
				<Col id='contact'>
					<h2>contact us</h2>
					<div className='fw-light text-muted'>I swear I will fill this in soon haha</div>
				</Col>
			</Row>
		</Container>
	);
}


function ToolCard(props) {
	const { title, description, route } = props;

	return (
		<div className='tool-card text-center'>
			<Link to={route} className='normal-text'>
				<h3 className='-title'>{title}</h3>
				<div className='-image-container'>
					<Image className='-image' src={hordeTradingPost1 || 'https://via.placeholder.com/150'} />
				</div>
				<div className='-description'>{description}</div>
			</Link>
		</div>
	);
}




export default Home;