package api_test

import (
	"testing"

	"github.com/estebangarcia21/genesis/api"
)

func TestWrite(t *testing.T) {
	template := "%ProjectName% %Version% $ModelName$"
	w := api.Writer{
		ProjectName: "Genesis",
		Version:     "1.0.0",
		ModelWriter: api.ModelWriter{
			ModelName: "User",
		},
	}

	out := w.WriteAll(template)
	expected := "Genesis 1.0.0 User"
	if out != expected {
		t.Fatalf("expected %s; got %s", expected, out)
	}
}
