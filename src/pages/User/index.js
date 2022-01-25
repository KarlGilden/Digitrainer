import React from 'react';
import Sidenav from '../../components/Sidenav';
import Dashboard from '../Dashboard';
import HistoryPage from '../HistoryPage';
import NewLogPage from '../NewLogPage';
import {Routes, Route} from 'react-router-dom';
import Profile from '../Profile';


function User() {
  return (
  <>
    <Sidenav/>
    <Routes>
          <Route exact path='/' element={<Dashboard/>}></Route>
          <Route path='new-log' element={<NewLogPage/>}></Route>
          <Route path='history' element={<HistoryPage/>}></Route>
          <Route path='profile' element={<Profile/>}></Route>

    </Routes>
  </>
  );
}

export default User;
