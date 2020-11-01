import { AppState } from "../../interface";
import { createSelector, createFeatureSelector } from "@ngrx/store";
import { User } from "./user-search.state";

// it is feature selector method for returning a top level feature state
const selectCardPickerState = createFeatureSelector<AppState, User>("state");
export const userDataSelector = createSelector(
  selectCardPickerState,
  (state: User) => state.userData
);

export const userCountSelector = createSelector(
  selectCardPickerState,
  (state: User) => state.userCount
);
