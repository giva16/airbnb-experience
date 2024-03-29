import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <main>
        <Hero />
        <div className='experience-cards'>
          <Card />
        </div>
      </main>
    </div>
  );
}

export default App;
