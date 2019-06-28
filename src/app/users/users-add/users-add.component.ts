import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Users} from '../usersmodal';
import { Store, State, select } from '@ngrx/store';
import * as UserActions from '../State/user.action';
import * as fromuser from '../State/user.reducer';
@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.scss']
})
export class UsersAddComponent implements OnInit {
  usersForm: FormGroup;
  constructor(private fb: FormBuilder, private store: Store<fromuser.Appstate>) { }

  ngOnInit() {
    this.usersForm = this.fb.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Email: ['', Validators.required],
      Gender: ['', Validators.required],
      Address: ['', Validators.required]
    });
  }

  Adduser() {
    const newCustomer: Users = {
      FirstName: this.usersForm.get('FirstName').value,
      LastName: this.usersForm.get('LastName').value,
      Address: this.usersForm.get('Address').value,
      Email: this.usersForm.get('Email').value,
      Gender: this.usersForm.get('Gender').value,
    };

    this.store.dispatch(new UserActions.Createuser(newCustomer));

    this.usersForm.reset();
  }
}
