// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as UsersAPI from './users';

export class Users extends APIResource {
  /**
   * Me
   */
  retrieveMe(options?: Core.RequestOptions): Core.APIPromise<UserRead> {
    return this._client.get('/api/v1/users/me', options);
  }
}

export interface UserRead {
  id: string;

  email: string;

  is_active?: boolean;

  is_superuser?: boolean;

  is_verified?: boolean;
}

export namespace Users {
  export import UserRead = UsersAPI.UserRead;
}
