import { Options as MikroOptions } from '@mikro-orm/core'

export * from './ConnectionDatabase'
export * from './RepositoryBuilder'
export * from './RequestContextMiddleware'
export * from './mikro.module'

export * from './filters'

declare global {
  namespace Kodexo {
    interface Configuration {
      mikroORM: Omit<MikroOptions, 'entities' | 'entitiesTs' | 'subscribers'>
    }
  }
}
