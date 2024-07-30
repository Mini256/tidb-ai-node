// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TidbAI, { toFile } from '@tidb-ai/client';
import { Response } from 'node-fetch';

const client = new TidbAI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource uploads', () => {
  test('create: only required params', async () => {
    const responsePromise = client.admin.uploads.create({
      files: [
        await toFile(Buffer.from('# my file contents'), 'README.md'),
        await toFile(Buffer.from('# my file contents'), 'README.md'),
        await toFile(Buffer.from('# my file contents'), 'README.md'),
      ],
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
    const response = await client.admin.uploads.create({
      files: [
        await toFile(Buffer.from('# my file contents'), 'README.md'),
        await toFile(Buffer.from('# my file contents'), 'README.md'),
        await toFile(Buffer.from('# my file contents'), 'README.md'),
      ],
    });
  });
});
