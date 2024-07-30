// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as LlmsAPI from './llms';
import * as AdminsLlmsAPI from '../admins/llms';

export class Llms extends APIResource {
  /**
   * Create Llm
   */
  create(body: LlmCreateParams, options?: Core.RequestOptions): Core.APIPromise<AdminsLlmsAPI.AdminLlm> {
    return this._client.post('/api/v1/admin/llms', { body, ...options });
  }

  /**
   * Get Llm Detail
   */
  retrieve(llmId: number, options?: Core.RequestOptions): Core.APIPromise<AdminsLlmsAPI.AdminLlm> {
    return this._client.get(`/api/v1/admin/llms/${llmId}`, options);
  }

  /**
   * List Llms
   */
  list(query?: LlmListParams, options?: Core.RequestOptions): Core.APIPromise<AdminsLlmsAPI.PageAdminllm>;
  list(options?: Core.RequestOptions): Core.APIPromise<AdminsLlmsAPI.PageAdminllm>;
  list(
    query: LlmListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AdminsLlmsAPI.PageAdminllm> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/api/v1/admin/llms', { query, ...options });
  }

  /**
   * Delete Llm
   */
  delete(llmId: number, options?: Core.RequestOptions): Core.APIPromise<AdminsLlmsAPI.AdminLlm> {
    return this._client.delete(`/api/v1/admin/llms/${llmId}`, options);
  }

  /**
   * Test Llm
   */
  test(body: LlmTestParams, options?: Core.RequestOptions): Core.APIPromise<AdminsLlmsAPI.LlmTestResult> {
    return this._client.post('/api/v1/admin/llms/test', { body, ...options });
  }
}

export interface LlmCreateParams {
  credentials: unknown;

  model: string;

  name: string;

  provider: 'openai' | 'gemini' | 'anthropic_vertex' | 'openai_like';

  id?: number | null;

  config?: unknown | Array<unknown> | null;

  created_at?: string | null;

  is_default?: boolean;

  updated_at?: string | null;
}

export interface LlmListParams {
  page?: number;

  size?: number;
}

export interface LlmTestParams {
  credentials: unknown;

  model: string;

  name: string;

  provider: 'openai' | 'gemini' | 'anthropic_vertex' | 'openai_like';

  id?: number | null;

  config?: unknown | Array<unknown> | null;

  created_at?: string | null;

  is_default?: boolean;

  updated_at?: string | null;
}

export namespace Llms {
  export import LlmCreateParams = LlmsAPI.LlmCreateParams;
  export import LlmListParams = LlmsAPI.LlmListParams;
  export import LlmTestParams = LlmsAPI.LlmTestParams;
}
