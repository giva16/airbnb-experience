import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import data from './data';
import 'swiper/css';

function App() {
  let i = 0;
  const cards = data.map((item) => {
    return (
      <SwiperSlide key={i++}>
        <Card {...item} />
      </SwiperSlide>
    );
  });
  return (
    <div className='container'>
      <Navbar />
      <main>
        <Hero />
        <div className='experience-cards'>
          <Swiper
            breakpoints={{
              300: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
              1500: {
                slidesPerView: 6,
              },
            }}
            spaceBetween={20}
            loop={true}
            freeMode={true}
          >
            {cards}
          </Swiper>
        </div>
      </main>
    </div>
  );
}

export default App;
