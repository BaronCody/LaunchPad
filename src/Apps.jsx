import React from "react";
import "./App.css";
import { LaunchPad } from "./components/LaunchPads.js";
import { FieldLauncher } from "./components/FieldLauncher.js";
import { Filter } from "./Filter.jsx";
class Apps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLaunchPadOpen: true,
      isFieldLauncherOpen: false,
    };
  }

  showLaunchPad() {
    this.setState({ isLaunchPadOpen: true, isFieldLauncherOpen: false });
  }

  showFieldLauncher() {
    this.setState({ isFieldLauncherOpen: true, isLaunchPadOpen: false });
  }

  render() {
      
    return (
      <div className="root-container">
        <div className="box-controller">
          <div
            className={
              "controller" +
              (this.state.isLaunchPadOpen ? "selected-controller" : "")
            }
            onClick={this.showLaunchPad.bind(this)}
          >
            LaunchPads
          </div>
          <div
            className={
              "controller" +
              (this.state.isFieldLauncherOpen ? "selected-controller" : "")
            }
            onClick={this.showFieldLauncher.bind(this)}
          >
            STARLINK Satellites
          </div>
        </div>

<container><div className="filter">
<Filter />
</div>
</container>

        <div className="box-container">
          {this.state.isLaunchPadOpen && <LaunchPad />}
          {this.state.isFieldLauncherOpen && <FieldLauncher />}
        </div>
      </div>

    );
  }
}

export default Apps;
