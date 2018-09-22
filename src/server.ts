import Server from './Server/Server'
import KoaWebServer from './Adapter/KoaWebServer'

export function run() {
    new Server(new KoaWebServer()).run()
}
