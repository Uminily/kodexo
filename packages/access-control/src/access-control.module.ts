import { Module } from '@uminily/common'
import { AccessControlService } from './components/access-control.service'

@Module({
  imports: [AccessControlService]
})
export class AccessControlModule {}
