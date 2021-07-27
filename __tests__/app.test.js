import request from 'supertest';
import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import app from '../lib/app.js';

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
});
