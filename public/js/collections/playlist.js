(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['underscore', 'backbone', 'video'], function(_, Backbone, Video) {
    var Playlist, _ref;
    return Playlist = (function(_super) {
      __extends(Playlist, _super);

      function Playlist() {
        _ref = Playlist.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Playlist.prototype.model = Video;

      return Playlist;

    })(Backbone.Collection);
  });

}).call(this);
