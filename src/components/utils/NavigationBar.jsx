import { Container, Nav, NavDropdown, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link component

import '../../styles/NavigationBar.scss';
import arcanaIcon512 from '../../assets/images/android-chrome-512x512.png';
import KoFiWidget from '../KofiWidget';

/**
 * I know the nav isnt actually in the center but I will have to come back and fix that later!!!
 */

// navigation-bar w-100 sticky-top px-5

function NavigationBar(props) {
	return (
		<Navbar collapseOnSelect expand='lg' className=''>
			<Container>
				<Navbar.Brand as={Link} to="/" className='nav-brand gap-1'>
					<img alt="" src={arcanaIcon512} width="30" height="30" className="d-inline-block align-top" />{' '}
					<span className='nav-brand-text'>Arcana</span>
				</Navbar.Brand>

				<Navbar.Toggle aria-controls="navbar-nav" />
				
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className='nav-middle-nav m-auto'>
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
						{/* <Nav.Item>
							<Link to="/test" className='nav-link'>
								Test
							</Link>
						</Nav.Item> */}
						<Nav.Item>
							<Link to="/trading-post/class-sets" className='nav-link'>
								Class Sets
							</Link>
						</Nav.Item>
						<Nav.Item>
							<Link to="/trading-post/rewards-tracker" className='nav-link'>
								Tracker Diary
							</Link>
						</Nav.Item>
						{/* <Nav.Item>
							<Link to="https://ko-fi.com/greenbottle" target="_blank" className='nav-link'>
								Support Me
							</Link>
						</Nav.Item> */}
					</Nav>
				</Navbar.Collapse>
				<div className='d-flex gap-5 align-items-center'>
					<div className={`creator-tag`}><span className='-name'>Arcana</span> by Greenbottle</div>
					<KoFiWidget subtle thin/>
				</div>
			</Container>


		</Navbar>
	)
}

export default NavigationBar;