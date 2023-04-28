import { DateTime } from 'luxon'
import { manyToMany, hasMany, HasMany, BaseModel, BelongsTo, belongsTo, column, ManyToMany } from '@ioc:Adonis/Lucid/Orm'

import User from 'App/Models/User'
import Category from 'App/Models/Category'
import Comment from 'App/Models/Comment'
import BlogLike from 'App/Models/BlogLike'

export default class Blog extends BaseModel {
  public static table = 'blogs'

  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public body: string

  @column()
  public userId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany(() => Category, {
    pivotTable: 'blog_category',
    localKey: 'id',
    pivotForeignKey: 'blog_id',
    relatedKey: 'id',
    pivotRelatedForeignKey: 'category_id',
  })

  public categories: ManyToMany<typeof Category>

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @hasMany(() => Comment)
  public comment: HasMany<typeof Comment> 

  @hasMany(() => BlogLike)
  public likes: HasMany<typeof BlogLike>
}
