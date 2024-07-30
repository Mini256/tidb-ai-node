// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as MeAPI from './me';

export class Users extends APIResource {
  me: MeAPI.Me = new MeAPI.Me(this._client);
}

export namespace Users {
  export import Me = MeAPI.Me;
  export import UserRead = MeAPI.UserRead;
}
