import WebServer from './WebServer'

export default class Server {

    constructor(
        private webserver: WebServer
    ) {}

    public run(): void {
        this.webserver.run()
    }

}
