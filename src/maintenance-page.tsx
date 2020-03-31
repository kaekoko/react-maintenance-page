import * as React from 'react';

export interface MaintenancePageProps {
  color: string;
}

export interface MaintenancePageState {
  animationTime: number;
}

export class MaintenancePage extends React.Component<
  MaintenancePageProps,
  MaintenancePageState
> {
  constructor(props: MaintenancePageProps) {
    super(props);
    this.state = {
      animationTime: 0,
    };
  }

  render() {
    return (
      <div
        style={{
          height: '100%',
          width: '100%',
          position: 'fixed',
          display: 'flex',
          flexFlow: 'column nowrap',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>WE ARE COMING SOON</span>
          <div>
            <h3>The website under maintenance!</h3>
          </div>
        </div>
      </div>
    );
  }
}
