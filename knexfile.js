
module.exports = {

  development: {
    client: 'mysql',

    connection: {
      host: 'localhost',
      port: 3306,
      user: 'newuser',
      password: '',
      database: 'newsdb',
      debug: ['ComQueryPacket', 'RowDataPacket']
    }

  },

  production: {
    client: 'mysql',
    connection: {
      host: 'g8r9w9tmspbwmsyo.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
      port: 3306,
      user: 'hmcagnut7hb9gnbm',
      password: 'irjfxnnreiatryjb',
      database: 'hafdb78863f0n0y5'
    }
  }

}

// knex migrate:make
// knex migrate:latest
