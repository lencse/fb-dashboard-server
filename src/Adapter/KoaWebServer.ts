import Webserver from '../Server/Webserver'
import * as Koa from 'koa'
import * as Router from 'koa-router'
import * as json from 'koa-json'
import { injectable } from 'inversify'
import 'reflect-metadata'

@injectable()
export default class KoaWebserver implements Webserver {

    private koa: Koa

    private router: Router

    constructor() {
        this.koa = new Koa()
        this.router = new Router()
    }

    public run(): void {
        this.router.get('/data', async (ctx, next) => {
            ctx.body = { ok: true }
        })

        this.koa
            .use(json())
            .use(this.router.routes())
            .use(this.router.allowedMethods())

        this.koa.listen(6800)
    }

}
