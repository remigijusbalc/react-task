import React from "react";
import { HomePage, EmployeePage } from "./screens";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import store from "./redux/store";

class App extends React.Component {
  render() {
    const { tabs, activeTabIndex } = this.props.tabs;
    console.table(store.getState());
    return (
      <Grid container spacing={24}>
        <Grid item xs={6}>
          <HomePage />
        </Grid>
        <Grid item xs={6}>
          <EmployeePage employee={tabs[activeTabIndex]} />
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    tabs: state.tabs
  };
};

export default connect(
  mapStateToProps,
  null
)(App);
