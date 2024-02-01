import path, { extname } from 'path' 
import { fileURLToPath } from 'url';

//let express = require('express');
import express from 'express';
import { engine } from 'express-handlebars';
import morgan from 'morgan'

const __filename = fileURLToPath(import.meta.url);

let app = express();
let port = 5000;

app.use(express.static(path.join(path.dirname(__filename), '/public')));

//http logger hien loi 
app.use(morgan('combined'));

//teamplate engine
app.engine('hbs', engine({ extname: '.hbs'}));
app.set('view engine', 'hbs');
// quan lý đường dẫn trong thư mục
//console.log('Url:', path.join(__dirname,'resources/views'));
//app.set('views', path.join(__dirname, '/resources/views'));
app.set('views', path.join(path.dirname(__filename), '/resources/views'));
app.get('/', (req,res) =>  {
     res.render('home');
});

app.listen(port,function(){
    console.log(`Example app listening on port ${port}`)
 });