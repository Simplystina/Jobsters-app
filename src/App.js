import React from 'react';
import {Link, Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import { LandingPage, Register, Dashboard} from './Pages/index'
import './index.css'
function App() {
  return (
    <> 
    <Router>
      <Routes>
        <Route exact={true} path='/' element={<LandingPage/>}></Route>
        <Route exact={true} path='/login' element={<Register/>}></Route>
        <Route exact={true} path='/dashboard' element={<Dashboard/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
