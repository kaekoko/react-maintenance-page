import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { MaintenancePage } from '../src/maintenance-page';

ReactDOM.render(
  <MaintenancePage color="red">
    <span>WE ARE COMING SOON</span>
    <div>
      <h3>The website under maintenance!</h3>
    </div>
  </MaintenancePage>,
  document.getElementById('maintenance-component')
);
