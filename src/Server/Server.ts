import Webserver from './Webserver'
import { inject, injectable } from 'inversify'
import TYPES from '../dic/TYPES'
import 'reflect-metadata'

@injectable()
export default class Server {

    constructor(
        @inject(TYPES.Webserver) private webserver: Webserver
    ) {}

    public run(): void {
        this.webserver.run()
    }

}
