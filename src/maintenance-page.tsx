import * as React from 'react';
import Constructions from './assets/constructions.svg';

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
          backgroundImage: `url(${Constructions})`,
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
          {this.props.children}
        </div>
      </div>
    );
  }
}
