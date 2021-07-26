import pool from '../lib/utils/pool';
import setup from '../data/setup';

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
});
