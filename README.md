# Lite Express Swagger

## Description
---
Lite Express Swagger is a package built by typescript and an open-source project that helps expressjs application to easily build swagger
documentation.\
This package provides flexibility and lite functionality to build swagger document and not using the raw json
to build it.

## Getting started
---
Firstly you need to initialize your documentation by defining in this way:
```javascript
const document = new DocumentBuilder()
    .setInfo({
        title: 'Express application',
        version: '1.0',
        // Below fields are optional
        description: 'Description';
        termsOfService: 'http://swagger.io/terms/';
        contact: {
            name: 'Phu';
            email: 'test@gmail.com';
        };
        license: {
            name: 'Apache 2.0';
            url: 'http://www.apache.org/licenses/LICENSE-2.0.html';
        };
    })
```