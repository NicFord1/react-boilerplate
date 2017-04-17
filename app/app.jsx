import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

//Load Foundation
$(document).foundation();

//App CSS
require('app/styles/app.scss');

//Main App Code
ReactDOM.render(
  <p>Boilerplate 4 Project</p>,
  document.getElementById('app')
);
