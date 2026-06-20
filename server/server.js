import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  res.json({
    project: 'ProductAuthentication',
    message: 'Hello World'
  });
});

app.listen(port, () => {
  console.log(`ProductAuthentication server running on port ${port}`);
});
