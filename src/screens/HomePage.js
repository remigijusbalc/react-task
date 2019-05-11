import React from "react";
import { connect } from "react-redux";
import { EmployeeList, Header, SearchBar } from "../components";
import { pushTab, mountTab } from "../redux/tabs";

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      employees: props.employees,
      inputValue: ""
    };
  }
  onTextChange = event => {
    const { employees } = this.props;
    const inputValue = event.target.value;
    let employeesArray = [];
    if (inputValue.length === 0) {
      employeesArray = employees;
    } else {
      employeesArray = employees.filter(
        employee =>
          employee.firstName.includes(inputValue) ||
          employee.lastName.includes(inputValue) ||
          employee.title.includes(inputValue)
      );
    }

    this.setState({ inputValue: inputValue, employees: employeesArray });
  };

  handleSelect = employee => {
    let { tabs, activeTabIndex } = this.props.tabs;
    const existingIndex = tabs.findIndex(value => value.id === employee.id);

    if (activeTabIndex !== -1 && existingIndex === activeTabIndex) return;
    else if (existingIndex !== -1) {
      return this.props.mountTab(existingIndex);
    } else if (tabs.length === 2) {
      return alert("No more than 2 tabs!");
    } else {
      return this.props.pushTab(employee);
    }
  };

  render() {
    const { employees, inputValue } = this.state;
    return (
      <div className="App">
        <Header title="Employee Directory" />
        <SearchBar onChange={this.onTextChange} value={inputValue} />
        <EmployeeList onSelect={this.handleSelect} employeesArray={employees} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    employees: state.employeeData.employees,
    tabs: state.tabs
  };
};

export default connect(
  mapStateToProps,
  { pushTab, mountTab }
)(App);
