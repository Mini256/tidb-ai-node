// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as DatasourcesAPI from './datasources';

export class Datasources extends APIResource {}

export interface Datasource {
  data_source_type: string;

  description: string;

  name: string;

  user_id: string;

  id?: number | null;

  build_kg_index?: boolean;

  config?: unknown | Array<unknown>;

  created_at?: string | null;

  updated_at?: string | null;
}

export interface PageDatasource {
  items: Array<Datasource>;

  page: number | null;

  size: number | null;

  total: number | null;

  pages?: number | null;
}

export namespace Datasources {
  export import Datasource = DatasourcesAPI.Datasource;
  export import PageDatasource = DatasourcesAPI.PageDatasource;
}
