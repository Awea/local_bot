require 'rubygems'
require 'rake'

namespace :sources do
  task :build do
    sh "go build -o bin/local_bot sources/conn.go sources/hub.go sources/main.go sources/view.go"
  end
end