
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
      user: 'ayzxkku2vm25c6jk',
      password: 'xjt1vs16zbg9wwod',
      database: 'kyej30rdfwcqt1qb'
    }
  }

}

// knex migrate:make
// knex migrate:latest
