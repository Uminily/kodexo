import { Controller } from '@kodexo/common'
import { Inject } from '@kodexo/injection'
import { Crud } from '../../../../src/decorators'
import { CrudControllerInterface } from '../../../../src/interfaces/CrudControllerInterface'
import { CreateWorkshopDto } from './dto/create-workshop.dto'
import { UpdateWorkshopDto } from './dto/update-workshop.dto'
import { Workshop } from './entities/workshop.entity'
import { WorkshopsService } from './workshops.service'

@Crud({
  model: Workshop,
  dto: {
    createDto: CreateWorkshopDto,
    updateDto: UpdateWorkshopDto
  }
})
@Controller('/workshops')
export class WorkshopsController implements CrudControllerInterface<Workshop> {
  constructor(@Inject public service: WorkshopsService) {}
}
