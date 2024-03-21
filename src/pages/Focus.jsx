import { useNavigate } from 'react-router-dom';

function Focus() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/gallery');
  };

  return (
    <div className="bg-gradient-to-r from-indigo-500 to-emerald-500 min-h-screen overflow-hidden flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold mb-4 text-center text-indigo-600 shadow-lg">Mind Game</h1>
      <p className="text-3xl mb-8 text-center text-indigo-600 shadow-lg">Think about your card...<br/>Focus... Let the magic happen.</p>
      <div>
        <button
          className="bg-indigo-600 hover:bg-indigo-700 text-emerald-500 font-bold py-2 px-4 rounded"
          style={{ width: '150px' }}
          onClick={handleClick}
        >
          Go
        </button>
      </div>
    </div>
  );
}

export default Focus;
