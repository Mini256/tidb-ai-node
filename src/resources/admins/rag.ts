// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as RagAPI from './rag';

export class Rag extends APIResource {
  /**
   * Status
   */
  indexProgress(options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.get('/api/v1/admin/rag/index-progress', options);
  }
}

export type RagIndexProgressResponse = unknown;

export namespace Rag {
  export import RagIndexProgressResponse = RagAPI.RagIndexProgressResponse;
}
