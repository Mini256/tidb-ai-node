// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as ChatsAPI from './chats';

export class Chats extends APIResource {
  /**
   * Chats
   */
  create(body: ChatCreateParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/api/v1/chats', { body, ...options });
  }

  /**
   * Get Chat
   */
  retrieve(chatId: string, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.get(`/api/v1/chats/${chatId}`, options);
  }

  /**
   * List Chats
   */
  list(query?: ChatListParams, options?: Core.RequestOptions): Core.APIPromise<PageChat>;
  list(options?: Core.RequestOptions): Core.APIPromise<PageChat>;
  list(
    query: ChatListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PageChat> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/api/v1/chats', { query, ...options });
  }

  /**
   * Delete Chat
   */
  delete(chatId: string, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.delete(`/api/v1/chats/${chatId}`, options);
  }
}

export interface PageChat {
  items: Array<PageChat.Item>;

  page: number | null;

  size: number | null;

  total: number | null;

  pages?: number | null;
}

export namespace PageChat {
  export interface Item {
    engine_id: number;

    title: string;

    user_id: string;

    id?: string;

    created_at?: string | null;

    deleted_at?: string | null;

    engine_options?: unknown | string;

    updated_at?: string | null;
  }
}

export type ChatCreateResponse = unknown;

export type ChatRetrieveResponse = unknown;

export type ChatDeleteResponse = unknown;

export interface ChatCreateParams {
  messages: Array<ChatCreateParams.Message>;

  chat_engine?: string;

  chat_id?: string | null;

  stream?: boolean;
}

export namespace ChatCreateParams {
  export interface Message {
    additional_kwargs?: unknown;

    content?: string;

    role?: 'system' | 'user' | 'assistant';
  }
}

export interface ChatListParams {
  page?: number;

  size?: number;
}

export namespace Chats {
  export import PageChat = ChatsAPI.PageChat;
  export import ChatCreateResponse = ChatsAPI.ChatCreateResponse;
  export import ChatRetrieveResponse = ChatsAPI.ChatRetrieveResponse;
  export import ChatDeleteResponse = ChatsAPI.ChatDeleteResponse;
  export import ChatCreateParams = ChatsAPI.ChatCreateParams;
  export import ChatListParams = ChatsAPI.ChatListParams;
}
