// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as LlmOptionsAPI from './llm-options';

export class LlmOptions extends APIResource {
  /**
   * Get Llm Options
   */
  list(options?: Core.RequestOptions): Core.APIPromise<LlmOptionListResponse> {
    return this._client.get('/api/v1/admin/llm-options', options);
  }
}

export interface LlmOption {
  credentials_description: string;

  credentials_display_name: string;

  default_model: string;

  model_description: string;

  provider: 'openai' | 'gemini' | 'anthropic_vertex' | 'openai_like';

  credentials_type?: string;

  default_credentials?: string | unknown;
}

export type LlmOptionListResponse = Array<LlmOption>;

export namespace LlmOptions {
  export import LlmOption = LlmOptionsAPI.LlmOption;
  export import LlmOptionListResponse = LlmOptionsAPI.LlmOptionListResponse;
}
