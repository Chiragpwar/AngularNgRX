import { Component, OnInit } from '@angular/core';
import {Store, select} from '@ngrx/store';
import * as UserAction from '../State/user.action';
import {observable, Observable} from 'rxjs';
import * as fromuser from '../State/user.reducer';
import {Users} from '../usersmodal';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  usersList$: Observable<Users[]>;
// tslint:disable-next-line: ban-types
  error$: Observable<String>;
  constructor(private store: Store<fromuser.Appstate>) { }

  ngOnInit() {
    this.store.dispatch(new UserAction.Loadusers());
    this.usersList$ = this.store.pipe(select(fromuser.GetUsers));
    this.error$ = this.store.pipe(select(fromuser.getError));
  }
  public editCustomer(users) {
    this.store.dispatch(new UserAction.Loaduser(users._id));
  }

  public deleteCustomer(users) {
    this.store.dispatch(new UserAction.Deleteuser(users._id));
  }

}
