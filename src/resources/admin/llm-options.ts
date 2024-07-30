// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as LlmOptionsAPI from './llm-options';
import * as AdminsLlmOptionsAPI from '../admins/llm-options';

export class LlmOptions extends APIResource {
  /**
   * Get Llm Options
   */
  list(options?: Core.RequestOptions): Core.APIPromise<LlmOptionListResponse> {
    return this._client.get('/api/v1/admin/llm-options', options);
  }
}

export type LlmOptionListResponse = Array<AdminsLlmOptionsAPI.LlmOption>;

export namespace LlmOptions {
  export import LlmOptionListResponse = LlmOptionsAPI.LlmOptionListResponse;
}
