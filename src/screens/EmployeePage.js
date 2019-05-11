import React from "react";
import { Header, EmployeeDetails } from "../components";
import { connect } from "react-redux";
import { removeTab } from "../redux/tabs";
import { editDetails } from "../redux/tabs";

class EmployeePage extends React.Component {
  onInputChange = event => {
    const { name, value } = event.target;
    const { activeTabIndex } = this.props;
    return this.props.editDetails(activeTabIndex, value, name);
  };

  saveInputChanges = field => {
    const fieldToSave = field.target.name;

    if (
      this.state.employee[fieldToSave] === this.selectedEmployee[0][fieldToSave]
    ) {
      alert("Values are the same!");
    } else {
      this.props.updateEmployeeDetails(
        fieldToSave,
        this.state.employee[fieldToSave],
        this.props.location.state.id
      );
    }
  };
  render() {
    const { employee } = this.props;
    console.log("renred");
    return !employee ? null : (
      <div className="App">
        <Header title="Employee" />
        <div onClick={() => this.props.removeTab(employee)}>
          <h3>CLOSE</h3>
        </div>
        <div>
          <EmployeeDetails onChange={this.onInputChange} employee={employee} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    activeTabIndex: state.tabs.activeTabIndex,
    current: state.tabs.tabs[state.tabs.activeTabIndex]
  };
};

export default connect(
  mapStateToProps,
  { removeTab, editDetails }
)(EmployeePage);
