import { AppState } from "../../interface";
import { createSelector, createFeatureSelector } from "@ngrx/store";
import { CardPicker } from "./card-picker.state";

const selectCardPickerState = createFeatureSelector<AppState, CardPicker>(
  "state"
);

export const cardDataSelector = createSelector(
  selectCardPickerState,
  (state: CardPicker) => state.cardData
);
