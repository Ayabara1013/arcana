import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link component

import '../../styles/NavigationBar.scss';
import arcanaIcon512 from '../../assets/images/android-chrome-512x512.png';
import KoFiWidget from '../KofiWidget';

/**
 * I know the nav isnt actually in the center but I will have to come back and fix that later!!!
 */

function NavigationBar(props) {
	return (
		// <div className='navbar-container mb-2'>
			

		// 	<hr className='nav-divider'/>
		// </div>

		<Navbar expand='md' className='navigation-bar w-100 sticky-top'>
			<Container>
				<Navbar.Brand as={Link} to="/" className='nav-brand gap-1'>
					<img alt="" src={arcanaIcon512} width="30" height="30" className="d-inline-block align-top" />{' '}
					<span className='nav-brand-text'>Arcana</span>
				</Navbar.Brand>

				<Navbar.Toggle aria-controls="navbar-nav" />

				<Navbar.Collapse id='navbar-nav' className='nav-middle' >
					<Nav className='nav-middle-nav'>
						<Link to="/trading-post" className='nav-item'>Trading Post</Link>
						{/* <Link to="/test-page" className='nav-item'>test page</Link> */}
						<Link to="/character-generator" className='nav-item'>Character Generator</Link>
						<Link to="https://ko-fi.com/greenbottle" target="_blank" className='nav-item'>Support</Link>
					</Nav>
				</Navbar.Collapse>

				<div>
					<div className='creator-tag'><span className='-name'>Arcana</span> by Greenbottle</div>
				</div>

			</Container>
		</Navbar>
	)
}



export default NavigationBar;