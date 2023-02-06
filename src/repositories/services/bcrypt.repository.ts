/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@nestjs/common';

import * as bcrypt from 'bcrypt';
@Injectable()
export class BcryptRepositoryService {
  constructor() {}

  async checkPlayerPassword(
    password: string,
    userPassword: string,
  ): Promise<boolean> {
    return await bcrypt.compare(password, userPassword);
  }
}
