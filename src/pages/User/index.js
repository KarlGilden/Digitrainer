import React from 'react';
import Sidenav from '../../components/Sidenav';
import Dashboard from '../Dashboard';
import HistoryPage from '../HistoryPage';
import NewLogPage from '../NewLogPage';
import {Routes, Route} from 'react-router-dom';
import Profile from '../Profile';
import LogView from '../LogView';
import EditLogPage from '../EditLogPage';


function User() {
  return (
  <>
    <Sidenav/>
    <Routes>
          <Route exact path='/' element={<Dashboard/>}></Route>
          <Route path='new-log' element={<NewLogPage/>}></Route>
          <Route path='edit/:id' element={<EditLogPage/>}></Route>
          <Route path='history' element={<HistoryPage/>}></Route>
          <Route path='profile' element={<Profile/>}></Route>
          <Route path='log/:id' element={<LogView/>}></Route>


    </Routes>
  </>
  );
}

export default User;
