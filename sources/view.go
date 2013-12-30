package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
)

func serveHtml(w http.ResponseWriter, r *http.Request) {
	body, _ := ioutil.ReadFile("views/index.html")
	fmt.Fprintf(w, "%s", body)
}
