use crate::{
    generator::Generator,
    interpolation_struct, reference_templates, static_templates,
    templates::{Template, TemplateAccumulator},
};

static_templates! { |EXPRESS_STATIC_TEMPLATES|
    ".gitignore",
    "tsconfig.json",
    "package.json",

    "src/index.js"
}

reference_templates! { |ExpressReferenceTemplates|
    CrudRoute => "crud_route"
}

interpolation_struct! { |ExpressInterpolation|
    PROJECT_NAME
}

pub struct Express {
    pub api_name: String,
    pub port: u16,
}

impl Generator for Express {
    fn generate(&self) -> Vec<Template> {
        let mut templates = TemplateAccumulator::new();

        templates.add(&mut Template::load_static_from_list(
            &EXPRESS_STATIC_TEMPLATES,
        ));

        templates.interpolate_all(
            &ExpressInterpolation {
                PROJECT_NAME: self.api_name.clone(),
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
            api_name: "test_name".to_string(),
            port: 3000,
        };

        let templates = express.generate();
        println!("Templates: {}", templates.get(2).unwrap().source);
    }
}
