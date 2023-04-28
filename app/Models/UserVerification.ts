import { DateTime } from 'luxon'
import { hasOne, HasOne, BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

import User from './User'

export default class UserVerification extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public userId: number

  @column()
  public type: string

  @column()
  public token: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasOne(() => User)
  public user: HasOne<typeof User>
}
