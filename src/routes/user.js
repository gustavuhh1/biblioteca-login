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
            password: z.string(),
            token_digit: z.string()
        })

        const { username, password, token_digit } = createNewUser.parse(
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
                    user.set('token_digit', token_digit)
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

    app.put('/resetPassword', async (request, reply) => {

        const getUserInfos = z.object({
            username: z.string(),
            password: z.string(),
            token_digit: z.string(),
            new_password: z.string()
        })

        const { username, password, token_digit, new_password} = getUserInfos.parse(request.body)

        const query = new Parse.Query('Usuarios')
        query.equalTo('username', username)

        try{
            let user = await query.first()
            const getUser = {
                "createdAt": await user.get('createdAt'),
                "username": await user.get('username'),
                "password": await user.get('password'),
                "token_digit": await user.get('token_digit'),
                "new_password": new_password,
            }

            if(token_digit !== getUser.token_digit || password !== getUser.password){
                throw new Error("Token de 4 digitos incorreto.");
            }else{
                user.set('password', new_password)
                const response = await user.save()
                reply.send(response)
            }

        }catch(e){
            reply.status(401).send("Não autorizado." + e)
        }
    })

}