// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as AuthAPI from './auth';

export class Auth extends APIResource {
  /**
   * Create Api Key
   */
  createAPIKey(body: AuthCreateAPIKeyParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/api/v1/create-api-key', { body, ...options });
  }

  /**
   * Auth:Database.Login
   */
  login(body: AuthLoginParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/api/v1/auth/login', {
      body,
      ...options,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded', ...options?.headers },
    });
  }

  /**
   * Auth:Database.Logout
   */
  logout(options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/api/v1/auth/logout', options);
  }
}

export type AuthCreateAPIKeyResponse = unknown;

export type AuthLoginResponse = unknown;

export type AuthLogoutResponse = unknown;

export interface AuthCreateAPIKeyParams {
  description: string;
}

export interface AuthLoginParams {
  password: string;

  username: string;

  client_id?: string | null;

  client_secret?: string | null;

  grant_type?: string | null;

  scope?: string;
}

export namespace Auth {
  export import AuthCreateAPIKeyResponse = AuthAPI.AuthCreateAPIKeyResponse;
  export import AuthLoginResponse = AuthAPI.AuthLoginResponse;
  export import AuthLogoutResponse = AuthAPI.AuthLogoutResponse;
  export import AuthCreateAPIKeyParams = AuthAPI.AuthCreateAPIKeyParams;
  export import AuthLoginParams = AuthAPI.AuthLoginParams;
}
