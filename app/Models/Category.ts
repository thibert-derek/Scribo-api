import { DateTime } from 'luxon'
import { manyToMany, ManyToMany, BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

import Blog from 'App/Models/Blog'

export default class Category extends BaseModel {
  public static table = 'categories'
  
  @column({ isPrimary: true })
  public id: number

  @column()
  public blogId: number

  @column()
  public title: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany(() => Blog, {
    pivotTable: 'blog_category',
    localKey: 'id',
    pivotForeignKey: 'categoryId',
    relatedKey: 'id',
    pivotRelatedForeignKey: 'blogId',
  })

  public blogs: ManyToMany<typeof Blog>
}
