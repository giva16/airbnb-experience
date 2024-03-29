import koreanFoodImage from '../assets/korean-food.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Card() {
  return (
    <div className='card'>
      <div className='card-status'>Online</div>
      <img className='card-image' src={koreanFoodImage} alt='Korean Bibimbap dish with eggs, beansprouts and various pickled vegetables' />
      <div className='card-content'>
        <div className='card-stats'>
          <p className='rating'>
            <FontAwesomeIcon icon={faStar} aria-label='star-icon' className='star-icon' />
            4.98
          </p>
          <span className='number'>(1024) • </span>
          <span className='location'>United Kingdom</span>
        </div>
        <h2 className='card-description'>Korean Food Revolution</h2>
        <p className='card-pricing-info'>
          <span className='price'>From $22</span>
          /person
        </p>
      </div>
    </div>
  );
}

export default Card;
