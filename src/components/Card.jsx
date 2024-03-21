import PropTypes from 'prop-types';


const Card = ({ image }) => {
    return (
      <div className="bg-tertiary rounded-2xl overflow-hidden shadow-lg p-4">
        <div className="relative w-full h-40 sm:h-52">
          <img
            src={image}
            alt="Card"
            loading="lazy"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    );
  };
  
  Card.propTypes = {
    image: PropTypes.string.isRequired,
  };

  export default Card;

