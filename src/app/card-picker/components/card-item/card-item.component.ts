import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { AppState } from "src/app/interface";
import { cardDataSelector } from "../../reducers/card-picker.selector";
import { CardSelectViewComponent } from "../card-select-view/card-select-view.component";
import { MatDialog } from "@angular/material";
import { Card } from '../../reducers/card-picker.state';

@Component({
  selector: "app-card-item",
  templateUrl: "./card-item.component.html",
  styleUrls: ["./card-item.component.css"],
})
export class CardItemComponent implements OnInit {
  cardData: Card[] = [];
  subscription$: Subscription = new Subscription();
  constructor(public dialog: MatDialog, private _store: Store<AppState>) {}

  ngOnInit() {
    this.subscription$.add(
      this._store.select(cardDataSelector).subscribe((list) => {
        this.cardData = list;
      })
    );
  }

  shuffle(value: any[]) {
    let deck = JSON.parse(JSON.stringify(value));
    for (let i = 0; i < 1000; i++) {
      let item1 = Math.floor(Math.random() * deck.length);
      let item2 = Math.floor(Math.random() * deck.length);
      let tmp = deck[item1];

      deck[item1] = deck[item2];
      deck[item2] = tmp;
    }
    this.cardData = deck;
  }

  selectCard(card: any) {
    this.dialog.open(CardSelectViewComponent, {
      width: "60vw",
      height: "70vh",
      data: { cardData: card },
    });
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
