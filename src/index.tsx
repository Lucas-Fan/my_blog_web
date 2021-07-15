import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

if (module && module.hot) {
  module.hot.accept();
}

ReactDOM.render(<App name='Lucas Fan' age={24} />, document.querySelector('#root'));
