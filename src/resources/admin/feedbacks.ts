// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as FeedbacksAPI from './feedbacks';

export class Feedbacks extends APIResource {
  /**
   * List Feedbacks
   */
  list(query?: FeedbackListParams, options?: Core.RequestOptions): Core.APIPromise<PageAdminFeedbackPublic>;
  list(options?: Core.RequestOptions): Core.APIPromise<PageAdminFeedbackPublic>;
  list(
    query: FeedbackListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PageAdminFeedbackPublic> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/api/v1/admin/feedbacks', { query, ...options });
  }
}

export interface PageAdminFeedbackPublic {
  items: Array<PageAdminFeedbackPublic.Item>;

  page: number | null;

  size: number | null;

  total: number | null;

  pages?: number | null;
}

export namespace PageAdminFeedbackPublic {
  export interface Item {
    id: number;

    chat_id: string;

    chat_message_content: string;

    chat_message_id: number;

    chat_title: string;

    user_email: string | null;

    user_id: string | null;

    comment?: string;

    created_at?: string | null;

    feedback_type?: 'like' | 'dislike';

    updated_at?: string | null;
  }
}

export interface FeedbackListParams {
  page?: number;

  size?: number;
}

export namespace Feedbacks {
  export import PageAdminFeedbackPublic = FeedbacksAPI.PageAdminFeedbackPublic;
  export import FeedbackListParams = FeedbacksAPI.FeedbackListParams;
}
