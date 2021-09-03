import { SchemaDoc } from './schema-doc';

export interface SwaggerDoc {
  readonly openapi: string;
  info?: InfoDoc;
  externalDocs?: ExternalDoc;
  servers?: ServerDoc[];
  tags?: TagDoc[];
  paths?: PathDoc;
  components?: ComponentDoc;
}

export interface TagDoc {
  name: string;
  description?: string;
  externalDocs?: ExternalDoc;
}

export interface ServerDoc {
  url: string;
  description?: string;
  variables: {
    env?: {
      default?: string;
      description?: string;
    };
    port?: {
      enum?: string[];
      default?: string;
    };
    basePath: {
      default?: string;
    };
  };
}

export interface InfoDoc {
  version: string;
  title: string;
  description?: string;
  termsOfService?: string;
  contact?: {
    name: string;
    email: string;
  };
  license?: {
    name: string;
    url: string;
  };
}

export interface ExternalDoc {
  description?: string;
  url?: string;
}

// Component document
export interface ComponentDoc {
  schemas: Record<string, SchemaDoc> | RefDoc;
  securitySchemes:
    | Record<string, SecurityDoc | BearerAuthDoc | ApiKeyDoc>
    | RefDoc;
  responses: Record<string, ResponseDoc> | RefDoc;
  parameters: Record<string, ParameterDoc> | RefDoc;
  examples: any | RefDoc;
  requestBodies: any | RefDoc;
  headers: any | RefDoc;
  links: any | RefDoc;
  callbacks: any | RefDoc;
}

export interface RefDoc {
  $ref: string;
}

export interface ResponseDoc {
  description?: string;
  headers?: Record<string, any> | RefDoc;
  content?: Record<string, any>;
  links?: Record<string, any> | RefDoc;
}

export type PathLocation = 'query' | 'header' | 'path' | 'cookie';
export interface ParameterDoc {
  name: string;
  in: PathLocation;
  description?: string;
  required?: boolean;
  deprecated?: string;
  allowEmptyValue?: boolean;
}

/**
 * Attach link: https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.1.md#securityRequirementObject
 */
export interface SecurityDoc {
  type?: string;
  description?: string;
  name?: string;
  in?: string;
  flows?: OAuthFlows;
  openIdConnectUrl?: any;
  scheme?: string;
  bearerFormat?: string;
}

export interface OAuthFlows {
  implicit: OAuthFlow;
  password: OAuthFlow;
  clientCredentials: OAuthFlow;
  authorizationCode: OAuthFlow;
}

export interface OAuthFlow {
  authorizationUrl: string;
  tokenUrl: string;
  refreshUrl: string;
  scopes: Record<string, string>;
}

export type BearerAuthDoc = {
  type: 'http';
  scheme: 'bearer';
  bearerFormat: 'JWT';
};

export type ApiKeyDoc = {
  type: 'apiKey';
  name: 'api_key';
  in: 'header';
};

export type HttpMethod = 'get' | 'post' | 'put' | 'delete' | 'patch';

export interface PathDoc {
  [path: string]: HttpMethod;
}

export interface OperationDoc {
  tags: string[];
  summary: string;
  description: string;
  externalDocs: ExternalDoc;
  operationId: string;
  parameters: ParameterDoc[];
  requestBody: any;
  responses: Record<string, ResponseDoc>;
  callbacks: any;
  deprecated: boolean;
  security: SecurityDoc[];
  servers: ServerDoc;
}
