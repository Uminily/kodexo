import { Middleware, MiddlewareHandling, NextFunction, Request, Response } from '@kodexo/common'
import { Inject } from '../../../injection/dist'
import { CityService } from './CityService'

@Middleware()
export class LogMiddleware implements MiddlewareHandling {
  async use(req: Request, res: Response, next: NextFunction) {
    //console.log('wesh')
    next()
  }
}
