import { Controller, Get } from '@nestjs/common';
import * as fs from 'fs';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    const filePath = 'config.json';
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, { encoding: 'utf8' });
      return JSON.parse(data);
    }
    return {};
  }
}
