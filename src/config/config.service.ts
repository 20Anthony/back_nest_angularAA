import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { parse } from 'dotenv'; 

@Injectable()
export class ConfigService {
  private readonly envConfig: { [key: string]: string };

  constructor() {
    const isDevelopmentEnv = process.env.NODE_ENV !== 'production';
    const envFilePath = isDevelopmentEnv
      ? __dirname + '/../../.env.development'
      : __dirname + '/../../.env.production'; 

    const existsPath = fs.existsSync(envFilePath);
    if (!existsPath) {
      console.log(
        isDevelopmentEnv
          ? '.env.development no existe (DEVELOPMENT)'
          : '.env.production no existe (PRODUCTION)'
          
      );
      process.exit(0)
    }

   
    this.envConfig = existsPath
      ? parse(fs.readFileSync(envFilePath))
      : {};
  }

  get(key: string): string {
    return this.envConfig[key];
  }
}
