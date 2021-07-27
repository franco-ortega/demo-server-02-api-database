import express from 'express';
const app = express();
import catsController from './controllers/cats.js';

app.use(express.json());

app.get('/welcome', (req, res) => {
  try {
    res.send('Welcome to my server. Please enjoy some tea.');
  } catch(err) {
    res.status(500).json({ error: err.message });
  }
});

app.use(catsController);

export default app;
