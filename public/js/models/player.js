(function() {
  define(['underscore', 'backbone'], function(_, Backbone) {
    var Player;
    return Player = (function() {
      function Player(id_elem) {
        this.id_elem = id_elem;
        this.yt = new YT.Player('ytplayer', {
          height: '390',
          width: '640'
        });
        this.stopped();
      }

      Player.prototype.next_video = function(playlist) {
        var video;
        video = playlist.shift();
        return this.now_playing(video);
      };

      Player.prototype.set_video = function(playlist, video) {
        this.now_playing(video);
        return playlist.remove(video);
      };

      Player.prototype.now_playing = function(video) {
        this.yt.clearVideo();
        this.yt.loadVideoById(video.id);
        return this.state = 'playing';
      };

      Player.prototype.stopped = function() {
        return this.state = 'stopped';
      };

      Player.prototype.state = function() {
        return this.state;
      };

      Player.prototype.yt = function() {
        return this.yt;
      };

      return Player;

    })();
  });

}).call(this);
