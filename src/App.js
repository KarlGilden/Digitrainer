import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import User from './pages/User';

function App({location}) {
  return (
    <div className="page">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/user/*' element={<User/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
