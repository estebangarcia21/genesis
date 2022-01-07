use serde::Deserialize;

use crate::{
    dynamic_templates,
    generator::Generator,
    interpolation_struct, static_templates,
    templates::{Template, TemplateAccumulator},
};

static_templates! { |STATIC_TEMPLATES|
    ".gitignore",
    "tsconfig.json",
    "package.json",

    "src/index.js"
}

dynamic_templates! { |DynamicTemplates|
    CrudRoute => "crud_route"; {
        get_routes,
        post_routes,
        put_routes,
        delete_routes
    }
}

interpolation_struct! { |StaticInterpolation|
    project_name
}

#[derive(Deserialize)]
pub struct Express {
    pub name: String,
    pub port: u16,
}

impl Generator for Express {
    fn generate(&self) -> Vec<Template> {
        let mut templates = TemplateAccumulator::new();

        templates.add_static(
            &STATIC_TEMPLATES,
            &StaticInterpolation {
                project_name: self.name.clone(),
            }
            .into(),
        );

        templates.add_dynamic(
            DynamicTemplates::CrudRoute,
            "graphql/dynamic_test.js",
            &dyn_interp::CrudRoute {
                get_routes: "router.get();".to_string(),
                post_routes: "router.post();".to_string(),
                put_routes: "router.put();".to_string(),
                delete_routes: "router.delete();".to_string(),
            }
            .into(),
        );

        templates.into_inner()
    }
}

#[cfg(test)]
mod test {
    use super::*;

    #[test]
    fn test_generate() {
        let express = Express {
            name: "test_name".to_string(),
            port: 3000,
        };

        let templates = express.generate();
        for t in templates {
            println!(
                "Template: {} \n\n{} \n--------\n",
                t.path.unwrap_or("None".to_string()),
                t.source
            );
        }

        assert_eq!(0, 1);
    }
}
