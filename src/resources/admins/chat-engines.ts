// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as ChatEnginesAPI from './chat-engines';

export class ChatEngines extends APIResource {
  /**
   * Create Chat Engine
   */
  create(body: ChatEngineCreateParams, options?: Core.RequestOptions): Core.APIPromise<Chatengine> {
    return this._client.post('/api/v1/admin/chat-engines', { body, ...options });
  }

  /**
   * Get Chat Engine
   */
  retrieve(chatEngineId: number, options?: Core.RequestOptions): Core.APIPromise<Chatengine> {
    return this._client.get(`/api/v1/admin/chat-engines/${chatEngineId}`, options);
  }

  /**
   * Update Chat Engine
   */
  update(
    chatEngineId: number,
    body: ChatEngineUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Chatengine> {
    return this._client.put(`/api/v1/admin/chat-engines/${chatEngineId}`, { body, ...options });
  }

  /**
   * List Chat Engines
   */
  list(query?: ChatEngineListParams, options?: Core.RequestOptions): Core.APIPromise<PageChatengine>;
  list(options?: Core.RequestOptions): Core.APIPromise<PageChatengine>;
  list(
    query: ChatEngineListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PageChatengine> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/api/v1/admin/chat-engines', { query, ...options });
  }

  /**
   * Delete Chat Engine
   */
  delete(chatEngineId: number, options?: Core.RequestOptions): Core.APIPromise<Chatengine> {
    return this._client.delete(`/api/v1/admin/chat-engines/${chatEngineId}`, options);
  }
}

export interface Chatengine {
  fast_llm_id: number | null;

  llm_id: number | null;

  name: string;

  id?: number | null;

  created_at?: string | null;

  deleted_at?: string | null;

  engine_options?: unknown;

  is_default?: boolean;

  updated_at?: string | null;
}

export interface PageChatengine {
  items: Array<Chatengine>;

  page: number | null;

  size: number | null;

  total: number | null;

  pages?: number | null;
}

export interface ChatEngineCreateParams {
  fast_llm_id: number | null;

  llm_id: number | null;

  name: string;

  id?: number | null;

  created_at?: string | null;

  deleted_at?: string | null;

  engine_options?: unknown;

  is_default?: boolean;

  updated_at?: string | null;
}

export interface ChatEngineUpdateParams {
  engine_options?: unknown | null;

  fast_llm_id?: number | null;

  is_default?: boolean | null;

  llm_id?: number | null;

  name?: string | null;
}

export interface ChatEngineListParams {
  page?: number;

  size?: number;
}

export namespace ChatEngines {
  export import Chatengine = ChatEnginesAPI.Chatengine;
  export import PageChatengine = ChatEnginesAPI.PageChatengine;
  export import ChatEngineCreateParams = ChatEnginesAPI.ChatEngineCreateParams;
  export import ChatEngineUpdateParams = ChatEnginesAPI.ChatEngineUpdateParams;
  export import ChatEngineListParams = ChatEnginesAPI.ChatEngineListParams;
}
