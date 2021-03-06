import { RouteParams, UseSerialization } from '@kodexo/common'
import {
  BodyParams,
  Controller,
  CookieParams,
  Get,
  Post,
  Res,
  Response,
  Use,
  UseValidation
} from '@kodexo/common'
import { Inject } from '@kodexo/injection'
import { AuthMiddleware } from '../auth.middleware'
import { CarDto } from '../car.dto'
import { CarService } from '../CarService'
import { LogMiddleware } from '../log.middleware'
import { ModifyResultInterceptor } from '../modify-result.interceptor'
import { CarModel } from './serialization/car'

@Controller('/cars')
export class CarsController {
  test = 2

  constructor(@Inject private carService: CarService) {}

  @UseSerialization(CarModel)
  @Get('/')
  async getCars() {
    return this.carService.getCars()
  }

  @Use(LogMiddleware)
  @Use(AuthMiddleware)
  @Post('/secured')
  async secured() {
    return this.carService.getCar()
  }

  @UseValidation(CarDto)
  @Post('/newcar')
  async newCar(@BodyParams() body: CarDto) {
    return body
  }

  @Post('/res')
  async getRes(
    @BodyParams('email') email: string,
    @BodyParams('password') password: string,
    @RouteParams('id') id: string,
    @Res() res: Response
  ) {
    const cookieOptions = {
      maxAge: 1000 * 60 * 60 * 24 * 365,
      httpOnly: true,
      signed: true
    }

    res.cookie('thecookie', 'thevalue', cookieOptions)
    return { cookie: true, email }
  }

  @Get('/cookies')
  async getCookies(@CookieParams('thecookie') cookie: string) {
    return { cookie }
  }
}
