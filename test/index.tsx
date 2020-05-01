import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { MaintenancePage } from '../src/maintenance-page';

import logo from './assets/test-company.png';

ReactDOM.render(
  <MaintenancePage color="red">
    <img src={logo} alt="logo" />
    <span>WE ARE COMING SOON</span>
    <div>
      <h3>The website under maintenance!</h3>
    </div>
  </MaintenancePage>,
  document.getElementById('maintenance-component')
);
