import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import CommentFactory from 'Database/factories/CommentFactory';

export default class extends BaseSeeder {
  public async run () {
    await CommentFactory.createMany(10);// Write your database queries inside the run method
  }
}
