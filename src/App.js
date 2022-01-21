import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Sidenav from './components/Sidenav';
function App() {
  return (
    <div className="page">
      <Sidenav/>
      <Router>
        <Routes>
          <Route exact path='/' element={<Dashboard/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
