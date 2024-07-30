// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as SiteConfigsAPI from './site-configs';

export class SiteConfigs extends APIResource {
  /**
   * Site Config
   */
  list(options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.get('/api/v1/site-config', options);
  }
}

export type SiteConfigListResponse = unknown;

export namespace SiteConfigs {
  export import SiteConfigListResponse = SiteConfigsAPI.SiteConfigListResponse;
}
