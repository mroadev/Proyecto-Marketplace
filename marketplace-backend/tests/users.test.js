const request = require('supertest');
const app = require('../src/app');

describe('Test de rutas', () => {
  test('Debería devolver 200 en /api/test', async () => {
    const response = await request(app).get('/api/test');
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('API funcionando');
  });
});