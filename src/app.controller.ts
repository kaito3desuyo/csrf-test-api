import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Req() req: Request, @Res() res: Response): any {
    res.cookie('token', 'jwt-token', { httpOnly: true });
    const token = req.csrfToken();
    res.json(token);
  }

  @Post()
  postHello(): string {
    return this.appService.getHello();
  }
}
