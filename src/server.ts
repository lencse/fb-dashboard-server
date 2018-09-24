import Server from './Server/Server'
import KoaWebServer from './Adapter/KoaWebServer'

export function server(): Server {
    return new Server(new KoaWebServer())
}
