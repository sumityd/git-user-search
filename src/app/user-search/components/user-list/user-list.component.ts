import { Component, OnInit, ViewChild } from "@angular/core";
import { AppState } from "src/app/interface";
import { Store } from "@ngrx/store";
import { FetchUserDetail } from "../../actions/user-search.action";
import { Observable, Subject, fromEvent, Subscription } from "rxjs";
import {
  userCountSelector,
  userDataSelector,
} from "../../reducers/user-search.selector";
import { debounceTime, distinctUntilChanged, map } from "rxjs/operators";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css", "../common.css"],
})
export class UserListComponent implements OnInit {
  searchStream$: Subject<string> = new Subject();
  subscription$: Subscription = new Subscription();
  userCount$: Observable<any>;
  userList$: Observable<any>;
  searchKey: string = "sumit";
  page: number = 1;
  @ViewChild("search", { static: false }) userSearch: any;

  constructor(private _store: Store<AppState>) {}

  ngOnInit() {
    this._store.dispatch(
      new FetchUserDetail({ searchKey: this.searchKey, page: 1 })
    );

    this.userCount$ = this._store.select(userCountSelector);
    this.userList$ = this._store.select(userDataSelector);
  }

  ngAfterViewInit() {
    this.subscription$.add(
      fromEvent(this.userSearch.nativeElement, "keyup")
        .pipe(
          debounceTime(250),
          map((e: any) => e.target.value),
          distinctUntilChanged()
        )
        .subscribe((text) =>
          this._store.dispatch(
            new FetchUserDetail({ searchKey: text, page: this.page })
          )
        )
    );
  }

  closeSearch() {
    this.searchKey = " ";
  }

  change(value: string) {
    if (value == "next") {
      this.page = this.page + 1;
      this._store.dispatch(
        new FetchUserDetail({ searchKey: this.searchKey, page: this.page })
      );
    }

    if(value == 'previuos' && this.page > 0){
      this.page = this.page - 1;
      this._store.dispatch(
        new FetchUserDetail({ searchKey: this.searchKey, page: this.page })
      );
    }
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }
}
