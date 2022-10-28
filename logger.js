const { createLogger, format, transports } = require('winston');
const { combine, printf } = format;
require('winston-daily-rotate-file');

const formatter = printf(
    (args) => `${new Date()} - ${args.level}: ${args.message}`
)

const logger = createLogger({
    format: combine(formatter),
    transports:[
        new transports.DailyRotateFile({
            filename: '%DATE%.log',
            handleException: true,
            json: false,
            colorize: true,
            maxsize: 5242880,
            maxFiles: 5,
            datePattern: 'YYYY-MM-DD',
            prepend: true,
            level: process.env.LOGGING_LEVEL || 'info',
            dirname: 'logs',
        })
    ],
    exitOnError:false
});

module.exports = logger;

module.exports.stream = {
    write: (message) =>{
        logger.info(message);
    }
};