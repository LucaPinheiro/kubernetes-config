import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getHelloK8s(): string {
    return 'Hello Kubernetes!';
  }
  getAppEnv(): string {
    return process.env.APP || 'APP not defined';
  }
}
