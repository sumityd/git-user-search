import { CardPicker, intialCardPickerState } from "./card-picker.state";
import {
  CardPickerActions,
  CardPickerActionTypes,
} from "../actions/card-picker.actions";

export function CardPickerReducer(
  state: CardPicker = intialCardPickerState,
  action: CardPickerActions
) {
  switch (action.type) {
    case CardPickerActionTypes.FETCH_CARD_DATA_SUCCESS: {
      return {
        ...state,
        cardData: action.payload,
        message: null,
        error: null,
      };
    }

    case CardPickerActionTypes.FETCH_CARD_DATA_FAILED: {
      return {
        ...state,
        message: null,
        error: action.payload,
      };
    }

    default:
      return state;
  }
}
