import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import arcanaIcon512 from '../../assets/images/android-chrome-512x512.png';
import KoFiWidget from '../KofiWidget';
import { Link } from 'react-router-dom';

function CustomNavBar() {

  const ArcanaBrand = () => {
    return (
      <Navbar.Brand as={Link} to="/" className='nav-brand gap-1'>
        <img alt="" src={arcanaIcon512} width="30" height="30" className="d-inline-block align-top" />{' '}
        <span className='nav-brand-text'>Arcana</span>
      </Navbar.Brand>
    )
  }

  const Links = {
    ClassSets: function () {
      return (
        <Nav.Item>
          <Link to="/trading-post/class-sets" className='nav-link'>
            Class Sets
          </Link>
        </Nav.Item>
      )
    },
    RewardsTracker: function () {
      return (
        <Nav.Item>
          <Link to="/trading-post/rewards-tracker" className='nav-link'>
            Tracker Diary
          </Link>
        </Nav.Item>
      )
    }
  }

  return (
    <Navbar collapseOnSelect expand="lg" className='shadow'>
      <Container>
        <ArcanaBrand />

        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">

            <NavDropdown title="TradingPost" id="collapsible-nav-dropdown__trading-post">
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

            <Links.ClassSets />
            <Links.RewardsTracker />
          </Nav>
        </Navbar.Collapse>

        <Nav>
          <div className='d-flex gap-5 align-items-center'>
            <div className={`creator-tag d-flex flex-grow-1`}>
              <span className='-name'>Arcana</span>&nbsp;by&nbsp;Greenbottle</div>
            <KoFiWidget subtle thin/>
          </div>
        </Nav>

      </Container>
    </Navbar>
  );
}


export default CustomNavBar;