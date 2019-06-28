import * as UserAction from '../State/user.action';
import {Users} from '../usersmodal';
import * as Fromroot from '../../state/app.state';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface UserState extends EntityState<Users> {
  selectedCustomerId: number | null;
  loading: boolean;
  loaded: boolean;
  error: string;
}

export interface Appstate extends Fromroot.Appstate {
users: UserState;
}


export const customerAdapter: EntityAdapter<Users> = createEntityAdapter<
  Users
>();


export const defaultCustomer: UserState = {
  ids: [],
  entities: {},
  selectedCustomerId: null,
  loading: false,
  loaded: false,
  error: ''
};

export const initialState = customerAdapter.getInitialState(defaultCustomer);

export function UserReducer(state = initialState, action: UserAction.Actions): UserState {
   switch (action.type) {
     case UserAction.UserActionType.LOAD_USERS_SUCCESS : {
      return customerAdapter.addAll(action.payload, {
        ...state,
        loading: false,
        loaded: true
      });
     }

   case UserAction.UserActionType.LOAD_USERS_FAIL : {
      return {
        ...state,
        entities: {},
        loading: false,
        loaded: false,
        error: action.payload
      };
     }

  case UserAction.UserActionType.LOAD_USER_SUCCESS : {
      return customerAdapter.addOne(action.payload, {
        ...state,
        selectedCustomerId: action.payload.id
      });
   }

   case UserAction.UserActionType.LOAD_USER_FAIL : {
    return {
      ...state,
      error: action.payload
    };
   }

   case UserAction.UserActionType.CREATE_USER_SUCCESS: {
    return customerAdapter.addOne(action.payload, state);
   }
  case UserAction.UserActionType.CREATE_USER_FAIL: {
    return {
      ...state,
      error: action.payload
    };
  }

  case UserAction.UserActionType.UPDATE_USER_SUCCESS: {
    return customerAdapter.addOne(action.payload, state);
  }
  case UserAction.UserActionType.UPDATE_USER_FAIL: {
    return {
      ...state,
      error: action.payload
    };
  }

  case UserAction.UserActionType.DELETE_USER_SUCCESS: {
    return customerAdapter.removeOne(action.payload, state);
  }
  case UserAction.UserActionType.DELETE_USER_FAIL: {
    return {
      ...state,
      error: action.payload
    };
  }

     default : {
       return state;
     }
   }
}

const Getuserfeature = createFeatureSelector<UserState>(
  'users'
);

export const GetUsers = createSelector(
  Getuserfeature,
  customerAdapter.getSelectors().selectAll
);

export const GetUsersloading = createSelector(
  Getuserfeature,
  (state: UserState) => state.loading
);

export const GetUsersloaded = createSelector(
  Getuserfeature,
  (state: UserState) => state.loaded
);

export const GetUsersError = createSelector(
  Getuserfeature,
  (state: UserState) => state.error
);


export const getError = createSelector(
  Getuserfeature,
  (state: UserState) => state.error
);

export const getCurrentCustomerId = createSelector(
  Getuserfeature,
  (state: UserState) => state.selectedCustomerId
);

export const getCurrentCustomer = createSelector(
  Getuserfeature,
  getCurrentCustomerId,
  state => state.entities[state.selectedCustomerId]
);
