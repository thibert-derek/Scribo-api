import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Blog from 'App/Models/Blog'

export default class BlogsController {
public async create(ctx: HttpContextContract){
    const { request, response } = ctx

    try {
        console.log(request.body())
        
        const newUser = await Blog.create({
            title: request.body().title,
            body: request.body().body,
            userId: request.body().userId
    })
        response.status(200)
        response.send({
            message: 'Blog created successfully',
            user: newUser,
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