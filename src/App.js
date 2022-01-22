import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import NewLogPage from './pages/NewLogPage';
import Sidenav from './components/Sidenav';
import HistoryPage from './pages/HistoryPage';
function App() {
  return (
    <div className="page">
      <Router>
      <Sidenav/>
        <Routes>
          <Route exact path='/' element={<Dashboard/>}></Route>
          <Route path='/new-log' element={<NewLogPage/>}></Route>
          <Route path='/history' element={<HistoryPage/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
