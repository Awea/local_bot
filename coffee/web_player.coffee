require.config
  paths:
    backbone: "../components/backbone/backbone"
    underscore: "../components/underscore/underscore"
    io: "/socket.io/socket.io"
    playlist: "collections/playlist"
    player: "models/player"
    video: "models/video"

  shim:
    underscore:
      exports: "_"

    backbone:
      deps: ["underscore"]
      exports: "Backbone"

require ["backbone", "io", "playlist", "player", "video"], (Backbone, io, Playlist, Player, Video) ->
  conn = io.connect("http://localhost")
  player = new Player("ytplayer")
  playlist = new Playlist

  playlist.on("add", (video) ->    
    if player.state != 'playing'
      player.set_video(playlist, video) 
      console.log 'start playing'
  )

  player.yt.addEventListener("onStateChange", (e) ->
    if e.data == 0 # video end state
      if playlist.length > 0
        player.next_video(playlist)
        console.log 'next video'
      else
        player.stopped()
        console.log 'stopped'
  )

  conn.on "receive_video", (data) ->
    console.log data
    playlist.add new Video(data.id, data.title)