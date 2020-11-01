import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSearchComponent } from './user-search.component';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './effects/user-search.effect';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserRoutingModule } from './user-search-routing.module';
import { UserItemComponent } from './components/user-item/user-item.component';
import { AngularMaterialModule } from '../angular-material.module';
import { GetUserDetailPipe } from './pipes/get-user-detail.pipe';

@NgModule({
  declarations: [UserSearchComponent, UserListComponent, UserItemComponent, GetUserDetailPipe],
  imports: [
    CommonModule,
    HttpClientModule,
    UserRoutingModule,
    AngularMaterialModule,
    EffectsModule.forFeature([UserEffects]),
  ],
  providers: [],
})
export class UserSearchModule { }
