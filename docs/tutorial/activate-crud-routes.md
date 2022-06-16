# Activate CRUD Routes

We have previously created our first controller, now let's work on adding the CRUD routes to this controller. We have a second decorator that is applied to the controller: the `@Crud` decorator. See how it works and how we enable routes on the controller:

```typescript
import { Controller } from '@kodexo/common'
import { Crud, CrudControllerInterface } from '@kodexo/crud'
import { Inject } from '@kodexo/injection'
import { Car } from './entities/car.entity'
import { CarsService } from './services/cars.service'

@Crud({
  model: Car
})
@Controller('/cars')
export class CarsController implements CrudControllerInterface<Car> {
  constructor(@Inject public service: CarsService) {}

  @Get('/models')
  async getModels() {
    return [
      'Mercedes',
      'Ford',
      'Toyota',
      'Volkswagen',
      'Renault',
      'Fiat',
      'Nissan'
    ]
  }
}
```

So we apply the `@Crud` decorator on the controller with the MikroORM model as parameter.

To fully enable CRUD functionality, we need the service we created earlier and to standardize the code and its usage, we use the `CrudControllerInterface`. This interface forces the controller to have a `service` property, which coupled with the dependency injection system allows access to the CRUD methods previously presented.

As we can see, it is quite possible to couple automatic CRUD routes and hand-made routes.