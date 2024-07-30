// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as UploadsAPI from './uploads';

export class Uploads extends APIResource {}

export interface Upload {
  name: string;

  path: string;

  user_id: string;

  id?: number | null;

  created_at?: string | null;

  mime_type?: string;

  size?: number;

  updated_at?: string | null;
}

export namespace Uploads {
  export import Upload = UploadsAPI.Upload;
}
