export interface SwaggerDoc {
  readonly openapi: string;
  info?: InfoDoc;
  externalDocs?: ExternalDoc;
  servers?: ServerDoc[];
  tags?: TagDoc[];
  paths?: any;
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

export interface ComponentDoc {
  schemas: any;
  securitySchemes: {
    [authKey: string]: SecurityDoc | BearerAuthDoc | ApiKeyDoc;
  };
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
