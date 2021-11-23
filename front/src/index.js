import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Rout from './routes';


ReactDOM.render(
  <BrowserRouter>
    <Rout />
  </BrowserRouter>,
  document.getElementById('root')
);
