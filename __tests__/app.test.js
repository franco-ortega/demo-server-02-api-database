import request from 'supertest';
import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import app from '../lib/app.js';
import Cat from '../lib/models/Cat.js';

describe('demo tests', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(done => {
    return pool.end(done);
  });

  test('sample test', () => {
    expect(true).toBe(true);
  });

  it('creates a cat via POST', async() => {
    const response = await request(app)
      .post('/api/v1/cats')
      .send(
        {
          catName: 'Fluffy',
          breed: 'Himalayan',
          furColor: 'white',
          age: 5
        }
      );

    expect(response.body).toEqual(
      {
        id: 1,
        catName: 'Fluffy',
        breed: 'Himalayan',
        furColor: 'white',
        age: 5
      }
    );
  });

  it('retrieves all cats via GET', async() => {
    const catOne = await Cat.insert(
      {
        catName: 'Po',
        breed: 'Scottish Fold',
        furColor: 'grey',
        age: 4
      }
    );

    const catTwo = await Cat.insert(
      {
        catName: 'Rylo',
        breed: 'Manx',
        furColor: 'grey',
        age: 10
      }
    );

    const response = await request(app)
      .get('/api/v1/cats');

    expect(response.body).toEqual([catOne, catTwo]);
  });

});
