import { DocumentBuilder } from '../../../lib/api/core/document';

export default (app) => {
  const document = new DocumentBuilder()
    .setInfo({
      title: 'Express application',
      version: '1.0',
      // Below fields are optional
      description: 'Description',
      termsOfService: 'http://swagger.io/terms/',
      contact: {
        name: 'Phu',
        email: 'test@gmail.com',
      },
      license: {
        name: 'Apache 2.0',
        url: 'http://www.apache.org/licenses/LICENSE-2.0.html',
      },
    })
    .build();
};
