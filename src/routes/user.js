import {app} from '../server.js'
import { env } from "../env.js";
import { z } from 'zod'
import Parse from 'parse/node.js'

Parse.initialize(env.APP_ID, env.JS_KEY);
Parse.serverURL = 'https://parseapi.back4app.com/'

export async function userRoutes() {
    

    app.get('/listAll', async (request,reply) => {

        reply.headers({
            "X-Parse-Application-Id": env.APP_ID,
            "X-Parse-REST-API-Key": env.JS_KEY
        })

        const query = new Parse.Query('Usuarios');

        try {
            let users = await query.find();
            reply.send(users);
        } catch (error) {
            console.error('Usuário não encontrado', error);
        }
    })

    app.post('/register', async (request, reply) => {

        const createNewUser = z.object({
            username: z.string(),
            password: z.string()
        })

        const { username, password } = createNewUser.parse(
            request.body,
        );

        const query = new Parse.Query('Usuarios')

        query.equalTo('username', username)
        
        try{
            await query.first().then((async exist =>{
                if(!exist){
                    const user = new Parse.Object('Usuarios')
                    user.set('username', username)
                    user.set('password', password)
                    const created = await user.save()
                        return reply.status(201).send({
                            created,
                            "msg": `Usuário: ${username} criado com sucesso`
                        })
                }else{
                    throw Error('Usuário existente')
                }
            }))
            
        } catch (error){
            console.log(error)
            reply.status(409).send(error)            
        }
    })

    app.post('/login', async (request, reply) => {

        const getLoginInput = z.object({
            username: z.string(),
            password: z.string()
        })

        const { username, password } = getLoginInput.parse(request.body)

        const query = new Parse.Query('Usuarios')
        query.equalTo('username', username)
    
        
        try {
            
            let user = await query.first()
            const getUser = {
                "username": await user.get('username'),
                "password": await user.get('password')
            }
            
            if(!user || password !== getUser.password){
                throw new Error('Usuário não existente/ou Senha inválida')
            }else{
                reply.status(200).send('Login efetuado 😁')
            }
            
        } catch (error) {
            reply.status(401).send(error)
        }
    })


}