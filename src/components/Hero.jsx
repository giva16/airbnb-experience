import photoGrid from '../assets/photo-grid.png';

function Hero() {
  return (
    <section className='hero'>
      <img className='hero-grid' src={photoGrid} alt="Grid of pictures showing everyone's experiences with airbnb" />
      <div className='hero-content'>
        <h1>Online Experiences</h1>
        <p>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
      </div>
    </section>
  );
}

export default Hero;
