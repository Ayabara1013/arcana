import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import arcanaIcon512 from '../../assets/images/android-chrome-512x512.png';
import KoFiWidget from '../KofiWidget';
import { Link } from 'react-router-dom';
import './CustomNavBar.scss';

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
    },
    Contact: function () {
      return (
        <Nav.Item>
          <Link to="/contact" className='nav-link'>
            Contact Us
          </Link>
        </Nav.Item>
      )
    },
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
            <Links.Contact />
          </Nav>
        </Navbar.Collapse>

        <Nav className='d-flex gap-2 align-items-center'>
          <div className={`creator-tag d-flex flex-grow-1`}>
            <span className='-name'>Arcana</span>&nbsp;by&nbsp;Greenbottle
          </div>
          <KoFiWidget subtle />
          <DiscordButton />          
        </Nav>

      </Container>
    </Navbar>
  );
}


function DiscordButton() {
  return (
    <div id="discord-button" className='d-flex align-items-center'>
      <a href="https://discord.gg/kXxdX9QcxW" target="_blank">
        <div class="icon d-flex justify-content-center align-items-center me-1">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"/></svg>
          {/* <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 245 240">
            <path class="st0" d="M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zM140.9 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z" />
            <path class="st0" d="M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z" />
          </svg> */}
        </div>
        <span>Discord</span>
      </a>
    </div>
  )
}


export default CustomNavBar;