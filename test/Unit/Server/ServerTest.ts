import Server from '../../../src/Server/Server'

describe('Server', () => {
    it('Server is starting webserver', () => {
        const webserver = {
            started: false,
            run(): void {
                this.started = true
            },
        }
        const server = new Server(webserver)
        server.run()
        expect(webserver.started).toBe(true)
    })
})
