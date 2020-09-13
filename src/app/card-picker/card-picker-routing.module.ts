import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardContainerComponent } from './components/card-container/card-container.component';
import { CardItemComponent } from './components/card-item/card-item.component';


const routes: Routes = [
  {
    path: "",
    component: CardContainerComponent,
    children: [
      {
        path: "",
        component: CardItemComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardPickerRoutingModule { }
