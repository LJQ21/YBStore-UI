var express = require('express');
var router = express.Router();
var http = require("http");


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
    res.render("main",{goods:[{url : '#',src : '/images/1.jpg',describe : '我叫李健强',money : '999',number : '9'},{url : '127.0.0.1',src : '/images/1.jpg',describe : '我不叫李健强',money : '999',number : '9'},{url : '127.0.0.1',src : '/images/1.jpg',describe : '我就是李健强',money : '999',number : '9'}]});

});

module.exports = router;
