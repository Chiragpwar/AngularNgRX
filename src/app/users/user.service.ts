import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

import { Users } from '../users/usersmodal';

@Injectable({
    providedIn: 'root'
  })

  export class UserService {
  ApiUrl = environment.Api_url;

  constructor(private Http: HttpClient) {}

    public GetCustomerList(): Observable<Users[]> {
      const URL = this.ApiUrl + 'listuser';
      const headers = new HttpHeaders().set('content-type', 'application/json');
      return this.Http.get<Users[]>(URL, {headers});
    }

    public GetCustomerbyID(ID): Observable<Users> {
      const URL = this.ApiUrl + 'GetCustomerByIDNgRx/' + ID;
      const headers = new HttpHeaders().set('content-type', 'application/json');
      return this.Http.get<Users>(URL, {headers});
    }

  public AddCustomer(customer) {
    const URL = this.ApiUrl + 'userAdd';
    const body = {
      FirstName: customer.FirstName,
      LastName: customer.LastName,
      Email: customer.Email,
      Address: customer.Address,
      Gender: customer.Gender
    };
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.Http.post(URL, body, {headers});
  }

  public EditCustomer(customer) {
    debugger
    const URL = this.ApiUrl + 'UpdateDataNgRx';
    const body = {
      _id: customer._id,
      FirstName: customer.FirstName,
      LastName: customer.LastName,
      Email: customer.Email,
      Address: customer.Address,
      Gender: customer.Gender
    };
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.Http.put(URL, body, {headers});
  }

  public DeleteCustomer(Id) {
    const URL = this.ApiUrl + 'DeleteCustomerNGRX/' + Id;
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.Http.post(URL, {headers});
  }
  }
