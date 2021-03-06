import { Service } from '@kodexo/common'
import { AccessControlCenter } from '../main/AccessControlCenter'
import { Role } from '../main/Role'

@Service()
export class AccessControlService {
  private acc = new AccessControlCenter()

  constructor() {}

  /**
   *
   * @param roleName
   */
  defineRole(roleName: string) {
    return this.acc.defineRole(roleName)
  }

  defineOrGetRole(roleName: string) {
    try {
      return this.acc.getRole(roleName)
    } catch (err) {
      return this.defineRole(roleName)
    }
  }

  /**
   *
   * @returns
   */
  getRoles() {
    return this.acc.getRoles()
  }

  /**
   *
   * @param roleName
   */
  getRole(roleName: string) {
    return this.acc.getRole(roleName)
  }

  /**
   *
   * @param roleName
   * @returns
   */
  can(roleName: string | Role) {
    roleName = typeof roleName === 'string' ? roleName : roleName.name
    return this.acc.can(roleName)
  }
}
