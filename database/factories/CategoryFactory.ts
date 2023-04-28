import Category from 'App/Models/Category'
import Factory from '@ioc:Adonis/Lucid/Factory'

export default Factory.define(Category, ({ faker }) => {
  return {
    blogId: 1,
    title: faker.lorem.word(1),
  }
}).build()
