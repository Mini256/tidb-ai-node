// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as UploadsAPI from './uploads';
import * as AdminsUploadsAPI from '../admins/uploads';

export class Uploads extends APIResource {
  /**
   * Upload Files
   */
  create(body: UploadCreateParams, options?: Core.RequestOptions): Core.APIPromise<UploadCreateResponse> {
    return this._client.post('/api/v1/admin/uploads', Core.multipartFormRequestOptions({ body, ...options }));
  }
}

export type UploadCreateResponse = Array<AdminsUploadsAPI.Upload>;

export interface UploadCreateParams {
  files: Array<Core.Uploadable>;
}

export namespace Uploads {
  export import UploadCreateResponse = UploadsAPI.UploadCreateResponse;
  export import UploadCreateParams = UploadsAPI.UploadCreateParams;
}
