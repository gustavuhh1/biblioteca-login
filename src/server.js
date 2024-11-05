// fastify
import Fastify from "fastify" ;
import fastifyStatic from "@fastify/static"; "@fastify/static";
// env
import { env } from "./env.js";
// Routes
import { userRoutes } from "./routes/user.js";
// tools
import { fileURLToPath } from 'url';
import path from 'path';

export const app = Fastify({logger: true})

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.addHook("preHandler", async (request, reply) => {
    console.log(`[${request.method} ${request.url}]`);
});
app.register(userRoutes, {
    prefix: "user",
})

app.register(fastifyStatic, {
    root: path.join(__dirname, '../public/'), // Define a pasta 'public' como a raiz para arquivos estáticos
    prefix: '/', // Define o prefixo da URL para acessar arquivos (use '/' para a raiz)
});

app.get('/', (request, reply) => {
    return reply.sendFile('index.html'); // Serve o arquivo 'index.html' na raiz
});


app.listen({
    host: "RENDER" in process.env ? "0.0.0.0" : "localhost", 
    port: env.PORT
}).then(() => {
    console.log("HTTP Server Running! port:" + env.PORT);
})