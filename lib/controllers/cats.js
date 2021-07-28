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

//   .post('/api/v1/cats', async (req, res) => {
//     console.log('inside the router');
//     console.log(req.body);
//     try {
//       const cat = await Cat.insert(req.body);
//       console.log('inside the TRY');
//       console.log(cat);
//       res.send(cat);
//     } catch(err) {
//       res.status(500).send({ error: err.message});
//       console.log('inside the CATCH');
//     }
//     console.log('after try catch');
//   });