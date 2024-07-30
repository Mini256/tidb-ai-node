// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TidbAI from '@tidb-ai/client';
import { Response } from 'node-fetch';

const client = new TidbAI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource datasources', () => {
  test('create: only required params', async () => {
    const responsePromise = client.admin.datasources.create({
      config: {},
      data_source_type: 'file',
      description: 'description',
      name: 'name',
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
    const response = await client.admin.datasources.create({
      config: {},
      data_source_type: 'file',
      description: 'description',
      name: 'name',
      build_kg_index: true,
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.admin.datasources.retrieve(0);
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
    await expect(client.admin.datasources.retrieve(0, { path: '/_stainless_unknown_path' })).rejects.toThrow(
      TidbAI.NotFoundError,
    );
  });

  test('list', async () => {
    const responsePromise = client.admin.datasources.list();
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
    await expect(client.admin.datasources.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      TidbAI.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.admin.datasources.list({ page: 1, size: 1 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(TidbAI.NotFoundError);
  });

  test('overview', async () => {
    const responsePromise = client.admin.datasources.overview(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('overview: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.admin.datasources.overview(0, { path: '/_stainless_unknown_path' })).rejects.toThrow(
      TidbAI.NotFoundError,
    );
  });
});
