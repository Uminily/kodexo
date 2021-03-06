import { ConnectionOptions, Job } from 'bullmq'

export * from './decorators'
export * from './queueing.module'
export * from './interfaces'
export * from './main'

export * from './AppWorker'

export { Job }

declare global {
  namespace Kodexo {
    interface Configuration {
      bull: {
        connection: ConnectionOptions
      }
      queue: {
        prefix?: string
      }
    }
  }
}
