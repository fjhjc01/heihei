var express = require('express');
var OAuth = require('oauth');
var socket = require('socket.io');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });


  var oauth = OAuth.OAuth2;
  var fitbitConsumerKey = 'a972d0b78d0cc6134f6409dac578e787';
  var fitbitConsumerSecret = 'b33a548d7626d40c3eef65e4f111a44f';

  var oauth2 = new OAuth2(server.config.keys.fitbit.consumerKey,
      fitbitConsumerSecret,
      'https://api.fitbit.com/',
      null,
      'oauth2/token',
      null);
  oauth2.getOAuthAccessToken(
      '',
      {'grant_type':'client_credentials'},
      function (e, access_token, refresh_token, results){
        console.log('bearer: ',access_token);
        done();
      });
});

module.exports = router;
