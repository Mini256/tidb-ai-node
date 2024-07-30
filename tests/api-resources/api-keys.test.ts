// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TidbAI from '@tidb-ai/sdk';
import { Response } from 'node-fetch';

const client = new TidbAI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource apiKeys', () => {
  test('create: only required params', async () => {
    const responsePromise = client.apiKeys.create({ description: 'description' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.apiKeys.create({ description: 'description' });
  });
});
