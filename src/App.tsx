import React from 'react';
import Header from 'Components/Header';
import { HashRouter, Redirect, Route } from 'react-router-dom';

import Layout from 'Components/Layout';
import About from './views/about';
import Home from './views/home';
import Blog from './views/blog';
import Friend from './views/friend';
import './App.scss';
import './styles/common.scss';

function App() {
  return (
    <div className='app'>
      <HashRouter>
        <Header />
        <Layout>
          <Route path='/home' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/blog' component={Blog} />
          <Route path='/friend' component={Friend} />
          <Redirect to='/home' from='/' />
        </Layout>
      </HashRouter>
    </div>
  );
}

export default App;
