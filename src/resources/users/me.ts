// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as MeAPI from './me';

export class Me extends APIResource {
  /**
   * Me
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<UserRead> {
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

export namespace Me {
  export import UserRead = MeAPI.UserRead;
}
