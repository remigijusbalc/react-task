import React from "react";
import { connect } from "react-redux";
import { EmployeeList, Header, SearchBar } from "../components";
import { pushTab, mountTab, getActiveTab } from "../redux/tabs";
import { RootState } from "../redux/store";
import { bindActionCreators, Dispatch } from "redux";
import { Employee } from "../redux/employees/employees.types";

const mapStateToProps = (state: RootState) => {
  return {
    employees: state.employeeData.employees,
    tabs: state.tabs,
    activeEmployee: getActiveTab(state)
  };
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ pushTab, mountTab }, dispatch);

interface HomePageProps
  extends ReturnType<typeof mapStateToProps>,
    ReturnType<typeof mapDispatchToProps> {}

interface HomePageState {
  employees: Employee[];
  inputValue: string;
}

class HomePage extends React.PureComponent<HomePageProps, HomePageState> {
  constructor(props: HomePageProps) {
    super(props);

    this.state = {
      employees: props.employees,
      inputValue: ""
    };

    this.employeeSelectHandler = this.employeeSelectHandler.bind(this);
    this.searchChangeHandler = this.searchChangeHandler.bind(this);
  }

  searchChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    return this.setState({ inputValue: event.target.value });
  }

  employeeSelectHandler(employee: Employee) {
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
  }

  filterChanges(employees: Employee[], inputValue: String) {
    return inputValue.length === 0
      ? employees
      : employees.filter(employee => {
          const { firstName, lastName } = employee;
          return (
            firstName.toLowerCase().includes(inputValue.toLowerCase()) ||
            lastName.toLowerCase().includes(inputValue.toLowerCase())
          );
        });
  }

  render() {
    const { inputValue } = this.state;
    const { employees, activeEmployee } = this.props;
    const filteredEmployees = this.filterChanges(employees, inputValue);
    return (
      <React.Fragment>
        <Header title="Employee Directory">
          <SearchBar onChange={this.searchChangeHandler} value={inputValue} />
        </Header>
        <EmployeeList
          activeEmployee={activeEmployee}
          onSelect={this.employeeSelectHandler}
          employees={filteredEmployees}
        />
      </React.Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
