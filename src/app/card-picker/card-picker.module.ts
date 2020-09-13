import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CardPickerRoutingModule } from "./card-picker-routing.module";
import { CardPickerComponent } from "./card-picker.component";
import { CardPickerService } from "./services/card-picker.service";
import { CardItemComponent } from "./components/card-item/card-item.component";
import { CardContainerComponent } from "./components/card-container/card-container.component";
import { CardPickerPipe } from "./pipes/card-picker.pipe";
import { CardSelectViewComponent } from "./components/card-select-view/card-select-view.component";
import { EffectsModule } from "@ngrx/effects";
import { CardPickerEffects } from "./effects/card-picker.effects";
import { AngularMaterialModule } from '../angular-material.module';

@NgModule({
  declarations: [
    CardPickerComponent,
    CardItemComponent,
    CardContainerComponent,
    CardPickerPipe,
    CardSelectViewComponent,
  ],
  imports: [
    CommonModule,
    CardPickerRoutingModule,
    EffectsModule.forFeature([CardPickerEffects]),
    AngularMaterialModule
  ],
  providers: [CardPickerService],
  entryComponents: [CardSelectViewComponent],
})
export class CardPickerModule {}
