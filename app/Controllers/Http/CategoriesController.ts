import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Category from 'App/Models/Category'

export default class CategoriesController {
    public async create(ctx: HttpContextContract){
        const {request, response} = ctx

        try {
            console.log(request.body())
            
            const newCategory = await Category.create({
                title: request.body().title,
                blogId: request.body().blogId
        })
            response.status(200)
            response.send({
                message: 'Category created successfully',
                user: newCategory,
            })
            return
        }   catch (error) {
            response.status(500)
            response.send({
                message: 'Server Error.',
            })
            return
        }
    }

}
