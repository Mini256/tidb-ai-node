// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as APIKeysAPI from './api-keys';

export class APIKeys extends APIResource {
  /**
   * Create Api Key
   */
  create(body: APIKeyCreateParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/api/v1/create-api-key', { body, ...options });
  }
}

export type APIKeyCreateResponse = unknown;

export interface APIKeyCreateParams {
  description: string;
}

export namespace APIKeys {
  export import APIKeyCreateResponse = APIKeysAPI.APIKeyCreateResponse;
  export import APIKeyCreateParams = APIKeysAPI.APIKeyCreateParams;
}
