// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TidbAI from '@tidb-ai/client';
import { Response } from 'node-fetch';

const client = new TidbAI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource graph', () => {
  test('search: only required params', async () => {
    const responsePromise = client.admin.graph.search({ query: 'query' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('search: required and optional params', async () => {
    const response = await client.admin.graph.search({
      query: 'query',
      depth: 0,
      include_meta: true,
      with_degree: true,
    });
  });
});
