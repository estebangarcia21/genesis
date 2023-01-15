package main

import (
	"embed"
	"fmt"
)

var projectAssets = "static/templates/project"

//go:embed static/*
var templates embed.FS

func main() {
	dirEntrys, _ := templates.ReadDir(projectAssets)
	for t := range dirEntrys {
		fe := dirEntrys[t]
		if !fe.IsDir() {
			f, _ := templates.ReadFile(fmt.Sprintf("%s/%s", projectAssets, fe.Name()))
			templateString := string(f)

			fmt.Printf("----- %s -----\n", fe.Name())
			fmt.Println(templateString)
		}
	}
}
