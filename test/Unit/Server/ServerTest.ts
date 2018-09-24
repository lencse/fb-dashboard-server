import Server from '../../../src/Server/Server'
import MockWebServer from './Mock/MockWebServer'

describe('Server', () => {
    it('Server is starting webserver', () => {
        const webserver = new MockWebServer()
        const server = new Server(webserver)
        server.run()
        expect(webserver.isStarted()).toBe(true)
    })
})
