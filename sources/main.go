package main

import (
	"log"
	"net/http"
)

func main() {
	go h.run()
	http.HandleFunc("/", serveHtml)
	http.HandleFunc("/ws", serveWs)
	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	}
}
