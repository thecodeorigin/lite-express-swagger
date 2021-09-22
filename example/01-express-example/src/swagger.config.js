const { DocumentBuilder } = require('../../../lib/api/core/document');
const { setup, serve } = require("swagger-ui-express");

module.exports = (app) => {
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
    .setBearerAuth()
    .build();

    app.use('/docs', serve, setup(document));
};
