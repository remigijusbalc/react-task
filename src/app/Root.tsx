import { Grid } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { RootState } from "./redux/store";
import { EmployeePage, HomePage } from "./screens";
import { getActiveTab, getTabs, getActiveTabIndex } from "./redux/tabs";

const mapStateToProps = (state: RootState) => {
  return {
    tabs: getTabs(state),
    activeTab: getActiveTab(state),
    activeTabIndex: getActiveTabIndex(state)
  };
};

interface RootProps extends ReturnType<typeof mapStateToProps> {}

const Root: React.FC<RootProps> = props => {
  const { activeTab } = props;

  return (
    <Grid container spacing={24}>
      <Grid item xs={6}>
        <HomePage />
      </Grid>
      <Grid item xs={6}>
        <EmployeePage employee={activeTab} />
      </Grid>
    </Grid>
  );
};

export default connect(
  mapStateToProps,
  null
)(Root);
