import { DateTime } from 'luxon'
import { BaseModel, HasMany, hasMany, column } from '@ioc:Adonis/Lucid/Orm'

import Blog from 'App/Models/Blog'

export default class Category extends BaseModel {
  public static table = 'categories'
  
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public blogId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Blog)
  public blogs: HasMany<typeof Blog>
}
