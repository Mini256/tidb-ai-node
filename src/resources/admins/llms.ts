// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as LlmsAPI from './llms';

export class Llms extends APIResource {}

export interface AdminLlm {
  id: number;

  model: string;

  name: string;

  provider: 'openai' | 'gemini' | 'anthropic_vertex' | 'openai_like';

  config?: unknown | Array<unknown> | null;

  created_at?: string | null;

  is_default?: boolean;

  updated_at?: string | null;
}

export interface LlmTestResult {
  success: boolean;

  error?: string;
}

export interface PageAdminllm {
  items: Array<AdminLlm>;

  page: number | null;

  size: number | null;

  total: number | null;

  pages?: number | null;
}

export namespace Llms {
  export import AdminLlm = LlmsAPI.AdminLlm;
  export import LlmTestResult = LlmsAPI.LlmTestResult;
  export import PageAdminllm = LlmsAPI.PageAdminllm;
}
