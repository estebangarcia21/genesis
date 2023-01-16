package api

import (
	"strings"
)

type API struct {
	Name          string
	Version       string
	RepositoryURL string
	Resources     []Resource
}

type ResourceProvider interface {
	ParseResources() []Resource
}

type Resource struct {
	Name       string
	Attributes []ResourceAttribute
}

type ResourceAttributeDatatype int

const (
	Number ResourceAttributeDatatype = iota
	Boolean
	String
	Date
	DateTime
	Unknown
)

func (r ResourceAttributeDatatype) String() string {
	switch r {
	case Number:
		return "Number"
	case String:
		return "String"
	case Date, DateTime:
		return "Date"
	case Unknown:
		return "Unknown"
	default:
		return "<?>"
	}
}

func ResourceAttributeDatatypeFromString(s string) ResourceAttributeDatatype {
	if v, ok := map[string]ResourceAttributeDatatype{
		"integer":  Number,
		"int":      Number,
		"long":     Number,
		"uint":     Number,
		"float":    Number,
		"double":   Number,
		"datetime": DateTime,
		"date":     DateTime,
		"string":   String,
		"bool":     Boolean,
		"boolean":  Boolean,
	}[strings.ToLower(s)]; ok {
		return v
	}
	return Unknown
}

type ResourceAttribute struct {
	Name     string
	Datatype ResourceAttributeDatatype
	Optional bool
	List     bool
}

// CreateAssetTree returns a map of relative paths to file content bytes.
func (a *API) CreateAssetTree() map[string][]byte {
	return make(map[string][]byte)
}
