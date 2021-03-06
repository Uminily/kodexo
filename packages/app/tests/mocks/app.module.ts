import { Module } from '@kodexo/common'
import { AuthMiddleware } from './auth.middleware'
import { CarFactory } from './CarFactory'
import { ControllerMiddleware } from './controller.middleware'
import { LogMiddleware } from './log.middleware'
import { ModifyResultInterceptor } from './modify-result.interceptor'
import { RegistrationService } from './RegistrationService'
import { SubModule } from './submodule/sub.module'

@Module({
  routing: {
    '/controls': ['tests/mocks/root-controllers/*.controller.ts']
  },
  imports: [
    CarFactory,
    RegistrationService,
    SubModule,
    LogMiddleware,
    AuthMiddleware,
    ControllerMiddleware
  ],
  providers: [ModifyResultInterceptor]
})
export class AppModule {}
