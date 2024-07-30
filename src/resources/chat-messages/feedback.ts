// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as FeedbackAPI from './feedback';

export class Feedback extends APIResource {
  /**
   * Feedback
   */
  create(
    chatMessageId: number,
    body: FeedbackCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    return this._client.post(`/api/v1/chat-messages/${chatMessageId}/feedback`, { body, ...options });
  }
}

export type FeedbackCreateResponse = unknown;

export interface FeedbackCreateParams {
  comment: string;

  feedback_type: 'like' | 'dislike';
}

export namespace Feedback {
  export import FeedbackCreateResponse = FeedbackAPI.FeedbackCreateResponse;
  export import FeedbackCreateParams = FeedbackAPI.FeedbackCreateParams;
}
