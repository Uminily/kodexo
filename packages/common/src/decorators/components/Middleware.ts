import { providerRegistry, Registries } from '@kodexo/injection'
import { MiddlewareProvider } from '../../main/middlewares'

export function Middleware(options: any = {}): ClassDecorator {
  return (target: any) => {
    if (
      !(
        Object.getOwnPropertyNames(Object.getPrototypeOf(target.prototype)).includes('use') ||
        Object.getOwnPropertyNames(target.prototype).includes('use')
      )
    )
      throw new Error(`Middleware ${target.name} does not have use() method`)

    const provider = new MiddlewareProvider(target)
    providerRegistry.registerProvider(Registries.MIDDLEWARE, provider)
  }
}
