// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TidbAI from '@tidb-ai/sdk';
import { Response } from 'node-fetch';

const client = new TidbAI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource chatEngines', () => {
  test('create: only required params', async () => {
    const responsePromise = client.admin.chatEngines.create({
      fast_llm_id: 0,
      llm_id: 0,
      name: 'name',
      reranker_id: 0,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.admin.chatEngines.create({
      fast_llm_id: 0,
      llm_id: 0,
      name: 'name',
      reranker_id: 0,
      id: 0,
      created_at: '2019-12-27T18:11:19.117Z',
      deleted_at: '2019-12-27T18:11:19.117Z',
      engine_options: {},
      is_default: true,
      updated_at: '2019-12-27T18:11:19.117Z',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.admin.chatEngines.retrieve(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.admin.chatEngines.retrieve(0, { path: '/_stainless_unknown_path' })).rejects.toThrow(
      TidbAI.NotFoundError,
    );
  });

  test('update', async () => {
    const responsePromise = client.admin.chatEngines.update(0, {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list', async () => {
    const responsePromise = client.admin.chatEngines.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.admin.chatEngines.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      TidbAI.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.admin.chatEngines.list({ page: 1, size: 1 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(TidbAI.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.admin.chatEngines.delete(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.admin.chatEngines.delete(0, { path: '/_stainless_unknown_path' })).rejects.toThrow(
      TidbAI.NotFoundError,
    );
  });
});
