'use strict';

var koa = require('koa');
var uaParser = require('ua-parser');

var app = koa();

app.use(function *(){
  var lang = this.get('accept-language').split(',')[0];
  var ip = this.ip;
  var os = uaParser.parseOS(this.get('user-agent')).toString();
  this.body = {
    language: lang, 
    ipaddress: ip,
    software: os
  }
});

app.listen(3000);
