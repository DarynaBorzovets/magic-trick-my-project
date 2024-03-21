import { cardResult } from '../constants/index.js';
import Card from '../components/Card.jsx'


const Result = () => {

  return (
    <div className="bg-gradient-to-r from-indigo-500 to-emerald-500 min-h-screen overflow-hidden">
      <div className="container mx-auto">
        <h1 className="text-6xl font-bold mb-4 text-center text-indigo-600  mt-20">Magic is everywhere</h1>
        <p className="text-3xl mb-8 text-center text-indigo-600">I removed your Card</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center mt-10">
          {cardResult.map((card, index) => (
            <Card key={index} image={card.image} />
          ))}
        </div>
        <div className="flex justify-center mt-6">
          
           
        </div>
      </div>
    </div>
  );
};

export default Result;
