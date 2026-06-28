import dotenv from 'dotenv';

dotenv.config();

function buildMongoUri() {
  if (process.env.MONGODB_URI) {
    return process.env.MONGODB_URI;
  }

  const {
    MONGODB_USER,
    MONGODB_PASSWORD,
    MONGODB_HOST = 'cluster0.auqwrgb.mongodb.net',
    MONGODB_DB = 'product-authentication',
  } = process.env;

  if (!MONGODB_USER || !MONGODB_PASSWORD) {
    return undefined;
  }

  const encodedUser = encodeURIComponent(MONGODB_USER);
  const encodedPassword = encodeURIComponent(MONGODB_PASSWORD);

  return `mongodb+srv://${encodedUser}:${encodedPassword}@${MONGODB_HOST}/${MONGODB_DB}?appName=Cluster0`;
}

export const config = {
  port: Number(process.env.PORT) || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  mongodb: {
    uri: buildMongoUri(),
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
  },
};
