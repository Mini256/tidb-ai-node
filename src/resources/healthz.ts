// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as HealthzAPI from './healthz';

export class Healthz extends APIResource {
  /**
   * Status
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.get('/api/v1/healthz', options);
  }
}

export type HealthzRetrieveResponse = unknown;

export namespace Healthz {
  export import HealthzRetrieveResponse = HealthzAPI.HealthzRetrieveResponse;
}
