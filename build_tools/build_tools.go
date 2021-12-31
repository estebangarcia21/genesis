package main

import (
	"fmt"
	"log"
	"os"

	s "github.com/estebangarcia21/subprocess"
)

var buildTools = map[string][]*s.Subprocess{
	"build_wasm": {s.New("wasm-pack", s.Args("build", "--target", "nodejs"), s.Context("../generator"))},
}

func main() {
	tool := os.Args[1]

	if sps, ok := buildTools[tool]; ok {
		for _, subprocess := range sps {
			if err := subprocess.Exec(); err != nil {
				log.Fatalln(err)
			}
		}

	} else {
		fmt.Printf("Invalid tool %s. Availble tools are:\n", tool)

		for k := range buildTools {
			fmt.Printf("\t- %s\n", k)
		}
	}
}
