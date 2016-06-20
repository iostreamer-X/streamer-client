var ws = require('nodejs-websocket');
var request = require('request');


var conn = ws.connect('wss://io-streamer.herokuapp.com/',()=>{
  request.get('http://localhost:7000/io.mp3')
         .on('data',(data)=>{
           conn.send(data,()=>{console.log('wrote bytes');})
         })
})
