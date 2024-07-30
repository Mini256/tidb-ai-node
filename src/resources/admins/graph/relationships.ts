// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as RelationshipsAPI from './relationships';

export class Relationships extends APIResource {}

export interface RelationshipPublic {
  id: number;

  description: string;

  last_modified_at: string | null;

  source_entity_id: number;

  target_entity_id: number;

  meta?: Array<unknown> | unknown;

  weight?: number;
}

export namespace Relationships {
  export import RelationshipPublic = RelationshipsAPI.RelationshipPublic;
}
