import { Injectable } from '@nestjs/common';
import { createWriteStream } from 'fs';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('ConfigMap: ', process.env.APP);
    console.log('API_KEY: ', process.env.API_KEY);
    return 'Hello World!';
  }
  getHelloK8s(): string {
    const file = createWriteStream('rocketseat.txt');
    for (let i = 0; i < 10000; i++) {
      file.write(`Hello Kubernetes! ${i}\n`);
    }
    file.end();
    return 'Hello Kubernetes!';
  }
  getAppEnv(): string {
    return process.env.APP || 'APP not defined';
  }
}
