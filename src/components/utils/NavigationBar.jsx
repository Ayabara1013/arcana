import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link component

import '../../styles/NavigationBar.scss';

/**
 * I know the nav isnt actually in the center but I will have to come back and fix that later!!!
 */

function NavigationBar(props) {
	return (
		<>
			<Navbar expand='md' className='justify-content-between'>
				<Container>
					<div className='nav-left'>
						<Navbar.Brand>
							Logo
						</Navbar.Brand>
					</div>

					<Navbar.Toggle aria-controls="navbar-nav" />

					<Navbar.Collapse id='navbar-nav'>
						<div className="nav-middle">
							<Nav className=''>
								{/* Use Link component for navigation */}
								<Link to="/" className='nav-item'>
									Home
								</Link>

								<Link to="/trading-post" className='nav-item'>
									Trading Post
								</Link>
						
								<Link to="/contact" className='nav-item'>
									Contact
								</Link>
							</Nav>
						</div>
					</Navbar.Collapse>

				</Container>
			</Navbar>
		</>
	)
}



export default NavigationBar;