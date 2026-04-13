import { Controller, Get } from '@nestjs/common';
import { healthService } from './health.service';

@Controller()
export class HealthController {
  constructor(private readonly healthService: healthService) {}

  @Get()
  getHello(): string {
    return this.healthService.getHello();
  }
  @Get('/check-ok')
  health(): string {
    return this.healthService.getHelloK8s();
  }
}
