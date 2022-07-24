import { Injectable } from '@nestjs/common';
import { convertDistance, getDistance } from 'geolib';
import { GeolibInputCoordinates } from 'geolib/es/types';

@Injectable()
export class GeolibService {
  getDistanceInKm(
    from: GeolibInputCoordinates,
    to: GeolibInputCoordinates,
  ): number {
    const distance = getDistance(from, to);
    return convertDistance(distance, 'km');
  }
}
