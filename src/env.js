import { any, z } from 'zod'
import { config } from 'dotenv'

config()

const envSchema = z.object({
    PORT: any,
    APP_ID: z.string(),
    JS_KEY: z.string()
})

const _env = envSchema.safeParse(process.env)

if(!_env.success){
    console.error('Erro de variáveis de ambiente.', _env.error.format());
    process.exit(1)
}

export const env = _env.data