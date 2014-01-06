(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['underscore', 'backbone'], function(_, Backbone) {
    var Video;
    return Video = (function(_super) {
      __extends(Video, _super);

      function Video(id, title) {
        this.id = id;
        this.title = title;
      }

      Video.prototype.id = function() {
        return this.id;
      };

      Video.prototype.title = function() {
        return this.title;
      };

      return Video;

    })(Backbone.Model);
  });

}).call(this);
