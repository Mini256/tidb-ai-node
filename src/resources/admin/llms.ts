// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as LlmsAPI from './llms';

export class Llms extends APIResource {
  /**
   * Create Llm
   */
  create(body: LlmCreateParams, options?: Core.RequestOptions): Core.APIPromise<AdminLlm> {
    return this._client.post('/api/v1/admin/llms', { body, ...options });
  }

  /**
   * Get Llm Detail
   */
  retrieve(llmId: number, options?: Core.RequestOptions): Core.APIPromise<AdminLlm> {
    return this._client.get(`/api/v1/admin/llms/${llmId}`, options);
  }

  /**
   * List Llms
   */
  list(query?: LlmListParams, options?: Core.RequestOptions): Core.APIPromise<PageAdminLlm>;
  list(options?: Core.RequestOptions): Core.APIPromise<PageAdminLlm>;
  list(
    query: LlmListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PageAdminLlm> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/api/v1/admin/llms', { query, ...options });
  }

  /**
   * Delete Llm
   */
  delete(llmId: number, options?: Core.RequestOptions): Core.APIPromise<AdminLlm> {
    return this._client.delete(`/api/v1/admin/llms/${llmId}`, options);
  }

  /**
   * Test Llm
   */
  test(body: LlmTestParams, options?: Core.RequestOptions): Core.APIPromise<LlmTestResult> {
    return this._client.post('/api/v1/admin/llms/test', { body, ...options });
  }
}

export interface AdminLlm {
  id: number;

  model: string;

  name: string;

  provider: 'openai' | 'gemini' | 'anthropic_vertex' | 'openai_like' | 'bedrock';

  config?: unknown | Array<unknown> | null;

  created_at?: string | null;

  is_default?: boolean;

  updated_at?: string | null;
}

export interface LlmTestResult {
  success: boolean;

  error?: string;
}

export interface PageAdminLlm {
  items: Array<AdminLlm>;

  page: number | null;

  size: number | null;

  total: number | null;

  pages?: number | null;
}

export interface LlmCreateParams {
  credentials: unknown;

  model: string;

  name: string;

  provider: 'openai' | 'gemini' | 'anthropic_vertex' | 'openai_like' | 'bedrock';

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

  provider: 'openai' | 'gemini' | 'anthropic_vertex' | 'openai_like' | 'bedrock';

  id?: number | null;

  config?: unknown | Array<unknown> | null;

  created_at?: string | null;

  is_default?: boolean;

  updated_at?: string | null;
}

export namespace Llms {
  export import AdminLlm = LlmsAPI.AdminLlm;
  export import LlmTestResult = LlmsAPI.LlmTestResult;
  export import PageAdminLlm = LlmsAPI.PageAdminLlm;
  export import LlmCreateParams = LlmsAPI.LlmCreateParams;
  export import LlmListParams = LlmsAPI.LlmListParams;
  export import LlmTestParams = LlmsAPI.LlmTestParams;
}
