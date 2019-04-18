var express = require('express');
var router = express.Router();
var http = require("http");
var cookiePareser=require('cookie-parser');


/*
//cookie拦截
router.use('*',function (req,res,next) {
   if(req.originalUrl=="/cookie"){
       next();
   }else {
       if(req.cookies.name=="ljq"){
           next();
       }else{
           res.redirect('cookie');
           next
       }
   }
});
*/

/* GET home page. */
router.get('/', function(req, res, next) {
  /*var jsonData="";
  var options = {
     host : '127.0.0.1',
      //host:'0.0.0.0',
     port : 8080,
     path : '/ljq/hello',
     method : 'get'
  }
  var requestServer = http.request(options,function (resSer) {
      console.log('Status:'+res.statusCode);
      console.log('Headers:'+JSON.stringify(res.headers));
      resSer.on('end',function () {
          console.log('评论完毕!');
      });
      resSer.on('data',function (chunk) {
          console.log(chunk.toString());
          jsonData += chunk.toString();
          var jsonObj=JSON.parse(jsonData);
          res.render("index",jsonObj);
          res.end();
      });
  });
    requestServer.on('error',function (e) {
        console.log("Error:"+e.message);
    });
  res.render("main",{goods:[{url : '#',src : '/images/1.jpg',describe : '我叫李健强',money : '999',number : '9'},{url : '127.0.0.1',src : '/images/1.jpg',describe : '我不叫李健强',money : '999',number : '9'},{url : '127.0.0.1',src : '/images/1.jpg',describe : '我就是李健强',money : '999',number : '9'}]});
*/
  //res.render("home");
    res.render("home",{goods:[{id : '12345',imgSrc : '/images/1.jpg',describe : '我叫李健强',price : '0',number : '1'},{id : '127.0.0.1',imgSrc : '/images/1.jpg',describe : '我不叫李健强',price : '999',number : '0'},{id : '127.0.0.1',imgSrc : '/images/1.jpg',describe : '我就是李健强',price : '999',number : '9'}]});

});

router.get('/order',function (req,res,next) {
    res.render("order");
});

router.get('/person',function (req,res,next) {
    res.render("person");
});

router.get('/cookie',function (req,res) {
    res.cookie('name','ljq',{'maxAge':5000});
    res.send(req.cookies);
});

router.get('/printf_cookie',function (req,res) {
    res.send(req.cookies);
});

module.exports = router;
