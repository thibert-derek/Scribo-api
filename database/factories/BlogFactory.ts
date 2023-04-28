import Blog from 'App/Models/Blog'
import Factory from '@ioc:Adonis/Lucid/Factory'

export default Factory.define(Blog, async({ faker }) => {
  return {    
    title: faker.lorem.words(2),
    body: faker.lorem.paragraphs(5),
    userId: 1
  }
}).build()
