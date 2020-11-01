import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { of, Observable } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  fetchUserDetail(reqObj: any) {
    let path = `https://api.github.com/search/users?q=${reqObj.searchKey}`;

    if (reqObj.page) {
      path = `${path}&page=${reqObj.page}`;
    }

    return this.httpClient.get(path).pipe(catchError((_) => of([])));
  }

  getUserDetail(url:string){
    return this.httpClient.get(url).pipe(catchError((_) => of([])));
  }
}
