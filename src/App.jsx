import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import koreanFood from './assets/korean-food.webp';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <main>
        <Hero />
        <div className='experience-cards'>
          <Swiper spaceBetween={0} slidesPerView={3} onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)}>
            <SwiperSlide>
              <Card
                status='Online'
                image={{ img: koreanFood, alt: 'Korean Bibimbap dish with eggs, beansprouts and various pickled vegetables' }}
                rating={4.98}
                numReviews={1024}
                location='United Kingdom'
                title='Korean Food Revolution'
                price={22}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                status='Sold Out'
                image={{
                  img: 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1762373-media_library/original/cee26245-7b4a-41f6-9615-57558f1887cd.jpeg?im_w=320',
                  alt: "Blue Crane, South Africa's national bird",
                }}
                rating={4.93}
                numReviews={786}
                location='South Africa'
                title='Live Virtual Wildlife Safari in South Africa'
                price={208}
                per='group'
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                status='Online'
                image={{
                  img: 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1716598-media_library/original/86d22579-14c7-42b9-ac0b-f39b4d785b8d.jpeg?im_w=320',
                  alt: 'Lebanese Humus Dish',
                }}
                rating={5.0}
                numReviews={275}
                location='Canada'
                title='Making Hummus with a Lebanese Chef'
                price={127}
                per='group'
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                status='Online'
                image={{
                  img: 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-5122832-media_library/original/c389daab-d4d7-43ef-bad3-9cdd3a6ce4ac.jpg?im_w=1440',
                  alt: 'Japanese Geisha',
                }}
                rating={5.0}
                numReviews={3}
                location='Japan'
                title='Make original itinerary in Kyoto with Akari'
                price={42}
                per='group'
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                status='Online'
                image={{
                  img: 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-5121505-media_library/original/62ad1850-896e-4f77-b276-0c19293c55bb.jpeg?im_w=320',
                  alt: 'A street in Tokyo at night',
                }}
                rating={5.0}
                numReviews={59}
                location='Japan'
                title='Plan the perfect Customised Japan Trip with Local Expert'
                price={42}
                per='group'
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </main>
    </div>
  );
}

export default App;
