var express = require('express');
var bodyparser = require("body-parser");
var app = express();
var fs = require('fs');
var spawn = require("child_process").spawn;
var http = require('http');
var server = http.createServer(app);
var return_name,num_str='';
var path = require('path');


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname)));

app.get('/', function (req, res) {
  res.sendFile( __dirname + "/page.html");
});
app.post('/message',function(req,res){
  msg = req.body.val;
  if(req.body.naam.length != 0){
    msg = msg + ',' + req.body.naam;
    fs.appendFile(__dirname+'/data.csv', msg+'\r\n', function(err) {
      if(err) {
          return console.log(err);
      }
    });
    console.log("The file was saved to data.csv");
    res.send('saved');
    res.end();
  }
  else{
    for(i= 0; i < 43; i++){
      num_str = num_str+ String(i)+',';
    }
    fs.writeFile(__dirname+'/test.csv', num_str + '\r\n' + msg + '\r\n', function(err) {
      if(err) {
          return console.log(err);
      }

    });
    num_str = "";
    console.log("The file was saved to test.csv");
    var process = spawn('python',[__dirname+"/predict.py", '1']);
    process.stdout.on('data', function (data){
      return_name = data.slice(2,-3).toString();
    });
    process.on('close',function(){
      res.send(return_name);
      res.end();
    });
  }
});
app.listen(3000,function(err){
  if(err){
    console.log("port error");
  }
  else{
    console.log("connected sucessfully");
  }
});
