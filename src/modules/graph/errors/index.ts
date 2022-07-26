import { HttpException } from '@nestjs/common';

export class IataNotProvidedException extends HttpException {
  constructor(message: string) {
    super(message, 400);
  }
}

export class IataNotFoundException extends HttpException {
  constructor(message: string) {
    super(message, 422);
  }
}

export class PathNotFoundException extends HttpException {
  constructor(message: string) {
    super(message, 400);
  }
}

export class PathNotFound extends Error {
  constructor(message: string) {
    super(message);
  }
}
