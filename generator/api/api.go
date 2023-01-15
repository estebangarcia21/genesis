package api

type API struct {
	Name          string
	Version       string
	RepositoryURL string
	Resources     []Resource
}

type APIProvider interface {
	CreateAPI(model string) *API
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

// CreateFileAssets returns a map of relative paths to file content bytes.
func (a *API) CreateFileAssets() map[string][]byte {
	return make(map[string][]byte)
}
