import { ActionReducerMap, ActionReducer, MetaReducer } from "@ngrx/store";
import * as fromCardPicker from "../app/card-picker/reducers/card-picker.reducer";
import { AppState } from "./interface";

export const reducer: ActionReducerMap<AppState> = {
  state: fromCardPicker.CardPickerReducer,
};

export function logger(
  reducer: ActionReducer<AppState>
): ActionReducer<any, any> {
  return function (state: AppState, action: any): AppState {
    const newState = reducer(state, action);
    console.log("action", action);
    console.log("oldState", state);
    console.log("newState", newState);
    return newState;
  };
}

export const metaReducers: MetaReducer<AppState>[] = [logger];