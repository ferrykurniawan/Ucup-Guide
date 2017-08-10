const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})
app.get('/kodok', function (req, res) {
  res.send('<p style="color:red;"> <font size="50">I am red</font></p>\
   <img src="https://static.pexels.com/photos/158780/leaf-nature-green-spring-158780.jpeg" alt="Mountain View" style="width:304px;height:228px;">\
   <br/> Ucupucupucup\
   <blockquote cite="http://www.worldwildlife.org/who/index.html">\
seekor kera terkurung terpenjara dalam gua.\
</blockquote>')
})
app.get('/learn2', function (req, res) {
  res.send('<html>\
  <body bgcolor=cyan>\
    <img src ="https://static.pexels.com/photos/158780/leaf-nature-green-spring-158780.jpeg" id="my" width="310" height="392" style="position: absolute; top:92px; left:375px; visibility:hidden"/>\
    <script type="text/javascript">\
      function tend() {\
        document.getElementById("my").style.visibility="visible";\
      }\
      function tn() {\
        document.getElementById("my").style.visibility="hidden";\
      }\
    </script>\
    <input type="button" onclick="tend()" value="back">\
    <input type="button" onclick="tn()" value="close">\
  </body>\
</html>')
})

app.set('view engine', 'jade');
app.get('/test', function(req, res) {
    res.sendFile('./index.html', {root: __dirname })
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})