const mysql = require('mysql');
const config = require('../config/config');

let pool  = mysql.createPool({
    host     : config.db.HOST,
    user     : config.db.USERNAME,
    password : config.db.PASSWORD,
    database : config.db.DATABASE
});

let query = function( sql, values ) {
    return new Promise(( resolve, reject ) => {
        pool.getConnection(function(err, connection) {
            if (err) {
                reject( err );
            } else {
            connection.query(sql, values, ( err, rows) => {
                if ( err ) {
                    reject( err );
                } else {
                    resolve( rows );
                }
                connection.release();
            });
            }
        });
    });
}

module.exports={
    query: query
}

