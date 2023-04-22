import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from 'App/Models/User'

export default class UsersController {
    public async create(ctx: HttpContextContract){
        const { request, response } = ctx

        try {
            console.log(request.body())
            
            const newUser = await User.create({
                name: request.body().name,
                username: request.body().username,
                email: request.body().email,
                password: request.body().password
        })
            response.status(200)
            response.send({
                message: 'Index',
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