import { OPEN_API_VERSION } from 'src/constants';
import { Validate } from 'src/utils/validate';
import {
  ExternalDoc,
  InfoDoc,
  ServerDoc,
  SwaggerDoc,
} from './interfaces/document.interface';

export class DocumentBuilder {
  private document: SwaggerDoc = { openapi: OPEN_API_VERSION };

  public setExternalDocs(externalDoc: ExternalDoc): DocumentBuilder {
    this.document.externalDocs = externalDoc;
    return this;
  }

  public setServers(...servers: ServerDoc[]) {
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

  public build(): SwaggerDoc {
    return this.document;
  }
}
