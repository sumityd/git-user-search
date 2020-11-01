import { Action } from "@ngrx/store";

export enum UserActionTypes {
  FETCH_USER_DETAIL = "[User] fetchUserDetail",
  FETCH_USER_DETAIL_SUCCESS = "[User] fetchUserDetailSuccess",
  FETCH_USER_DETAIL_FAILED = "[User] fetchUserDetailFailed",
}

export class FetchUserDetail implements Action {
  readonly type = UserActionTypes.FETCH_USER_DETAIL;
  constructor(public payload: any) {}
}
export class FetchUserDetailSuccess implements Action {
  readonly type = UserActionTypes.FETCH_USER_DETAIL_SUCCESS;
  constructor(public payload: any) {}
}

export class FetchUserDetailFailed implements Action {
  readonly type = UserActionTypes.FETCH_USER_DETAIL_FAILED;
  constructor(public payload: any) {}
}

export type UserActions =
  | FetchUserDetail
  | FetchUserDetailSuccess
  | FetchUserDetailFailed;
