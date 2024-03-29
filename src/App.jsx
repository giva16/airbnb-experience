import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import data from './data';
import 'swiper/css';

function App() {
  const cards = data.map((exp) => {
    return (
      <SwiperSlide key={1}>
        <Card
          status={exp.status}
          image={{ img: exp.image.img, alt: exp.image.alt }}
          rating={exp.rating}
          numReviews={exp.numReviews}
          location={exp.location}
          title={exp.title}
          price={exp.price}
        />
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
