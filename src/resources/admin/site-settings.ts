// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as SiteSettingsAPI from './site-settings';

export class SiteSettings extends APIResource {
  /**
   * Update Site Setting
   */
  update(
    settingName: string,
    body: SiteSettingUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.put(`/api/v1/admin/site-settings/${settingName}`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Site Settings
   */
  list(options?: Core.RequestOptions): Core.APIPromise<SiteSettingListResponse> {
    return this._client.get('/api/v1/admin/site-settings', options);
  }
}

export interface SettingValue {
  data_type: string;

  default: string | number | boolean | Array<unknown> | unknown | null;

  description: string;

  group: string;

  name: string;

  client?: boolean;

  value?: string | number | boolean | Array<unknown> | unknown | null;
}

export type SiteSettingListResponse = Record<string, SettingValue>;

export interface SiteSettingUpdateParams {
  value: string | number | boolean | Array<unknown> | unknown | null;
}

export namespace SiteSettings {
  export import SettingValue = SiteSettingsAPI.SettingValue;
  export import SiteSettingListResponse = SiteSettingsAPI.SiteSettingListResponse;
  export import SiteSettingUpdateParams = SiteSettingsAPI.SiteSettingUpdateParams;
}
