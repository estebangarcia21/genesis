package api_test

import (
	"reflect"
	"testing"

	"github.com/estebangarcia21/genesis/api"
)

func TestParseResources(t *testing.T) {
	schema := `
	  datasource db {
		provider = "postgresql"
		url      = env("DATABASE_URL")
	  }

	  generator client {
		provider = "prisma-client-js"
	  }
	  
	  model User {
		id           Int      @id @default(autoincrement())
		createdAt    DateTime @default(now())
		email        String   @unique
		name         String?
		role         Role     @default(USER)
		posts        Post[]
		postsPrivate Post[]?
	  }
	  
	  model Post {
		id        Int      @id @default(autoincrement())
		createdAt DateTime @default(now())
		updatedAt DateTime @updatedAt
		published Boolean  @default(false)
		title     String   @db.VarChar(255)
		author    User?    @relation(fields: [authorId], references: [id])
		authorId  Int?
	  }
	  
	  enum Role {
		USER
		ADMIN
	  }
	`

	r := api.Prisma{schema}.ParseResources()
	m := r[0]
	if m.Name != "User" {
		t.Fatalf("model name was not parsed correctly: expected %s; got %s", "User", m.Name)
	}

	attrs := m.Attributes
	expectedAttrs := []api.ResourceAttribute{
		{"id", api.Number, false, false},
		{"createdAt", api.DateTime, false, false},
		{"email", api.String, false, false},
		{"name", api.String, true, false},
		{"role", api.Unknown, false, false},
		{"posts", api.Unknown, false, true},
		{"postsPrivate", api.Unknown, true, true},
	}
	for i, attr := range attrs {
		expected := expectedAttrs[i]
		if !reflect.DeepEqual(attr, expected) {
			t.Fatalf("incorrect model generation for model %s: expected %+v; got %+v", m.Name, expected, attr)
		}
	}
}
