// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as FeedbackAPI from './feedback';
import * as SubgraphAPI from './subgraph';

export class ChatMessages extends APIResource {
  subgraph: SubgraphAPI.Subgraph = new SubgraphAPI.Subgraph(this._client);
  feedback: FeedbackAPI.Feedback = new FeedbackAPI.Feedback(this._client);
}

export namespace ChatMessages {
  export import Subgraph = SubgraphAPI.Subgraph;
  export import SubgraphResponse = SubgraphAPI.SubgraphResponse;
  export import Feedback = FeedbackAPI.Feedback;
  export import FeedbackCreateResponse = FeedbackAPI.FeedbackCreateResponse;
  export import FeedbackCreateParams = FeedbackAPI.FeedbackCreateParams;
}
