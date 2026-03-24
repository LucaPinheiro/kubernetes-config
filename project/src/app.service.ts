import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('ConfigMap: ', process.env.APP);
    console.log('API_KEY: ', process.env.API_KEY);
    return 'Hello World!';
  }
  getHelloK8s(): string {
    return 'Hello Kubernetes!';
  }
  getAppEnv(): string {
    return process.env.APP || 'APP not defined';
  }
}
