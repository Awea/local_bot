# Hello this is another bot

## What can I do for you

Actually my mission is just to get a youtube link then add it to a playlist.
I will play each link from my playlist until they finish.
When I haven't any other link to play, I just stop and wait for a new link.

## Get dependencies

### back-end

* [Nodejs](http://nodejs.org/)
  * __Production__
    * [npm](https://npmjs.org/)
    * [Express](http://expressjs.com/)
    * [Socket.IO](http://socket.io/)
  * __Development__
    * [coffee-script](http://coffeescript.org/)
    * [nodemon](http://nodemon.io/)
    * [Jitter](https://github.com/TrevorBurnham/Jitter)
* [Ruby](https://www.ruby-lang.org/fr/)
  * __Development__
    * [bundler](http://bundler.io/)
    * [Foreman](https://github.com/ddollar/foreman)

```shell
  npm install
  bundle
```

### front-end 

* [Bower](http://bower.io/)
  * [jQuery](http://jquery.com/)
  * [BackboneJS](http://backbonejs.org/)
  * [UnderscoreJS](http://underscorejs.org/)
  * [RequireJS](http://requirejs.org/)

```shell
  bower install
```

## Start the development server

```shell
  foreman start
```

## Todo

* Support more links/players
* Add a visible playlist with crud stuff