module.exports = {
    dbConfig: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        database: 'my_first_db'
    },
    cookieConfig: {
        secure: false,
        httpOnly: false,
        maxAge: 1000 * 60000
   },
   passwordHash: 'my_secret&@#$@!#$'
}