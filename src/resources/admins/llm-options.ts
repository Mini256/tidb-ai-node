// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as LlmOptionsAPI from './llm-options';

export class LlmOptions extends APIResource {}

export interface LlmOption {
  credentials_description: string;

  credentials_display_name: string;

  default_model: string;

  model_description: string;

  provider: 'openai' | 'gemini' | 'anthropic_vertex' | 'openai_like';

  credentials_type?: string;

  default_credentials?: string | unknown;
}

export namespace LlmOptions {
  export import LlmOption = LlmOptionsAPI.LlmOption;
}
