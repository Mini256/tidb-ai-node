// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ChatEnginesAPI from './chat-engines';
import * as DatasourcesAPI from './datasources';
import * as DocumentsAPI from './documents';
import * as FeedbacksAPI from './feedbacks';
import * as LlmOptionsAPI from './llm-options';
import * as LlmsAPI from './llms';
import * as RagAPI from './rag';
import * as SiteSettingsAPI from './site-settings';
import * as UploadsAPI from './uploads';
import * as GraphAPI from './graph/graph';

export class Admins extends APIResource {
  rag: RagAPI.Rag = new RagAPI.Rag(this._client);
  chatEngines: ChatEnginesAPI.ChatEngines = new ChatEnginesAPI.ChatEngines(this._client);
  documents: DocumentsAPI.Documents = new DocumentsAPI.Documents(this._client);
  feedbacks: FeedbacksAPI.Feedbacks = new FeedbacksAPI.Feedbacks(this._client);
  siteSettings: SiteSettingsAPI.SiteSettings = new SiteSettingsAPI.SiteSettings(this._client);
  graph: GraphAPI.Graph = new GraphAPI.Graph(this._client);
  uploads: UploadsAPI.Uploads = new UploadsAPI.Uploads(this._client);
  datasources: DatasourcesAPI.Datasources = new DatasourcesAPI.Datasources(this._client);
  llmOptions: LlmOptionsAPI.LlmOptions = new LlmOptionsAPI.LlmOptions(this._client);
  llms: LlmsAPI.Llms = new LlmsAPI.Llms(this._client);
}

export namespace Admins {
  export import Rag = RagAPI.Rag;
  export import RagIndexProgressResponse = RagAPI.RagIndexProgressResponse;
  export import ChatEngines = ChatEnginesAPI.ChatEngines;
  export import Chatengine = ChatEnginesAPI.Chatengine;
  export import PageChatengine = ChatEnginesAPI.PageChatengine;
  export import ChatEngineCreateParams = ChatEnginesAPI.ChatEngineCreateParams;
  export import ChatEngineUpdateParams = ChatEnginesAPI.ChatEngineUpdateParams;
  export import ChatEngineListParams = ChatEnginesAPI.ChatEngineListParams;
  export import Documents = DocumentsAPI.Documents;
  export import PageDocument = DocumentsAPI.PageDocument;
  export import DocumentListParams = DocumentsAPI.DocumentListParams;
  export import Feedbacks = FeedbacksAPI.Feedbacks;
  export import PageAdminfeedbackpublic = FeedbacksAPI.PageAdminfeedbackpublic;
  export import FeedbackListParams = FeedbacksAPI.FeedbackListParams;
  export import SiteSettings = SiteSettingsAPI.SiteSettings;
  export import SettingValue = SiteSettingsAPI.SettingValue;
  export import SiteSettingListResponse = SiteSettingsAPI.SiteSettingListResponse;
  export import SiteSettingUpdateParams = SiteSettingsAPI.SiteSettingUpdateParams;
  export import Graph = GraphAPI.Graph;
  export import Uploads = UploadsAPI.Uploads;
  export import Upload = UploadsAPI.Upload;
  export import Datasources = DatasourcesAPI.Datasources;
  export import Datasource = DatasourcesAPI.Datasource;
  export import PageDatasource = DatasourcesAPI.PageDatasource;
  export import LlmOptions = LlmOptionsAPI.LlmOptions;
  export import LlmOption = LlmOptionsAPI.LlmOption;
  export import Llms = LlmsAPI.Llms;
  export import AdminLlm = LlmsAPI.AdminLlm;
  export import LlmTestResult = LlmsAPI.LlmTestResult;
  export import PageAdminllm = LlmsAPI.PageAdminllm;
}
