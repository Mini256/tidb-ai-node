// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as DatasourcesAPI from './datasources';
import * as LlmOptionsAPI from './llm-options';
import * as LlmsAPI from './llms';
import * as UploadsAPI from './uploads';
import * as GraphAPI from './graph/graph';

export class Admin extends APIResource {
  graph: GraphAPI.Graph = new GraphAPI.Graph(this._client);
  uploads: UploadsAPI.Uploads = new UploadsAPI.Uploads(this._client);
  datasources: DatasourcesAPI.Datasources = new DatasourcesAPI.Datasources(this._client);
  llmOptions: LlmOptionsAPI.LlmOptions = new LlmOptionsAPI.LlmOptions(this._client);
  llms: LlmsAPI.Llms = new LlmsAPI.Llms(this._client);
}

export namespace Admin {
  export import Graph = GraphAPI.Graph;
  export import GraphSearchResponse = GraphAPI.GraphSearchResponse;
  export import GraphSearchParams = GraphAPI.GraphSearchParams;
  export import Uploads = UploadsAPI.Uploads;
  export import UploadCreateResponse = UploadsAPI.UploadCreateResponse;
  export import UploadCreateParams = UploadsAPI.UploadCreateParams;
  export import Datasources = DatasourcesAPI.Datasources;
  export import DatasourceOverviewResponse = DatasourcesAPI.DatasourceOverviewResponse;
  export import DatasourceCreateParams = DatasourcesAPI.DatasourceCreateParams;
  export import DatasourceListParams = DatasourcesAPI.DatasourceListParams;
  export import LlmOptions = LlmOptionsAPI.LlmOptions;
  export import LlmOptionListResponse = LlmOptionsAPI.LlmOptionListResponse;
  export import Llms = LlmsAPI.Llms;
  export import LlmCreateParams = LlmsAPI.LlmCreateParams;
  export import LlmListParams = LlmsAPI.LlmListParams;
  export import LlmTestParams = LlmsAPI.LlmTestParams;
}
