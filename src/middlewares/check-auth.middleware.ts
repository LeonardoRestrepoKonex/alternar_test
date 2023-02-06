import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  NestMiddleware,
} from "@nestjs/common";
import { REQUEST } from "@nestjs/core";
import { Request, Response, NextFunction } from "express";
import { Session } from "../entities/index.entity";
// import {
// ComponentRepositoryService,
// SessionRepositoryService,
// } from "../repositories/services";

@Injectable()
export class CheckAuthMiddleware implements NestMiddleware {
  constructor(
    // private componentRepositoryService: ComponentRepositoryService,
    // private sessionRepositoryService: SessionRepositoryService,
    @Inject(REQUEST) private request: Request
  ) {}
  async use(req: Request, res: Response, next: NextFunction) {
    const {
      headers: { authorization },
    } = req;

    let token: string;
    let bearerToken: string[];
    let session: Session;
    let permissions: string[];

    if (!authorization) {
      throw new HttpException("Forbidden", HttpStatus.UNAUTHORIZED);
    }
    bearerToken = authorization.split(" ");
    if (bearerToken.length != 2) {
      throw new HttpException("Forbidden", HttpStatus.UNAUTHORIZED);
    }
    token = bearerToken[1];
    if (!token) {
      throw new HttpException("Forbidden", HttpStatus.UNAUTHORIZED);
    }
    // session = await this.sessionRepositoryService.findSessionByToken(token);

    if (!session) {
      throw new HttpException("Forbidden", HttpStatus.UNAUTHORIZED);
    }
    if (!session.user) {
      throw new HttpException("Forbidden", HttpStatus.UNAUTHORIZED);
    }
    // permissions = await this.componentRepositoryService.GetPermissionsByUser(
    //   session.user
    // );
    this.request["user"] = session.user;
    this.request["user"]["permissions"] = permissions;
    next();
  }
}
