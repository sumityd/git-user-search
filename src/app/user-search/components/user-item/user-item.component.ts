import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-user-item",
  templateUrl: "./user-item.component.html",
  styleUrls: ["./user-item.component.css","../common.css"],
})
export class UserItemComponent implements OnInit {
  
  @Input() user:any;
  @Input() followers:any;
  constructor() {}

  ngOnInit() {}
}
