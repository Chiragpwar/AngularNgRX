import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Effect, Actions, ofType} from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import {catchError, mergeMap, map} from 'rxjs/operators';

import {UserService} from '../user.service';
import * as UserAction from '../../users/State/user.action';
import {Users} from '../usersmodal';



@Injectable()

export class UserEffect {

    constructor(private Service: UserService, private action$: Actions) {}

    @Effect()
     loadusers$: Observable<Action> = this.action$.pipe(
         ofType<UserAction.Loadusers>(UserAction.UserActionType.LOAD_USERS),
         mergeMap((action: UserAction.Loadusers) =>
           this.Service.GetCustomerList().pipe(
               map(
                   (users: Users[]) => new UserAction.LoadUsersSuccess(users)
               ),
               catchError(err => of (new UserAction.LoadUsersFail(err)))
           )
         )
      );

    @Effect()
    loaduser$: Observable<Action> = this.action$.pipe(
        ofType<UserAction.Loaduser>(
        UserAction.UserActionType.LOAD_USER
        ),
        mergeMap((action: UserAction.Loaduser) =>
        this.Service.GetCustomerbyID(action.payload).pipe(
            map(
            (User: Users) => new UserAction.LoadUserSuccess(User)
            ),
            catchError(err => of(new UserAction.LoadUserFail(err)))
        )
        )
    );

    @Effect()
    CreateUser$: Observable<Action> = this.action$.pipe(
      ofType<UserAction.Createuser>(
        UserAction.UserActionType.CREATE_USER
      ),
      map((action: UserAction.Createuser) => action.payload),
      mergeMap((user: Users) =>
        this.Service.AddCustomer(user).pipe(
          map(
            (newuser: Users) =>
              new UserAction.CreateUserSuccess(newuser)
          ),
          catchError(err => of(new UserAction.CreateUserFail(err)))
        )
      )
    );

    @Effect()
    updateCustomer$: Observable<Action> = this.action$.pipe(
      ofType<UserAction.Updateuser>(
        UserAction.UserActionType.UPDATE_USER
      ),
      map((action: UserAction.Updateuser) => action.payload),
      mergeMap((user: Users) =>
        this.Service.EditCustomer(user).pipe(
          map(
            (user: Users) =>
              new UserAction.UpdateUserSuccess(
                user
              )
          ),
          catchError(err => of(new UserAction.UpdateUserFail(err)))
        )
      )
    );

    @Effect()
    deleteCustomer$: Observable<Action> = this.action$.pipe(
      ofType<UserAction.Deleteuser>(
        UserAction.UserActionType.DELETE_USER
      ),
      map((action: UserAction.Deleteuser) => action.payload),
      mergeMap((id: number) =>
        this.Service.DeleteCustomer(id).pipe(
          map(() => new UserAction.DeleteUserSuccess(id)),
          catchError(err => of(new UserAction.DeleteUserFail(err)))
        )
      )
    );

}
