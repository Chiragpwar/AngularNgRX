import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { UsersAddComponent } from './users-add/users-add.component';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { UsersListComponent } from './users-list/users-list.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {UserReducer} from '../users/State/user.reducer';
import {EffectsModule, Actions} from '@ngrx/effects';
import {UserEffect} from './State/user.effect';



const usersRoutes: Routes = [{ path: '', component: UsersComponent }];

@NgModule({
  declarations: [UsersComponent, UsersAddComponent, UsersEditComponent, UsersListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([UserEffect]),
    StoreModule.forFeature('users', UserReducer),
    RouterModule.forChild(usersRoutes),
  ]
})
export class UsersModule { }
