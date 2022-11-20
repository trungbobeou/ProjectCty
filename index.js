var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var {conn, sql} = require('./Connect');
app.use(bodyParser.json());


app.get('/customers', async function(req, res){
    var pool = await conn;
    var sqlString = "select top 10000 * from cust_customers order by created_on_date desc";
    return await pool.request().query(sqlString, function(err, data){
        //console.log(err, data);
        res.send({result: data.recordset})
    }) 
})

app.get('/customers/gettel/:sdt', async function(req, res){
    var sdt = req.params.sdt;
    var pool = await conn;
    var sqlString = "Select * from cust_customers where tel like '%"+sdt+"%'"
 
    return await pool.request().query(sqlString, function(err, data){
        if(data.recordset.length > 0){
            res.send({result: data.recordset});
        }else{
            res.send("Đéo có");
        }
    }) 
})

app.get('/customers/gettel2/:sdt', async function(req, res){
    var sdt = req.params.sdt;
    var pool = await conn;
    var sqlString = "Select * from cust_customers where tel2 like '%"+sdt+"%'"
 
    return await pool.request().query(sqlString, function(err, data){
        if(data.recordset.length > 0){
            res.send({result: data.recordset});
        }else{
            res.send("Đéo có");
        }
    }) 
})

app.get('/customers/getname/:sdt', async function(req, res){
    var sdt = req.params.sdt;
    var pool = await conn;
    var sqlString = "Select * from cust_customers where customer_name like N'%"+sdt+"%'"
 
    return await pool.request().query(sqlString, function(err, data){
        if(data.recordset.length > 0){
            res.send({result: data.recordset});
        }else{
            res.send("Đéo có");
        }
    }) 
})

app.get('/customers/getcode/:sdt', async function(req, res){
    var sdt = req.params.sdt;
    var pool = await conn;
    var sqlString = "Select * from cust_customers where customer_code like '%"+sdt+"%'"
 
    return await pool.request().query(sqlString, function(err, data){
        if(data.recordset.length > 0){
            res.send({result: data.recordset});
        }else{
            res.send("Đéo có");
        }
    }) 
})

app.get('/customers/getaddress/:sdt', async function(req, res){
    var sdt = req.params.sdt;
    var pool = await conn;
    var sqlString = "Select * from cust_customers where address1 like N'%"+sdt+"%'"
 
    return await pool.request().query(sqlString, function(err, data){
        if(data.recordset.length > 0){
            res.send({result: data.recordset});
        }else{
            res.send("Đéo có");
        }
    }) 
})

app.get('/users', async function(req, res){
    var pool = await conn;
    var sqlString = "select * from viSys_users where is_super_user !=1";
    return await pool.request().query(sqlString, function(err, data){
        //console.log(err, data);
        res.send({result: data.recordset})
    }) 
})

app.get('/users/getusername/:sdt', async function(req, res){
    var sdt = req.params.sdt;
    var pool = await conn;
    var sqlString = "select * from viSys_users where is_super_user !=1 and username like '%"+sdt+"%'";
    return await pool.request().query(sqlString, function(err, data){
        //console.log(err, data);
        res.send({result: data.recordset})
    }) 
})

app.get('/users/getdisplayname/:sdt', async function(req, res){
    var sdt = req.params.sdt;
    var pool = await conn;
    var sqlString = "select * from viSys_users where is_super_user !=1 and display_name like N'%"+sdt+"%'";
    return await pool.request().query(sqlString, function(err, data){
        //console.log(err, data);
        res.send({result: data.recordset})
    }) 
})


app.listen(3000, function(){
    console.log("Ready in use in port 30000")
});