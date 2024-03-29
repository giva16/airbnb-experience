import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Card({ status, image, rating, numReviews, location, title, price, per }) {
  return (
    <div className='card'>
      <div className='card-status'>{status}</div>
      <img className='card-image' src={image.img} alt={image.alt} />
      <div className='card-content'>
        <div className='card-stats'>
          <p className='rating'>
            <FontAwesomeIcon icon={faStar} aria-label='star-icon' className='star-icon' />
            {rating}
          </p>
          <span className='number'>({numReviews}) • </span>
          <span className='location'>{location}</span>
        </div>
        <h2 className='card-description'>{title}</h2>
        <p className='card-pricing-info'>
          <span className='price'>From ${price}</span>/{per}
        </p>
      </div>
    </div>
  );
}

Card.defaultProps = {
  per: 'person',
};
export default Card;
