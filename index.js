'use strict';

var koa = require('koa');
var uaParser = require('ua-parser');

var app = koa();

app.use(function *(){
  var lang = this.get('accept-language').split(',')[0];
  var ip = this.ips;
  var userAgent = uaParser.parse(this.get('user-agent'));
  var os = userAgent.os.toString();
  var browser = userAgent.ua.toString();
  this.body = {
    language: lang, 
    ipaddress: ip,
    browser: browser,
    os: os,
  }
});

app.listen(process.env.PORT || 3000);
