import React from 'react';
import './styles/tailwind.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import HomePage from './components/Home';
import ContactsPage from './components/Contacts';

function App() {
  return (
    <Router>
      <div className='bg-white lg:h-screen'>
        <div className='sm:container sm:mx-auto md:p-16'>
          <div className='text-2xl float-right p-5 bg-gray-200'>{'</'}</div>
          <Navigation />
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/contacts' component={ContactsPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
