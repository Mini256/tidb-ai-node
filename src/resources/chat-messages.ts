// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as ChatMessagesAPI from './chat-messages';

export class ChatMessages extends APIResource {
  /**
   * Feedback
   */
  feedback(
    chatMessageId: number,
    body: ChatMessageFeedbackParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    return this._client.post(`/api/v1/chat-messages/${chatMessageId}/feedback`, { body, ...options });
  }

  /**
   * Get Chat Subgraph
   */
  subgraph(chatMessageId: number, options?: Core.RequestOptions): Core.APIPromise<SubgraphResponse> {
    return this._client.get(`/api/v1/chat-messages/${chatMessageId}/subgraph`, options);
  }
}

export interface SubgraphResponse {
  entities: Array<unknown>;

  relationships: Array<unknown>;
}

export type ChatMessageFeedbackResponse = unknown;

export interface ChatMessageFeedbackParams {
  comment: string;

  feedback_type: 'like' | 'dislike';
}

export namespace ChatMessages {
  export import SubgraphResponse = ChatMessagesAPI.SubgraphResponse;
  export import ChatMessageFeedbackResponse = ChatMessagesAPI.ChatMessageFeedbackResponse;
  export import ChatMessageFeedbackParams = ChatMessagesAPI.ChatMessageFeedbackParams;
}
