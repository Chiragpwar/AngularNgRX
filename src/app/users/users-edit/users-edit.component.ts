import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Users} from '../usersmodal';
import {Observable} from 'rxjs';
import { Store, State, select } from '@ngrx/store';
import * as UserActions from '../State/user.action';
import * as fromuser from '../State/user.reducer';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.scss']
})
export class UsersEditComponent implements OnInit {
  usersForm: FormGroup;
  constructor(private fb: FormBuilder, private store: Store<fromuser.Appstate>) { }

  ngOnInit() {
    this.usersForm = this.fb.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Email: ['', Validators.required],
      Gender: ['', Validators.required],
      Address: ['', Validators.required],
      id: null
    });

    const users$: Observable<Users> = this.store.select(
      fromuser.getCurrentCustomer
    );

    users$.subscribe(currentCustomer => {
      if (currentCustomer) {
        this.usersForm.patchValue({
          FirstName: currentCustomer.FirstName,
          LastName: currentCustomer.LastName,
          Address: currentCustomer.Address,
          Email: currentCustomer.Email,
          id: currentCustomer.id
        });
      }
    });
  }


  updateCustomer() {
    const newCustomer: Users = {
      FirstName: this.usersForm.get('FirstName').value,
      LastName: this.usersForm.get('LastName').value,
      Address: this.usersForm.get('Address').value,
      Email: this.usersForm.get('Email').value,
      Gender: this.usersForm.get('Gender').value
    };

    this.store.dispatch(new UserActions.Updateuser(newCustomer));

    this.usersForm.reset();
  }
}
