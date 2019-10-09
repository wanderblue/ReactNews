
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
      host: 'edo4plet5mhv93s3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
      port: 3306,
      user: 	'zvpy6f7gtiplhgx6',
      password: 'iyrnxkrgfz04org9',
      database: 't0zo1lcmjt0nryog'
    }
  }

}

// knex migrate:make
// knex migrate:latest
