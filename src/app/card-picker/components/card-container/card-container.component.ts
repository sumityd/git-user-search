import { Component, OnInit } from "@angular/core";
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/interface';
import { FetchCardData } from '../../actions/card-picker.actions';

@Component({
  selector: "app-card-container",
  templateUrl: "./card-container.component.html",
  styleUrls: ["./card-container.component.css"],
})
export class CardContainerComponent implements OnInit {
 
  constructor(private _store:Store<AppState>) {}

  ngOnInit() {
    this._store.dispatch(new FetchCardData({}));
  }
}
