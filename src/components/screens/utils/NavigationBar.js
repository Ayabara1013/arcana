import { Nav, Navbar } from "react-bootstrap";



function NavigationBar(props) {
	return (
		<>
			<Navbar>
				<Navbar.Brand>
					Logo
				</Navbar.Brand>

				<Nav>
					<Nav.Link>home</Nav.Link>
				</Nav>
			</Navbar>
		</>
	)
}

export default NavigationBar;