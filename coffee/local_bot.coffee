require.config
  paths:
    backbone: "../components/backbone/backbone"
    underscore: "../components/underscore/underscore"
    jquery: "../components/jquery/jquery"
    io: "/socket.io/socket.io"
    video_form: 'views/video_form'

  shim:
    underscore:
      exports: "_"

    backbone:
      deps: ["underscore"]
      exports: "Backbone"

require ['underscore', 'backbone', 'jquery', 'io', 'video_form'], (_, Backbone, $, io, VideoForm) ->
  video_form = new VideoForm()