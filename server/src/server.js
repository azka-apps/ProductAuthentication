import { createApp } from './app.js';
import { config } from './config/index.js';
import { connectDatabase } from './config/database.js';
import { seedDemoUsers } from './config/seed.js';

async function bootstrap() {
  await connectDatabase();
  await seedDemoUsers();

  const app = createApp();

  app.listen(config.port, () => {
    console.log(`ProductAuthentication server running on port ${config.port}`);
  });
}

bootstrap().catch(error => {
  console.error('Failed to start server:', error);
  process.exit(1);
});
