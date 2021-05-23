const SERVER_CONFIG = {
  logger: {
    fileDir: `${__dirname}/${process.env.LOG_DIR}/${process.env.LOG_FILENAME}`,
  },
  server: {
    port: process.env.PORT,
    corsEnabled: process.env.CORS_ENABLED === 'true',
  },
  database: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    maxPoolSize: 20,
  }
};

module.exports = SERVER_CONFIG;