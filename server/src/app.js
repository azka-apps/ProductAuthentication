import cors from 'cors';
import express from 'express';

import { errorHandler } from './middleware/errorHandler.js';
import routes from './routes/index.js';

export function createApp() {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use('/api', routes);
  app.use(errorHandler);

  return app;
}
