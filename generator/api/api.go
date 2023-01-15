package api

import "fmt"

type API struct {
	Name          string
	Version       string
	RepositoryURL string
	Resources     []Resource
}

type ResourceProvider interface {
	ParseResources(string) []Resource
}

type Resource struct {
	Name       string
	Attributes []ResourceAttribute
}

type ResourceAttributeDatatype int

const (
	Integer32 ResourceAttributeDatatype = iota
	String
	Funnel
)

type ResourceAttribute struct {
	Name     string
	Datatype ResourceAttributeDatatype
}

func ResourceAttributeDatatypeFromString(s string) ResourceAttributeDatatype {
	switch s {
	case "Int":
		return Integer32
	case "Integer":
		return Integer32
	default:
		panic(fmt.Sprintf("unrecognized model type '%s'. Please open an issue to add support for this data type", s))
	}
}

// CreateAssetTree returns a map of relative paths to file content bytes.
func (a *API) CreateAssetTree() map[string][]byte {
	return make(map[string][]byte)
}
