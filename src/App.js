import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import User from './pages/User';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import LoggedinRedirect from './components/LoggedinRedirect';

function App() {
  return (
    <div className="page">
      <Router>        
        <AuthProvider>

        <Routes>
          <Route path='/' element={<LoggedinRedirect><Home/></LoggedinRedirect>}/>
          <Route path='/user/*' element={<PrivateRoute><User/></PrivateRoute>}/>
        </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
