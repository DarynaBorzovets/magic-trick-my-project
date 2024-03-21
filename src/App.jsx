import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import Focus from './pages/Focus';
import Gallery from './pages/Gallery';
import Result from './pages/Result';
import Start from './pages/Start'; 

function App() {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Focus />}/>
        <Route path="/focus" element={<Focus/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/start" element={<Start />}/>
        <Route path="/result" element={<Result />}/>
      </Routes>
    </BrowserRouter></>
  );
}

export default App;
