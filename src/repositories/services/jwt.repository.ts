import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { sign, verify } from 'jsonwebtoken';

@Injectable()
export class JWTRepositoryService {
  constructor(private config: ConfigService) {}
  signToken(payload: any) {
    return sign(payload, process.env.JWT_SECRET);
  }

  verifyToken(token: any) {
    return verify(token, process.env.JWT_SECRET);
  }
}
