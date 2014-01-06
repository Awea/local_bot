(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['underscore', 'backbone', 'jquery', 'io'], function(_, Backbone, $, io) {
    var VideoForm, _ref;
    return VideoForm = (function(_super) {
      var url_to_videoId;

      __extends(VideoForm, _super);

      function VideoForm() {
        _ref = VideoForm.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      VideoForm.prototype.el = "div[data-view='video_form']";

      VideoForm.prototype.events = {
        "click .submit": "send_video"
      };

      VideoForm.prototype.initialize = function() {
        return this.conn = io.connect("http://localhost");
      };

      VideoForm.prototype.send_video = function() {
        var url;
        url = this.$("#url").val();
        return this.conn.emit("add_video", {
          id: url_to_videoId(url),
          url: url
        });
      };

      url_to_videoId = function(url) {
        var offset, video_id;
        video_id = url.split("v=")[1];
        offset = video_id.indexOf("&");
        if (offset !== -1) {
          video_id = video_id.substring(0, offset);
        }
        return video_id;
      };

      return VideoForm;

    })(Backbone.View);
  });

}).call(this);
