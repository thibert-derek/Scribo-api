import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

export default class extends BaseSeeder {
  
  private async runSeeder(path: string) {
    const Seeder: { default: typeof BaseSeeder } = await import(path)
    await new Seeder.default(this.client).run()
    console.log(`❯ seeded ${path}`)
  }

  public async run() {
    await this.runSeeder('../User')
    await this.runSeeder('../Blog')
    await this.runSeeder('../Category')
    await this.runSeeder('../Comment')
  }
}
