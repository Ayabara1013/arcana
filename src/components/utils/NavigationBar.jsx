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
						
								<Link to="/character" className='nav-item'>
									Character
								</Link>
						
								<Link to="/games" className='nav-item'>
									Games
								</Link>
								<Link to="/settings" className='nav-item'>
									Settings
								</Link>
						
								<Link to="/about" className='nav-item'>
									About
								</Link>
						
								<Link to="/contact" className='nav-item'>
									Contact
								</Link>
							</Nav>
						</div>
					</Navbar.Collapse>

					{/* <div className='nav-right'>
						<Form className="d-flex">
							<Form.Control
								type="search"
								placeholder="Search"
								className="me-2"
								aria-label="Search"
							/>
							<Button variant="outline-success">Search</Button>
						</Form>
					</div> */}

				</Container>
			</Navbar>
		</>
	)
}



export default NavigationBar;