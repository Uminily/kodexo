import { Configuration as MikroConfiguration, Options as MikroOptions } from '@mikro-orm/core'

export * from './ConnectionDatabase'
export * from './RepositoryBuilder'
export * from './RequestContextMiddleware'
export * from './mikro.module'

declare global {
  namespace Kodexo {
    interface Configuration {
      mikroORM: MikroOptions | MikroConfiguration
    }
  }
}
