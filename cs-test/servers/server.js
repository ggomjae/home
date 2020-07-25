const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3001;
const route = require('./routes/index');
//const mdbConn = require('./mariaDBConn.js')


app.use(bodyParser.json());
app.use('/api', route); 

app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})