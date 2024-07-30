// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as EntitiesAPI from './entities';
import * as GraphEntitiesAPI from '../../admins/graph/entities';

export class Entities extends APIResource {
  /**
   * Get Entity
   */
  retrieve(entityId: number, options?: Core.RequestOptions): Core.APIPromise<GraphEntitiesAPI.EntityPublic> {
    return this._client.get(`/api/v1/admin/graph/entities/${entityId}`, options);
  }

  /**
   * Update Entity
   */
  update(
    entityId: number,
    body: EntityUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GraphEntitiesAPI.EntityPublic> {
    return this._client.put(`/api/v1/admin/graph/entities/${entityId}`, { body, ...options });
  }

  /**
   * Search Similar Entities
   */
  search(query: EntitySearchParams, options?: Core.RequestOptions): Core.APIPromise<EntitySearchResponse> {
    return this._client.get('/api/v1/admin/graph/entities/search', { query, ...options });
  }

  /**
   * Get Entity Subgraph
   */
  subgraph(entityId: number, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.get(`/api/v1/admin/graph/entities/${entityId}/subgraph`, options);
  }

  /**
   * Create Synopsis Entity
   */
  synopsis(
    body: EntitySynopsisParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GraphEntitiesAPI.EntityPublic> {
    return this._client.post('/api/v1/admin/graph/entities/synopsis', { body, ...options });
  }
}

export type EntitySearchResponse = Array<GraphEntitiesAPI.EntityPublic>;

export type EntitySubgraphResponse = unknown;

export interface EntityUpdateParams {
  description?: string | null;

  meta?: unknown | null;

  name?: string | null;
}

export interface EntitySearchParams {
  query: string;

  top_k?: number;
}

export interface EntitySynopsisParams {
  description: string;

  entities: Array<number>;

  meta: unknown;

  name: string;

  topic: string;
}

export namespace Entities {
  export import EntitySearchResponse = EntitiesAPI.EntitySearchResponse;
  export import EntitySubgraphResponse = EntitiesAPI.EntitySubgraphResponse;
  export import EntityUpdateParams = EntitiesAPI.EntityUpdateParams;
  export import EntitySearchParams = EntitiesAPI.EntitySearchParams;
  export import EntitySynopsisParams = EntitiesAPI.EntitySynopsisParams;
}
