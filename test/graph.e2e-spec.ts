import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('GraphController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('gets result to TLL to HEL', () => {
    const result = {
      totalDistanceInKm: 100.886,
      path: 'TLL -> HEL',
      edges: [{ src: 'TLL', dest: 'HEL', distance: 100.886 }],
    };

    return request(app.getHttpServer())
      .get('/graph?src=TLL&dest=HEL')
      .expect(200)
      .expect(result);
  });

  it('gets result to TLL to HND', () => {
    const result = {
      totalDistanceInKm: 8151.866,
      path: 'TLL -> HEL -> NGO -> HND',
      edges: [
        { src: 'TLL', dest: 'HEL', distance: 100.886 },
        { src: 'HEL', dest: 'NGO', distance: 7769.583 },
        { src: 'NGO', dest: 'HND', distance: 281.397 },
      ],
    };

    return request(app.getHttpServer())
      .get('/graph?src=TLL&dest=HND')
      .expect(200)
      .expect(result);
  });

  it('throws exception to missing queries', () => {
    return request(app.getHttpServer()).get('/graph').expect(400);
  });

  it('throws exception to a missing query', () => {
    return request(app.getHttpServer()).get('/graph?src=TAL').expect(400);
  });

  it('throws exception to an invalid IATA', () => {
    return request(app.getHttpServer())
      .get('/graph?src=TAL&dest=HND')
      .expect(422);
  });
});
