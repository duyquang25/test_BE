import { Body, Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { CommonCode } from './common/constants';
import { ApiSuccessResponse } from './common/response/api-success';
import { GetBusDto } from './get-bus.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }

  @Get('/test')
  handle(@Query() query: GetBusDto) {
    try {
      const response = this.appService.handle(query);
      return new ApiSuccessResponse().success(response, CommonCode.DEFAULT_SUCCESS_MESSAGE);
    } catch (error) {
      throw error;
    }
  }
}
