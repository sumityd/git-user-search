import { NgModule } from "@angular/core";
import {
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  MatTooltipModule,
  MatSelectModule,
} from "@angular/material";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule } from "@angular/forms";
import { from } from "rxjs";

@NgModule({
  imports: [
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatTooltipModule,
    MatDialogModule,
    MatSnackBarModule,
  ],
  exports: [
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatTooltipModule,
    MatDialogModule,
    MatSnackBarModule,
  ],
})
export class AngularMaterialModule {}
