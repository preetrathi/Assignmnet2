var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');

app.use(bodyParser());

app.get('/', function(req,res){
    res.sendfile('index.html',{root: path.join(__dirname,"./public")});
});

app.post('/', function(req,res){
    //res.sendfile('index.html',{root: path.join(__dirname,"./public")});

    res.end(JSON.stringify(req.body));
});
app.listen(3000, function(){
    console.log('server is running');
})