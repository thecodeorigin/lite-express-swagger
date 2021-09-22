import { setup, serve } from 'swagger-ui-express';
import { Express } from 'express';

export class SwaggerManager {
  static setup(path: string, app: Express) {
    app.use(path, serve, setup());
  }
}
