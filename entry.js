require('./style.css');

import { render } from 'react-dom';
import React from 'react';

import Root from './app/containers/Root';

render(
  <Root />,
  document.getElementById('root-container')
);

