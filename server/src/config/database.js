import mongoose from 'mongoose';

import { config } from './index.js';

export async function connectDatabase() {
  if (!config.mongodb.uri) {
    throw new Error(
      'MongoDB is not configured. Set MONGODB_USER, MONGODB_PASSWORD, MONGODB_HOST, and MONGODB_DB in server/.env',
    );
  }

  await mongoose.connect(config.mongodb.uri);
  console.log('[database] connected');
}
