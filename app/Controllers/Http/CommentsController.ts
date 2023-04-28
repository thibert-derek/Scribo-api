import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Comment from 'App/Models/Comment'

export default class CommentsController {
    public async create(ctx: HttpContextContract){
        const { request, response } = ctx
    
        try {
            console.log(request.body())
            
            const newComment = await Comment.create({
                body: request.body().body,
                userId: request.body().userId,
                blogId: request.body().blogId
        })
            response.status(200)
            response.send({
                message: 'Comment created successfully',
                user: newComment,
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
