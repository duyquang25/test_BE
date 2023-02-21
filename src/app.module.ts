import { Module, Scope } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionFilter } from './common/exception/exception.filter';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      scope: Scope.REQUEST,
      useClass: AllExceptionFilter,
    },
  ],
})
export class AppModule {}
