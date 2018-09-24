import * as server from '../../src/server'

describe('Integration', () => {
    it('Server is created', () => {
        const srv = server.server()
        expect(srv.constructor.name).toBe('Server')
    })
})
