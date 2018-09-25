import { Container } from 'inversify'
import Webserver from '../Server/WebServer'
import Server from '../Server/Server'
import KoaWebserver from '../Adapter/KoaWebServer'
import TYPES from './TYPES'

class DIC {

    private container: Container = new Container()

    constructor() {
        this.container.bind<Webserver>(TYPES.Webserver).to(KoaWebserver)
        this.container.bind<Server>(TYPES.Server).to(Server)
    }

    public get server(): Server {
        return this.container.get<Server>(TYPES.Server)
    }

}

const dic = new DIC()

export default dic
