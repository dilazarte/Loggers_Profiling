const log4js = require('log4js')

log4js.configure({
    appenders: {
        logConsola: {type: 'console'},
        logDebug: {type: 'file', filename:'debug.log'},
        logError: {type: 'file', filename:'errores.log'}
    },
    categories: {
        default: {appenders: ['logConsola'], level: 'info'},
        debug: {appenders: ['logDebug'], level: 'debug'},
        error: {appenders: ['logError'], level: 'error'},
    }
})

const loggerInfo = log4js.getLogger('default');
const loggerDebug = log4js.getLogger('debug')
const loggerError = log4js.getLogger('error')

module.exports = {loggerInfo, loggerDebug, loggerError};