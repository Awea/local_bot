define ['underscore', 'backbone', 'video'], (_, Backbone, Video) ->
  class Playlist extends Backbone.Collection
    model: Video