// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as UploadsAPI from './uploads';

export class Uploads extends APIResource {
  /**
   * Upload Files
   */
  create(body: UploadCreateParams, options?: Core.RequestOptions): Core.APIPromise<UploadCreateResponse> {
    return this._client.post('/api/v1/admin/uploads', Core.multipartFormRequestOptions({ body, ...options }));
  }
}

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

export type UploadCreateResponse = Array<Upload>;

export interface UploadCreateParams {
  files: Array<Core.Uploadable>;
}

export namespace Uploads {
  export import Upload = UploadsAPI.Upload;
  export import UploadCreateResponse = UploadsAPI.UploadCreateResponse;
  export import UploadCreateParams = UploadsAPI.UploadCreateParams;
}
