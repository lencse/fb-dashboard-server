import dic from './dic/dic'
import 'reflect-metadata'
import Server from './Server/Server'

export function server(): Server {
    return dic.server
}
