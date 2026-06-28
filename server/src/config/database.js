import mongoose from 'mongoose';

import { config } from './index.js';

export async function connectDatabase() {
  if (!config.mongodb.uri) {
    console.warn('[database] MONGODB_URI is not configured — skipping connection');
    return;
  }

  if (config.mongodb.uri.includes('<db_password>')) {
    throw new Error(
      'MONGODB_URI still contains <db_password>. Replace it with your Atlas database user password in server/.env',
    );
  }

  if (process.env.MONGODB_PASSWORD === 'your_password_here') {
    throw new Error(
      'Set MONGODB_PASSWORD to your Atlas database user password in server/.env',
    );
  }

  await mongoose.connect(config.mongodb.uri);
  console.log('[database] connected');
}

export async function disconnectDatabase() {
  if (mongoose.connection.readyState !== 0) {
    await mongoose.disconnect();
    console.log('[database] disconnected');
  }
}
