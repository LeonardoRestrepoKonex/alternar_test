import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { sign, verify } from 'jsonwebtoken';
import CoreConfig from '../../config/types/core';

@Injectable()
export class JWTRepositoryService {
  constructor(private config: ConfigService) {}
  CORE = this.config.get<CoreConfig>('core');
  signToken(payload: any) {
    return sign(payload, this.CORE.jwt.secret);
  }

  verifyToken(token: any) {
    return verify(token, this.CORE.jwt.secret);
  }
}
