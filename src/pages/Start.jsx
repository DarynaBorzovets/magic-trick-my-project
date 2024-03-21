import { useNavigate } from 'react-router-dom';

function Start() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/result');
  };

  return (
    <div className="bg-gradient-to-r from-indigo-500 to-emerald-500 min-h-screen overflow-hidden flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold mb-4 text-center text-indigo-600">Magic Happens</h1>
      <br/>
      <div>
        <button
          className="bg-indigo-600 hover:bg-indigo-700 text-emerald-500 font-bold py-2 px-4 rounded shadow-lg"
          style={{ width: '150px' }}
          onClick={handleClick}
        >
          Start
        </button>
      </div>
    </div>
  );
}

export default Start;

