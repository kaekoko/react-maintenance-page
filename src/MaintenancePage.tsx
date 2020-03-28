import * as React from "react";


export interface MaintenancePageProps extends React.Props<MaintenancePage> {
  color: string;
}

export class MaintenancePage extends React.Component<MaintenancePageProps, any> {
  renders() {
    return (
      <div style={{ color: this.props.color }}>
        Hello world!
      </div>
    );
  }
}
