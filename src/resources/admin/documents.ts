// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as DocumentsAPI from './documents';

export class Documents extends APIResource {
  /**
   * List Documents
   */
  list(query?: DocumentListParams, options?: Core.RequestOptions): Core.APIPromise<PageDocument>;
  list(options?: Core.RequestOptions): Core.APIPromise<PageDocument>;
  list(
    query: DocumentListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PageDocument> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/api/v1/admin/documents', { query, ...options });
  }
}

export interface PageDocument {
  items: Array<PageDocument.Item>;

  page: number | null;

  size: number | null;

  total: number | null;

  pages?: number | null;
}

export namespace PageDocument {
  export interface Item {
    content: string;

    data_source_id: number;

    hash: string;

    index_result: string;

    last_modified_at: string | null;

    mime_type: string;

    name: string;

    source_uri: string;

    id?: number | null;

    created_at?: string | null;

    index_status?: 'not_started' | 'pending' | 'running' | 'completed' | 'failed';

    meta?: unknown | Array<unknown>;

    updated_at?: string | null;
  }
}

export interface DocumentListParams {
  page?: number;

  query?: string | null;

  size?: number;
}

export namespace Documents {
  export import PageDocument = DocumentsAPI.PageDocument;
  export import DocumentListParams = DocumentsAPI.DocumentListParams;
}
