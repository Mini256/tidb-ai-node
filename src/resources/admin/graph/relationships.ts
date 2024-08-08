// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as RelationshipsAPI from './relationships';

export class Relationships extends APIResource {
  /**
   * Get Relationship
   */
  retrieve(relationshipId: number, options?: Core.RequestOptions): Core.APIPromise<RelationshipPublic> {
    return this._client.get(`/api/v1/admin/graph/relationships/${relationshipId}`, options);
  }

  /**
   * Update Relationship
   */
  update(
    relationshipId: number,
    body: RelationshipUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RelationshipPublic> {
    return this._client.put(`/api/v1/admin/graph/relationships/${relationshipId}`, { body, ...options });
  }
}

export interface RelationshipPublic {
  id: number;

  description: string;

  last_modified_at: string | null;

  source_entity_id: number;

  target_entity_id: number;

  chunk_id?: string | null;

  document_id?: number | null;

  meta?: Array<unknown> | unknown;

  weight?: number;
}

export interface RelationshipUpdateParams {
  description?: string | null;

  meta?: unknown | null;

  weight?: number | null;
}

export namespace Relationships {
  export import RelationshipPublic = RelationshipsAPI.RelationshipPublic;
  export import RelationshipUpdateParams = RelationshipsAPI.RelationshipUpdateParams;
}
