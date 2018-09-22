import WebServer from '../Server/WebServer'
import * as Koa from 'koa'
import * as Router from 'koa-router'
import * as json from 'koa-json'

export default class KoaWebServer implements WebServer {

    private koa: Koa

    private router: Router

    constructor() {
        this.koa = new Koa()
        this.router = new Router()
    }

    public run(): void {
        this.router.get('/data', async (ctx, next) => {
            ctx.body = { ok: 1}
        })

        this.koa
            .use(json())
            .use(this.router.routes())
            .use(this.router.allowedMethods())

        this.koa.listen(6800)
    }

}
