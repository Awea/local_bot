(function() {
  require.config({
    paths: {
      backbone: "../components/backbone/backbone",
      underscore: "../components/underscore/underscore",
      io: "/socket.io/socket.io",
      playlist: "collections/playlist",
      player: "models/player",
      video: "models/video"
    },
    shim: {
      underscore: {
        exports: "_"
      },
      backbone: {
        deps: ["underscore"],
        exports: "Backbone"
      }
    }
  });

  require(["backbone", "io", "playlist", "player", "video"], function(Backbone, io, Playlist, Player, Video) {
    var conn, player, playlist;
    conn = io.connect("http://localhost");
    player = new Player("ytplayer");
    playlist = new Playlist;
    playlist.on("add", function(video) {
      if (player.state !== 'playing') {
        player.set_video(playlist, video);
        return console.log('start playing');
      }
    });
    player.yt.addEventListener("onStateChange", function(e) {
      if (e.data === 0) {
        if (playlist.length > 0) {
          player.next_video(playlist);
          return console.log('next video');
        } else {
          player.stopped();
          return console.log('stopped');
        }
      }
    });
    return conn.on("receive_video", function(data) {
      console.log(data);
      return playlist.add(new Video(data.id, data.title));
    });
  });

}).call(this);
