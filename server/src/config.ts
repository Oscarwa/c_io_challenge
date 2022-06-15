import * as dotenv from 'dotenv';
dotenv.config();

type Config = {
    port: number,
}

const config: Config = {
    port: +process.env.PORT! ?? 3000,
}

export default config;