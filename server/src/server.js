import { createApp } from './app.js';
import { config } from './config/index.js';
import { connectDatabase } from './config/database.js';

async function bootstrap() {
  await connectDatabase();

  const app = createApp();

  app.listen(config.port, () => {
    console.log(`ProductAuthentication server running on port ${config.port}`);
  });
}

bootstrap().catch(error => {
  console.error('Failed to start server:', error);
  process.exit(1);
});
