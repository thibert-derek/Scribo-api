import { DateTime } from 'luxon'
import { BaseModel, hasMany, manyToMany, ManyToMany, HasMany, column } from '@ioc:Adonis/Lucid/Orm'

import Blog from './Blog'
import Comment from './Comment'
import BlogLike from './BlogLike'
import CommentLike from './CommentLike'

export default class User extends BaseModel {
  public static table = 'users'
  
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public email: string

  @column()
  public username: string

  @column()
  public password: string

  @column({serializeAs: null})
  public verified: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Blog)
  public blogs: HasMany<typeof Blog>

  @hasMany(() => Comment)
  public comments: HasMany<typeof Comment>

  @hasMany(() => BlogLike)
  public bloglikes: HasMany<typeof BlogLike>

  @hasMany(() => CommentLike)
  public commentsLike: HasMany<typeof CommentLike>

  @manyToMany(() => User, {
    pivotTable: 'userFollowing',
    localKey: 'id',
    pivotForeignKey: 'userId',
    relatedKey: 'id',
    pivotRelatedForeignKey: 'followinguserId',
  })
  public following: ManyToMany<typeof User>

  @manyToMany(() => User, {
    pivotTable: 'userFollowing',
    localKey: 'id',
    pivotForeignKey: 'followinguserId',
    relatedKey: 'id',
    pivotRelatedForeignKey: 'userId',
  })
  public followedBy: ManyToMany<typeof User>
}
