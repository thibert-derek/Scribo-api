import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'blog_category'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.integer('blogId').unsigned().references('blogs.id').onDelete('CASCADE')
      table.integer('categoryId').unsigned().references('categories.id').onDelete('CASCADE')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
