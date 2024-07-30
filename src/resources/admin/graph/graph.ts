// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as GraphAPI from './graph';
import * as EntitiesAPI from './entities';
import * as RelationshipsAPI from './relationships';

export class Graph extends APIResource {
  entities: EntitiesAPI.Entities = new EntitiesAPI.Entities(this._client);
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  /**
   * Search Graph
   */
  search(body: GraphSearchParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/api/v1/admin/graph/search', { body, ...options });
  }
}

export type GraphSearchResponse = unknown;

export interface GraphSearchParams {
  query: string;

  depth?: number;

  include_meta?: boolean;

  with_degree?: boolean;
}

export namespace Graph {
  export import GraphSearchResponse = GraphAPI.GraphSearchResponse;
  export import GraphSearchParams = GraphAPI.GraphSearchParams;
  export import Entities = EntitiesAPI.Entities;
  export import EntitySearchResponse = EntitiesAPI.EntitySearchResponse;
  export import EntitySubgraphResponse = EntitiesAPI.EntitySubgraphResponse;
  export import EntityUpdateParams = EntitiesAPI.EntityUpdateParams;
  export import EntitySearchParams = EntitiesAPI.EntitySearchParams;
  export import EntitySynopsisParams = EntitiesAPI.EntitySynopsisParams;
  export import Relationships = RelationshipsAPI.Relationships;
  export import RelationshipUpdateParams = RelationshipsAPI.RelationshipUpdateParams;
}
