import get from "lodash.get";
import { createSelector } from "reselect";

export const getViewData = state => get(state, "viewData");

export const getVisualizationState = createSelector(
  getViewData,
  viewData => viewData.visualizationState || ""
);
