// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TidbAI from '@tidb-ai/sdk';
import { Response } from 'node-fetch';

const client = new TidbAI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource llmOptions', () => {
  test('list', async () => {
    const responsePromise = client.admin.llmOptions.list();
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
    await expect(client.admin.llmOptions.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      TidbAI.NotFoundError,
    );
  });
});
