define ['underscore', 'backbone'], (_, Backbone) ->
  class Video extends Backbone.Model
    constructor: (@id, @title) ->

    id: ->
      @id
      
    title: ->
      @title