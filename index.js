const mysql = require('mysql')
const express = require('express')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'health_records'
})

//connect to mysql
db.connect(err=> {
    if(err) throw err;

    console.log("mysql Connected")    
})

const getUser = () => {

    return new Promise((resolve, reject) => {

       const sql = `SELECT * FROM accountinformation`;

       db.query(sql, (err, result) => {
            if(err) return reject(err);
    
            resolve(result)
        })
    })

}

getUser().then((row)=> {
    return row;
}).catch(err => setImmediate(()=>{throw err}))


const app = express()
app.listen('3000', () =>{
    console.log('Listening toport 3000')
} )
