import React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { bindActionCreators, Dispatch } from "redux";
import { EmployeeDetails, Header } from "../components";
import { Employee } from "../redux/employees/employees.types";
import { RootState } from "../redux/store";
import {
  editDetails,
  getActiveTab,
  getActiveTabIndex,
  removeTab,
  getEmployeesArray
} from "../redux/tabs";
import { saveEmployeeChanges } from "../redux/employees";
import { Button } from "@material-ui/core";
import Clear from "@material-ui/icons/Clear";

const mapStateToProps = (state: RootState) => {
  return {
    activeTabIndex: getActiveTabIndex(state),
    current: getActiveTab(state),
    employees: getEmployeesArray(state)
  };
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ removeTab, editDetails, saveEmployeeChanges }, dispatch);

export interface EmployeePageProps {
  employee: Employee;
}

interface EmployeePagePrivateProps
  extends EmployeePageProps,
    ReturnType<typeof mapStateToProps>,
    ReturnType<typeof mapDispatchToProps> {}

class EmployeePage extends React.Component<EmployeePagePrivateProps> {
  constructor(props: EmployeePagePrivateProps) {
    super(props);
    this.detailChangeHandler = this.detailChangeHandler.bind(this);
    this.saveChangesHandler = this.saveChangesHandler.bind(this);
  }

  // componentDidMount() {
  //   document.addEventListener("keydown", this.handleKeyPress);
  // }

  detailChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    const { activeTabIndex } = this.props;
    return this.props.editDetails(activeTabIndex, value, name);
  }

  saveChangesHandler(object: Employee, property: keyof Employee) {
    const { employees } = this.props;

    const parentIndex = employees.findIndex(e => e.id === object.id);
    if ((employees as any)[parentIndex][property] === object[property]) {
      alert("Values are the same!");
    } else {
      return this.props.saveEmployeeChanges(
        parentIndex,
        property,
        object[property]
      );
    }
  }

  render() {
    const { current } = this.props;

    if (!current) {
      return null;
    }

    return (
      <React.Fragment>
        <Header title="Employee">
          <Button
            style={{ marginLeft: "auto" }}
            onClick={() => this.props.removeTab(current)}
          >
            <Clear />
          </Button>
        </Header>
        <EmployeeDetails
          onChange={this.detailChangeHandler}
          employee={current}
          saveInputChanges={this.saveChangesHandler}
        />
      </React.Fragment>
    );
  }
}

export default compose<EmployeePagePrivateProps, EmployeePageProps>(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(EmployeePage);
