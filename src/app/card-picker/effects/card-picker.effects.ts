import { CardPickerService } from "../services/card-picker.service";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Action } from "@ngrx/store";
import { switchMap, map, catchError } from "rxjs/operators";
import {
  CardPickerActions,
  CardPickerActionTypes,
  FetchCardDataSuccess,
  FetchCardDataFailed,
} from "../actions/card-picker.actions";

Injectable();
export class CardPickerEffects {
  constructor(
    private actions$: Actions,
    private cardService: CardPickerService
  ) {}

  @Effect()
  fetchCardData$: Observable<Action> = this.actions$.pipe(
    ofType(CardPickerActionTypes.FETCH_CARD_DATA),
    switchMap((action: CardPickerActions) =>
      this.cardService.fetchCardData().pipe(
        map((action: any) => new FetchCardDataSuccess(action)),
        catchError((_) =>
          of(new FetchCardDataFailed("Unexpected error occurred"))
        )
      )
    )
  );
}
