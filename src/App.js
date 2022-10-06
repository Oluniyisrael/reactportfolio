import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './assets/pages/portfolioPage/Portfolio';
import About from './assets/pages/portfolioAboutPage/About'
import Resume from './assets/pages/portfolioResume/Resume'
import Works from './assets/pages/portfolioWorks/Works'
import ContactUs from './assets/pages/portfolioContact/ContactUs'

function App() {
  return (
    <div>
     <Router>
        <Routes>
          <Route path='/' element={<Portfolio/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Resume' element={<Resume/>}/>
          <Route path='/works' element={<Works/>}/>
          <Route path='/Hello' element={<ContactUs/>}/>
        </Routes>
     </Router>
    </div>
  );
}

export default App;
