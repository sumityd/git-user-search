import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Observable, of } from "rxjs";

import { switchMap, map, catchError } from "rxjs/operators";
import { Action } from "@ngrx/store";
import { UserActionTypes, UserActions, FetchUserDetailSuccess, FetchUserDetailFailed } from '../actions/user-search.action';
import { UserService } from '../service/user-service.service';

Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) {
  }

  @Effect()
  fetchUser$: Observable<Action> = this.actions$.pipe(
    ofType(UserActionTypes.FETCH_USER_DETAIL),
    switchMap((action: UserActions) =>
      this.userService.fetchUserDetail(action.payload).pipe(
        map((res: any) => {
          // console.log(res);
          return new FetchUserDetailSuccess(res);
        }),
        catchError((_) =>
          of(new FetchUserDetailFailed("Unexpected error occurred"))
        )
      )
    )
  );
}
