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
          backgroundColor: '#000',
          height: '100%',
          width: '100%',
          position: 'fixed',
          color: '#fff',
        }}
      >
        Hello world!
      </div>
    );
  }
}
