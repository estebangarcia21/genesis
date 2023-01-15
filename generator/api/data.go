package api

type AssetWriter struct {
	ProjectName string
	Version     string
	Model       AssetWriterModel
}

type AssetWriterModel struct {
	Name string
}
