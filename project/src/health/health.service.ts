import { Injectable } from '@nestjs/common';
import { createWriteStream } from 'fs';

@Injectable()
export class healthService {
  getHello(): string {
    console.log('ConfigMap: ', process.env.health);
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
  gethealthEnv(): string {
    return process.env.app || 'health not defined';
  }
}
