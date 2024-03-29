import airbnbLogo from '../assets/Airbnb-logosvg.png';

function Navbar() {
  return (
    <nav className='nav'>
      <img className='nav-logo' src={airbnbLogo} alt='Airbnb logo' />
    </nav>
  );
}

export default Navbar;