package api

import (
	"strings"
)

type Prisma struct {
	Schema string
}

func (p Prisma) ParseResources() []Resource {
	var resources []Resource

	var modelName string
	var modelBody []string

	lines := strings.Split(p.Schema, "\n")
	for _, l := range lines {
		if modelBody != nil {
			if strings.Contains(l, "}") {
				b := strings.TrimSpace(strings.Join(modelBody, "\n"))
				resources = append(resources, createResource(modelName, b))

				modelName = ""
				modelBody = nil
			} else {
				modelBody = append(modelBody, l)
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

	lines := strings.Split(body, "\n")
	for _, l := range lines {
		toks := strings.Fields(l)
		ty := toks[1]
		a := ResourceAttribute{
			Name:     toks[0],
			Datatype: ResourceAttributeDatatypeFromString(strings.TrimSuffix(strings.TrimSuffix(ty, "?"), "[]")),
			Optional: strings.HasSuffix(ty, "?"),
			List:     strings.HasSuffix(strings.TrimSuffix(ty, "?"), "[]"),
		}
		attrs = append(attrs, a)
	}

	return Resource{name, attrs}
}
