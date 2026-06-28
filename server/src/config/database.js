import mongoose from 'mongoose';

import { config } from './index.js';

export async function connectDatabase() {
  if (!config.mongodb.uri) {
    console.warn('[database] MONGODB_URI is not configured — skipping connection');
    return;
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
