import { Provider, ProviderType } from '@kodexo/injection'
import { Class } from 'type-fest'

/**
 *
 */
export class QueueProvider<T = any> extends Provider<T> {
  constructor(protected currentClass: Class<T>, public queueName: string) {
    super(currentClass, ProviderType.QUEUE)
  }
}
