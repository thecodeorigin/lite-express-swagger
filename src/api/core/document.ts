import { OPEN_API_VERSION } from 'src/constants';
import { Validate } from 'src/utils/validate';
import { InfoDoc, SwaggerDoc, TagDoc } from './interfaces/document.interface';

export class DocumentBuilder {
  private document: SwaggerDoc = { openapi: OPEN_API_VERSION };

  public addTags(tags: TagDoc[]): DocumentBuilder {
    tags.forEach((tag: TagDoc) => {
      Validate.assertNotEmpty(
        tag.name,
        'Missing name when define tag in swagger',
      );
      Validate.assertString(tag.name, `Tag: ${tag.name} should be a string`);
    });

    this.document.tags = tags;
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
