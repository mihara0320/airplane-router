import { Test, TestingModule } from '@nestjs/testing';
import { GeolibService } from './geolib.service';

describe('GeolibService', () => {
  let service: GeolibService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GeolibService],
    }).compile();

    service = module.get<GeolibService>(GeolibService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
