import { Action } from "@ngrx/store";

export enum CardPickerActionTypes {
  FETCH_CARD_DATA = "[CardPicker] fetchCardData",
  FETCH_CARD_DATA_SUCCESS = "[CardPicker] fetchCardDataSuccess",
  FETCH_CARD_DATA_FAILED = "[CardPicker] fetchCardDataFailed",
}

export class FetchCardData implements Action {
  readonly type = CardPickerActionTypes.FETCH_CARD_DATA;
  constructor(public payload: any) {}
}
export class FetchCardDataSuccess implements Action {
  readonly type = CardPickerActionTypes.FETCH_CARD_DATA_SUCCESS;
  constructor(public payload: any) {}
}
export class FetchCardDataFailed implements Action {
  readonly type = CardPickerActionTypes.FETCH_CARD_DATA_FAILED;
  constructor(public payload: any) {}
}

export type CardPickerActions =
  | FetchCardData
  | FetchCardDataSuccess
  | FetchCardDataFailed;
