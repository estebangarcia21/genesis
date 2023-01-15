package api

import (
	"reflect"
	"strings"
)

var writeDelimiters = []string{"%", "$"}

// Writer fills a template by looking for writeDelimters and replacing them
// with their respective value.
type Writer struct {
	ProjectName string
	Version     string
	ModelWriter
}

type ModelWriter struct {
	ModelName string
}

func (a *Writer) WriteAll(target string) string {
	out := target
	for _, attr := range a.readAttrs() {
		out = a.Write(attr, out)
	}
	return out
}

func (a *Writer) Write(attr string, target string) string {
	out := target
	for _, d := range writeDelimiters {
		s := d + attr + d
		out = strings.ReplaceAll(out, s, a.readAttrValue(attr))
	}
	return out
}

func (a *Writer) readAttrValue(attr string) string {
	r := reflect.ValueOf(a)
	f := reflect.Indirect(r).FieldByName(attr)
	return f.String()
}

func (a *Writer) readAttrs() []string {
	var attrs []string
	r := reflect.TypeOf(*a)
	for _, f := range reflect.VisibleFields(r) {
		attrs = append(attrs, f.Name)
	}
	return attrs
}
