import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import * as fs from 'fs';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  @Cron('* * * * *')
  handleCron() {
    const filePath = 'config.json';
    if (!fs.existsSync(filePath)) {
      const config = { counter: 0 };
      fs.writeFileSync(filePath, JSON.stringify(config));
    }
    const configData = fs.readFileSync(filePath, { encoding: 'utf8' });
    const config = JSON.parse(configData);
    config.counter = config.counter + 1;
    fs.writeFileSync(filePath, JSON.stringify(config));
  }
}
