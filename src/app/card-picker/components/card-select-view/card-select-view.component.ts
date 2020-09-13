import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-card-select-view",
  templateUrl: "./card-select-view.component.html",
  styleUrls: ["./card-select-view.component.css"],
})
export class CardSelectViewComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<CardSelectViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {}

  dialogClose() {
    this.dialogRef.close();
  }
}
