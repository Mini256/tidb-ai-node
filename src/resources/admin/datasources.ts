// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as DatasourcesAPI from './datasources';

export class Datasources extends APIResource {
  /**
   * Create Datasource
   */
  create(body: DatasourceCreateParams, options?: Core.RequestOptions): Core.APIPromise<DataSource> {
    return this._client.post('/api/v1/admin/datasources', { body, ...options });
  }

  /**
   * Get Datasource
   */
  retrieve(dataSourceId: number, options?: Core.RequestOptions): Core.APIPromise<DataSource> {
    return this._client.get(`/api/v1/admin/datasources/${dataSourceId}`, options);
  }

  /**
   * List Datasources
   */
  list(query?: DatasourceListParams, options?: Core.RequestOptions): Core.APIPromise<PageDataSource>;
  list(options?: Core.RequestOptions): Core.APIPromise<PageDataSource>;
  list(
    query: DatasourceListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PageDataSource> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/api/v1/admin/datasources', { query, ...options });
  }

  /**
   * Get Datasource Overview
   */
  overview(dataSourceId: number, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.get(`/api/v1/admin/datasources/${dataSourceId}/overview`, options);
  }
}

export interface DataSource {
  data_source_type: string;

  description: string;

  llm_id: number | null;

  name: string;

  user_id: string;

  id?: number | null;

  build_kg_index?: boolean;

  config?: unknown | Array<unknown>;

  created_at?: string | null;

  deleted_at?: string | null;

  updated_at?: string | null;
}

export interface PageDataSource {
  items: Array<DataSource>;

  page: number | null;

  size: number | null;

  total: number | null;

  pages?: number | null;
}

export type DatasourceOverviewResponse = unknown;

export interface DatasourceCreateParams {
  config: unknown | Array<unknown>;

  data_source_type: 'file' | 'web_sitemap' | 'web_single_page';

  description: string;

  name: string;

  build_kg_index?: boolean;

  llm_id?: number | null;
}

export interface DatasourceListParams {
  page?: number;

  size?: number;
}

export namespace Datasources {
  export import DataSource = DatasourcesAPI.DataSource;
  export import PageDataSource = DatasourcesAPI.PageDataSource;
  export import DatasourceOverviewResponse = DatasourcesAPI.DatasourceOverviewResponse;
  export import DatasourceCreateParams = DatasourcesAPI.DatasourceCreateParams;
  export import DatasourceListParams = DatasourcesAPI.DatasourceListParams;
}
