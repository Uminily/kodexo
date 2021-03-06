import { providerRegistry, Registries } from '@kodexo/injection'
import { ControllerProvider } from '../../main'

/**
 *
 * @param options
 */
export function Controller(options: ControllerOptionsType | PathType): ClassDecorator {
  const parsedOptions = parseControllerOptions(options)

  return (target: any) => {
    if (!target.name.endsWith('Controller')) {
      throw new Error(
        `Controller decorator can only be used on a class that ends with 'Controller'`
      )
    }

    const provider = new ControllerProvider(target, parsedOptions)
    providerRegistry.registerProvider(Registries.CONTROLLER, provider)
  }
}

/**
 *
 * @param options
 */
function parseControllerOptions(options: ControllerOptionsType | PathType): ControllerOptionsType {
  if (typeof options === 'string' || options instanceof RegExp) {
    return {
      path: options
    }
  }

  return options
}

export type PathType = string | RegExp
export type ControllerOptionsType = {
  path: PathType
}
