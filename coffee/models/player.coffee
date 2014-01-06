define ['underscore', 'backbone'], (_, Backbone) ->
  class Player
    constructor: (@id_elem) ->
      @yt = new YT.Player('ytplayer', 
        height: '390',
        width: '640'
      )
      @stopped()

    next_video: (playlist) ->
      video = playlist.shift()
      @now_playing video

    set_video: (playlist, video) ->
      @now_playing video
      playlist.remove video

    now_playing: (video) ->
      @yt.clearVideo()
      @yt.loadVideoById video.id
      @state = 'playing'

    stopped: ->
      @state = 'stopped'

    state: ->
      @state

    yt: ->
      @yt