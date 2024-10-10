/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface GetIntegrationResponse {
  code?: string;
}

export const getIntegrationResponseSchema: Schema<GetIntegrationResponse> = object(
  { code: ['code', optional(string())] }
);
