import User from 'App/Models/User'
import Factory from '@ioc:Adonis/Lucid/Factory'

export default Factory.define(User, async ({ faker }) => {
  
  return {
    name: faker.name.fullName(),
    email: faker.internet.email(),
    username: faker.internet.userName(),
    password: "password",
    verified: true
  }
}).build()
