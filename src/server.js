import fastify from "fastify";
import { env } from "./env.js";
import { userRoutes } from "./routes/user.js";
import fastifyStatic from "fastify-static";
export const app = fastify()




app.addHook("preHandler", async (request, reply) => {
    console.log(`[${request.method} ${request.url}]`);
});
app.register(userRoutes, {
    prefix: "user",

})

app.listen({
    host: "RENDER" in process.env ? "0.0.0.0" : "localhost", 
    port: env.PORT
}).then(() => {
    console.log("HTTP Server Running! port:" + env.PORT);
})