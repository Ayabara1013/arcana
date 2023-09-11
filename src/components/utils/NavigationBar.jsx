import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
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
						{/* <Nav.Item>
							<Link to="/trading-post-class-sets" className='nav-link'>
								Trading Post
							</Link>
						</Nav.Item>

						<Nav.Item>
							<Link to="/trading-post-tracker" className='nav-link'>
								Tracker
							</Link>
						</Nav.Item>

						<Nav.Item>
							<Link>
								thing
							</Link>
						</Nav.Item> */}


						<NavDropdown title="Trading Post" id="nav-dropdown__trading-post" className='nav-dropdown'>
							<NavDropdown.Item eventKey="4.1">
								<Link to="/trading-post/class-sets" className='dropdown-item__text'>
									Class Sets
								</Link>
							</NavDropdown.Item>

							<NavDropdown.Item eventKey="4.2">
								<Link to="/trading-post/rewards-tracker" className='dropdown-item__text'>
									Tracker
								</Link>
							</NavDropdown.Item>
						</NavDropdown>

						{/* <Link to="/test-page" className='nav-item'>test page</Link> */}
						{/* <Link to="/character-generator" className='nav-item'>Character Generator</Link> */}

						{/* <Nav.Item>
							<Link to="/test" className='nav-link'>
								Test
							</Link>
						</Nav.Item> */}

						<Nav.Item>
							<Link to="https://ko-fi.com/greenbottle" target="_blank" className='nav-link'>
								Support Me
							</Link>
						</Nav.Item>
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