
let express = require('express')
let app = express()
let port = 5000

app.get('/', (req,res) => res.send("hello"));


app.listen(port,function(){
    console.log(`Example app listening on port ${port}`)
 });