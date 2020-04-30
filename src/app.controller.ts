import { Controller, Get, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Req() req: Request): any {
    return { token: req.csrfToken() };
  }

  @Post()
  postHello(): string {
    return this.appService.getHello();
  }
}
