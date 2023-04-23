import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'

import User from 'App/Models/User'
import Blog from 'App/Models/Blog'

export default class Comment extends BaseModel {
  public static table = 'comments'
  
  @column({ isPrimary: true })
  public id: number

  @column()
  public body: string

  @column()
  public blogId: number

  @column()
  public userId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @belongsTo(() => Blog)
  public blog: BelongsTo<typeof Blog>
}
