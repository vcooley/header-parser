'use strict';

var koa = require('koa');
var uaParser = require('ua-parser');

var app = koa();

app.use(function *(){
  var lang = this.get('accept-language').split(',')[0];
  var userAgent = uaParser.parse(this.get('user-agent'));
  var os = userAgent.os.toString();
  var browser = userAgent.ua.toString();
  this.body = {
    language: lang, 
    ipaddress: this.req.connection.remoteAddress,
    browser: browser,
    os: os,
    forwardedFor: this.get('X-Forwarded-For');
  }
});

app.listen(process.env.PORT || 3000);
