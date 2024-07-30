// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as SubgraphAPI from './subgraph';

export class Subgraph extends APIResource {
  /**
   * Get Chat Subgraph
   */
  retrieve(chatMessageId: number, options?: Core.RequestOptions): Core.APIPromise<SubgraphResponse> {
    return this._client.get(`/api/v1/chat-messages/${chatMessageId}/subgraph`, options);
  }
}

export interface SubgraphResponse {
  entities: Array<unknown>;

  relationships: Array<unknown>;
}

export namespace Subgraph {
  export import SubgraphResponse = SubgraphAPI.SubgraphResponse;
}
