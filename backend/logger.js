const httpContext = require('express-http-context');
// const DailyRotateFile = require('winston-daily-rotate-file');
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf } = format;

const config = require('./config');

const messagesFormat = printf(({ level, message, timestamp }) => {
  const reqId = httpContext.get('reqId') ? ` [${httpContext.get('reqId')}] ` : ' ';
  return `${timestamp}${reqId}${level.toUpperCase()}: ${message}`;
})

const logger = createLogger({
  format: combine(
    timestamp(),
    messagesFormat,
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: config.logger.fileDir }),
  ]
});

module.exports = logger;