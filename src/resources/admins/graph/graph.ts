// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as EntitiesAPI from './entities';
import * as RelationshipsAPI from './relationships';

export class Graph extends APIResource {
  entities: EntitiesAPI.Entities = new EntitiesAPI.Entities(this._client);
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);
}

export namespace Graph {
  export import Entities = EntitiesAPI.Entities;
  export import EntityPublic = EntitiesAPI.EntityPublic;
  export import Relationships = RelationshipsAPI.Relationships;
  export import RelationshipPublic = RelationshipsAPI.RelationshipPublic;
}
