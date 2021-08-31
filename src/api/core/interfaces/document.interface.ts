export interface SwaggerDoc {
  readonly openapi: string;
  info?: InfoDoc;
  externalDocs?: ExternalDoc;
  servers?: ServerDoc[];
  tags?: TagDoc[];
  paths?: any;
  components?: any;
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
