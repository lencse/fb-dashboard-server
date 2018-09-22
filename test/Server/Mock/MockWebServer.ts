import WebServer from '../../src/Server/WebServer'

export default class MockWebServer implements WebServer {

    private started: boolean = false

    run(): void {
        this.started = true
    }

    public isStarted(): boolean {
        return this.started
    }

}
