import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

import UserFactory from 'Database/factories/UserFactory'

export default class extends BaseSeeder {
  public async run () {
    await UserFactory.merge({
      name: "Derek Thibert",
      email: "derekthibert@gmail.com",
      username: "dthibert"
    })
    .create()
    await UserFactory.createMany(9);// Write your database queries inside the run method
  }
}
