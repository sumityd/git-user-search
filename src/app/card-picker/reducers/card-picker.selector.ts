import { AppState } from "../../interface";
import { createSelector, createFeatureSelector } from "@ngrx/store";
import { CardPicker } from "./card-picker.state";

// it is feature selector method for returning a top level feature state 
const selectCardPickerState = createFeatureSelector<AppState, CardPicker>(
  "state"
);
// it is a selector for selcting cardData
export const cardDataSelector = createSelector(
  selectCardPickerState,
  (state: CardPicker) => state.cardData
);
