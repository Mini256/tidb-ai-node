// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Errors from './error';
import * as Uploads from './uploads';
import { type Agent } from './_shims/index';
import * as Core from './core';
import * as API from './resources/index';

export interface ClientOptions {
  /**
   * Defaults to process.env['TIDB_AI_API_KEY'].
   */
  apiKey?: string | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['TIDB_AI_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;
}

/**
 * API Client for interfacing with the Tidb AI API.
 */
export class TidbAI extends Core.APIClient {
  apiKey: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Tidb AI API.
   *
   * @param {string | undefined} [opts.apiKey=process.env['TIDB_AI_API_KEY'] ?? undefined]
   * @param {string} [opts.baseURL=process.env['TIDB_AI_BASE_URL'] ?? https://localhost:8080/test-api] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('TIDB_AI_BASE_URL'),
    apiKey = Core.readEnv('TIDB_AI_API_KEY'),
    ...opts
  }: ClientOptions = {}) {
    if (apiKey === undefined) {
      throw new Errors.TidbAIError(
        "The TIDB_AI_API_KEY environment variable is missing or empty; either provide it, or instantiate the TidbAI client with an apiKey option, like new TidbAI({ apiKey: 'My API Key' }).",
      );
    }

    const options: ClientOptions = {
      apiKey,
      ...opts,
      baseURL: baseURL || `https://localhost:8080/test-api`,
    };

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.apiKey = apiKey;
  }

  healthz: API.Healthz = new API.Healthz(this);
  siteConfigs: API.SiteConfigs = new API.SiteConfigs(this);
  chats: API.Chats = new API.Chats(this);
  chatMessages: API.ChatMessages = new API.ChatMessages(this);
  users: API.Users = new API.Users(this);
  apiKeys: API.APIKeys = new API.APIKeys(this);
  admin: API.Admin = new API.Admin(this);
  auth: API.Auth = new API.Auth(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return { session: this.apiKey };
  }

  static TidbAI = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static TidbAIError = Errors.TidbAIError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

export const {
  TidbAIError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} = Errors;

export import toFile = Uploads.toFile;
export import fileFromPath = Uploads.fileFromPath;

export namespace TidbAI {
  export import RequestOptions = Core.RequestOptions;

  export import Healthz = API.Healthz;
  export import HealthzRetrieveResponse = API.HealthzRetrieveResponse;

  export import SiteConfigs = API.SiteConfigs;
  export import SiteConfigListResponse = API.SiteConfigListResponse;

  export import Chats = API.Chats;
  export import PageChat = API.PageChat;
  export import ChatCreateResponse = API.ChatCreateResponse;
  export import ChatRetrieveResponse = API.ChatRetrieveResponse;
  export import ChatDeleteResponse = API.ChatDeleteResponse;
  export import ChatCreateParams = API.ChatCreateParams;
  export import ChatListParams = API.ChatListParams;

  export import ChatMessages = API.ChatMessages;

  export import Users = API.Users;

  export import APIKeys = API.APIKeys;

  export import Admin = API.Admin;

  export import Auth = API.Auth;
  export import AuthLoginResponse = API.AuthLoginResponse;
  export import AuthLogoutResponse = API.AuthLogoutResponse;
  export import AuthLoginParams = API.AuthLoginParams;
}

export default TidbAI;
