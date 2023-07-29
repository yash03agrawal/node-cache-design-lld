import request from 'supertest';
import app from '../src/app';

let server;

const serverStart = () => {
  server = app.listen(3000, () => {
    console.log('server started...');
  });
};

const serverStop = () => {
  server.close();
};

describe('testing routes', () => {
  beforeAll(async () => {
    serverStart();
  });

  afterAll(() => {
    serverStop();
  });

  test('testing PUT call', async () => {
    const response = await request(app).put('/cache-service/value').send({
      key: 1,
      value: 1
    });
    expect(response.statusCode).toBe(200);
    expect(response.text).toEqual(
      JSON.stringify({
        message: 'success'
      })
    );
  });

  test('testing GET call', async () => {
    const response = await request(app).get('/cache-service/value?key=1');
    expect(response.statusCode).toBe(200);
    expect(response.text).toEqual(
      JSON.stringify({
        value: 1,
        message: 'success'
      })
    );
  });
});
