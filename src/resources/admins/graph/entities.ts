// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as EntitiesAPI from './entities';

export class Entities extends APIResource {}

export interface EntityPublic {
  id: number;

  description: string;

  name: string;

  entity_type?: 'original' | 'synopsis';

  meta?: Array<unknown> | unknown;

  synopsis_info?: Array<unknown> | unknown | null;
}

export namespace Entities {
  export import EntityPublic = EntitiesAPI.EntityPublic;
}
