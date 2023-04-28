import Comment from 'App/Models/Comment'
import Factory from '@ioc:Adonis/Lucid/Factory'

export default Factory.define(Comment, async({ faker }) => {
  return {
    body: faker.lorem.words(10),
    blogId: 1,
    userId: 1,
  }
}).build()
