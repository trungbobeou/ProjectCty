const sql = require('mssql');

const config = {
    server: "192.168.1.247",
    port: 1433, 
    user: "test",
    password: "123456",
    database: "dipBMS",
    options: {
        encrypt: false,
        enableArithAbort: true,
        trustServerCertificate: true,
    },
    connectionTimeout: 150000,
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000,
    },
};

// sql.on('error', err => {
//     console.log(err.message)
// })

// async function getDBUser(){
//     try {
//         let pool = await sql.connect(config)
//         let result1 = await pool.request().query("Select * from cust_customers")
//         console.log(result1.recordset[0])
//         sql.close()
//     }catch (error) {
//         console.log(error.message);
//         sql.close();
//     }
// }

// getDBUser();

const conn = new sql.ConnectionPool(config).connect().then(pool => {
    return pool;
})

module.exports = {
    conn: conn,
    sql: sql
}
