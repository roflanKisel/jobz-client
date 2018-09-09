import React from 'react';
import Navbar from '../navbar/navbar';
import Login from '../../modules/login/components/login/login';
import Registration from '../../modules/registration/components/registration/registration';

const App = () => (
  <div className="app">
    <Navbar />
    <Login />
  </div>
);

export default App;
