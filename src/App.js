import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './assets/pages/portfolioPage/Portfolio';

function App() {
  return (
    <div>
     <Router>
        <Routes>
          <Route path='/' element={<Portfolio/>}/>
          <Route path='/About' element={<Portfolio/>}/>
          <Route path='/Resume' element={<Portfolio/>}/>
          <Route path='/works' element={<Portfolio/>}/>
          <Route path='/Hello' element={<Portfolio/>}/>
        </Routes>
     </Router>
    </div>
  );
}

export default App;
