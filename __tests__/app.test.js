import request from 'supertest';
import app from '../lib/app';
import pool from '../lib/utils/pool';
import setup from '../data/setup';
// import { it } from '@jest/globals';
import Cat from '../lib/models/Cat';
import { expect } from '@jest/globals';

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
      .post('/cats')
      .send(
        {
          catName: 'Fluffy',
          breed: 'Russian Blue',
          furColor: 'blue',
          age: 5
        }
      );

    expect(response.body).toEqual(
      {
        id: 1,
        catName: 'Fluffy',
        breed: 'Russian Blue',
        furColor: 'blue',
        age: 5
      }
    );
  });
});
