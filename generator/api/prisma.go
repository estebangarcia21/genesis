package api

import "strings"

type Prisma struct{}

func (p Prisma) ParseResources(prismaSchema string) []Resource {
	var resources []Resource

	var modelName string
	var modelBody []string

	lines := strings.Split("\n", "")
	for _, l := range lines {
		if modelBody != nil {
			modelBody = append(modelBody, l)
			if strings.Contains(l, "}") {
				b := strings.Join(modelBody, "")
				resources = append(resources, createResource(modelName, b))

				modelName = ""
				modelBody = nil
			}
			continue
		}

		if strings.Contains(l, "model") {
			n := strings.ReplaceAll(l, "model", "")
			n = strings.ReplaceAll(n, "{", "")
			n = strings.TrimSpace(n)

			modelName = n
			modelBody = make([]string, 0)
		}

	}

	return resources
}

func createResource(name string, body string) Resource {
	var attrs []ResourceAttribute

	lines := strings.Split("\n", "")
	for _, l := range lines {
		t := strings.Split(l, " ")
		a := ResourceAttribute{Name: t[0], Datatype: ResourceAttributeDatatypeFromString(t[1])}
		attrs = append(attrs, a)
	}

	return Resource{name, attrs}
}
