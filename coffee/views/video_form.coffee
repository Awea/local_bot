define ['underscore', 'backbone', 'jquery', 'io'], (_, Backbone, $, io) ->
  class VideoForm extends Backbone.View
    el: "div[data-view='video_form']"
    events:
      "click .submit": "send_video"

    initialize: ->
      @conn = io.connect("http://localhost")

    send_video: ->
      url = @.$("#url").val()
      @conn.emit "add_video",
        id: url_to_videoId(url)
        url: url

    url_to_videoId = (url) -> 
      video_id = url.split("v=")[1]
      offset = video_id.indexOf("&")
      video_id = video_id.substring(0, offset)  unless offset is -1
      video_id