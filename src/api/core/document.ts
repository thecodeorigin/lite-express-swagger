import { OPEN_API_VERSION, SECURITY_KEY } from '../../constants';
import { Validate } from '../../utils/validate';
import {
  ApiKeyDoc,
  BearerAuthDoc,
  ExternalDoc,
  InfoDoc,
  OAth2Doc,
  ServerDoc,
  SwaggerDoc,
} from './interfaces/document.interface';

export class DocumentBuilder {
  private document: SwaggerDoc = {
    openapi: OPEN_API_VERSION,
    components: {
      schemas: {},
      securitySchemes: {},
      responses: {},
    },
    paths: {},
  };

  public setExternalDocs(externalDoc: ExternalDoc): DocumentBuilder {
    this.document.externalDocs = externalDoc;
    return this;
  }

  public setServers(...servers: ServerDoc[]) {
    servers.forEach((server: ServerDoc) => {
      Validate.assertString(server.url, 'url must be declared in server');
    });

    this.document.servers = servers;
    return this;
  }

  public setInfo(info: InfoDoc): DocumentBuilder {
    if (!info.title || !info.version) {
      throw new Error('Title or version of swagger should be declared');
    }

    Validate.assertString(info.title, 'title should be a string');
    Validate.assertString(info.version, 'version should be a string');

    this.document.info = info;

    return this;
  }

  public setBearerAuth() {
    this.document.components.securitySchemes[SECURITY_KEY.BEARER_KEY] = {
      type: 'http',
      bearerFormat: 'JWT',
      scheme: 'bearer',
    } as BearerAuthDoc;

    return DocumentBuilder;
  }

  public setApiKey() {
    this.document.components.securitySchemes[SECURITY_KEY.API_KEY] = {
      type: 'apiKey',
      name: 'api_key',
      in: 'header',
    } as ApiKeyDoc;
    return DocumentBuilder;
  }

  public setOauth2(key: string, oauth2Flow: OAth2Doc) {
    this.document.components.securitySchemes[key] = oauth2Flow;
    return DocumentBuilder;
  }

  public build(): SwaggerDoc {
    return this.document;
  }
}
