import { Store } from '@kodexo/injection'
import { MethodsParams, ParamBuilder } from '../../main'

/*export function Req(): Function {
  return (target: any, propertyKey: string, paramaterIndex: number) => {
    const paramaterStore = Store.from(target, propertyKey, paramaterIndex)

    paramaterStore.set('type', MethodsParams.REQ)
  }
}*/

export const Req = ParamBuilder.buildParamDecorator((needed, req) => {
  return req
})
