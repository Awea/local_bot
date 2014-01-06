express = require('express')
app = express()
http = require('http')
server = http.createServer(app)
io = require('socket.io').listen(server);

server.listen 8080
app.use express.static("public")

display = (view) ->
  __dirname + "/views/#{view}"

app.get "/", (req, res) ->
  res.sendfile display('index.html')

app.get "/player", (req, res) ->
  res.sendfile display("player.html") 

# Websockets
io.sockets.on "connection", (socket) ->
  socket.on "add_video", (data) ->
    io.sockets.emit "receive_video",
      id: data.id
      title: 'foo'