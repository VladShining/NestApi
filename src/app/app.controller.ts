import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/main')
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get('route')
  getHello(): string {
    return this.appService.getHello();
  }
}