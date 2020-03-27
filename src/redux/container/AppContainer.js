import App from "../App";
import { connect } from "react-redux";
import { getVisualizationState } from "../selectors";

const mapStateToAppProps = state => {
  return {
    currentView: getVisualizationState(state)
  };
};

const AppContainer = connect(
  mapStateToAppProps,
  () => {}
)(App);

export default AppContainer;
