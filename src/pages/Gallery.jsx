import { useNavigate } from 'react-router-dom';
import { cardList } from '../constants/index.js';
import Card from '../components/Card.jsx'


const Gallery = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/start');
  };

  
  return (
    <div className="bg-gradient-to-r from-indigo-500 to-emerald-500 min-h-screen overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center mt-10">
          {cardList.map((card, index) => (
            <Card key={index} image={card.image} />
          ))}
        </div>
        <div className="flex justify-center mt-6">
          
            <button className="bg-indigo-600 hover:bg-indigo-700 text-emerald-500 font-bold py-2 px-4 rounded"
             style={{ width: '150px' }}
             onClick={handleClick}
            >
              Play
            </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

