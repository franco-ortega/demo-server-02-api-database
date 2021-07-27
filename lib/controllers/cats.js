import Router from 'express';
import Cat from '../models/Cat.js';

export default Router()
  .post('/api/v1/cats', (req, res, next) => {
    Cat
      .insert(req.body)
      .then(cat => res.send(cat))
      .catch(next);
  })
  .get('/api/v1/cats', (req, res, next) => {
    Cat
      .find()
      .then(cats => res.send(cats))
      .catch(next);
  });