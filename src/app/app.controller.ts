import { Controller, Get, Redirect } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  // url = 'https://api.v1'
  constructor(private readonly appService: AppService) {}
  @Get()
  // @Redirect('https://api.nva49', 301)
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('v1')
  findAll(): Promise<String> {
    return;
  }
}
