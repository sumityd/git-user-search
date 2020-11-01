import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// here implementing lazy loading 
const routes: Routes = [
  {
    path: "user",
    loadChildren: () =>
      import("./user-search/user-search.module").then(
        (m) => m.UserSearchModule
      ),
  },
  { path: "**", redirectTo: "user", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
