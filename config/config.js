require("dotenv").config();
module.exports = {
  development: {
    username: "f1dv6h62su7w6q3c",
    password: process.env.DB_PASSWORD,
    database: "k2wxxw3u7cu8hkmm",
    host: "h40lg7qyub2umdvb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    dialect: "mysql",
    port: "3306"
  },
  test: {
    username: "root",
    password: "Yakusoku1!",
    database: "testdb",
    host: "localhost",
    dialect: "mysql",
    logging: false
  },
  production: {
    // eslint-disable-next-line camelcase
    username: "f1dv6h62su7w6q3c",
    password: process.env.DB_PASSWORD,
    database: "k2wxxw3u7cu8hkmm",
    host: "h40lg7qyub2umdvb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    dialect: "mysql",
    port: "3306"
  }
};
