import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: "card-picker",
    loadChildren: () =>
      import("./card-picker/card-picker.module").then(
        (m) => m.CardPickerModule
      ),
  },
  { path: "**", redirectTo: "card-picker", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
