import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class IndicesController {
    public async index(ctx: HttpContextContract){
        const { request, response } = ctx

        try {
            response.status(200)
            response.send({
                message: 'Message Received',
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
