use serde::Serialize;
use std::collections::HashMap;

use regex::Regex;

pub struct TemplateAccumulator {
    inner: Vec<Template>,
}

impl TemplateAccumulator {
    pub fn new() -> Self {
        Self { inner: Vec::new() }
    }

    pub fn add_static(
        &mut self,
        static_templates: &[(&str, &str)],
        interp: &HashMap<String, String>,
    ) {
        let mut templates: Vec<Template> = static_templates
            .into_iter()
            .map(|set| Template {
                source: set.1.into(),
                path: Some(set.0.into()),
            })
            .collect();

        TemplateAccumulator::interpolate(&mut templates, interp);

        self.inner.append(&mut templates);
    }

    pub fn add_dynamic<T>(
        &mut self,
        dynamic_template: T,
        path: &str,
        interp: &HashMap<String, String>,
    ) where
        T: Into<Template>,
    {
        let mut template: Template = dynamic_template.into();

        template.path = Some(path.to_string());
        template.interpolate(interp);

        self.inner.push(template);
    }

    pub fn into_inner(self) -> Vec<Template> {
        self.inner
    }

    fn interpolate(templates: &mut Vec<Template>, interp: &HashMap<String, String>) {
        templates.iter_mut().for_each(|template| {
            template.interpolate(interp);
        });
    }
}

#[derive(Serialize, Debug)]
pub struct Template {
    pub source: String,
    pub path: Option<String>,
}

impl Template {
    pub fn new(source: String, path: Option<String>) -> Template {
        Template { source, path }
    }

    /// Interpolates an AST node into a string if it is an interpolation target.
    ///
    /// Returns `None` if the node is not an interpolation target.
    /// Returns `Some(String)` if the node is an interpolation target.
    pub fn interpolate(&mut self, map: &HashMap<String, String>) {
        for (target, new) in map {
            let re_str = format!("%{}%", target);
            let re = Regex::new(&re_str).unwrap();

            self.source = re.replace_all(&self.source, new).to_string();
        }
    }
}

impl From<String> for Template {
    fn from(source: String) -> Self {
        Template::new(source.into(), None)
    }
}

#[cfg(test)]
mod test {
    use crate::interpolation_struct;

    use super::*;

    #[test]
    fn test_interpolate() {
        interpolation_struct! { |Interpolation| name };

        let mut template = Template::from("Hello %NAME%".to_string());
        let new = "world";

        template.interpolate(
            &Interpolation {
                name: new.to_string(),
            }
            .into(),
        );

        assert_eq!(template.source, "Hello world");
    }
}

/// Generates a templates enum.
///
/// Each template file that a template key is mapped to is resolved in `templates/key.template`.
///
/// # Example
///
/// ```ignore
/// # use genesis_generator::dynamic_templates;
/// #
/// reference_templates! { |TemplateEnumName|
///     TemplateEnumKey => "template"
/// }
/// ```
#[macro_export]
macro_rules! dynamic_templates {
    ( |$v:vis $i:ident| $( $k:ident => $l:expr; { $( $kn:ident ),* }),* ) => {
        mod dyn_interp {
            use crate::interpolation_struct;

            $(
                interpolation_struct! { |pub $k| $( $kn ),* }
            )*
        }

        $v enum $i {
            $( $k, )*
            Other(String),
        }

        impl From<$i> for Template {
            fn from(i: $i) -> Self {
                match i {
                    $( $i::$k => Template {
                        source: include_str!(concat!("templates/", $l, ".template")).into(),
                        path: None,
                    }, )*
                    $i::Other(s) => Template::new(s.into(), None),
                }
            }
        }

        impl From<String> for $i {
            fn from(s: String) -> Self {
                $i::Other(s)
            }
        }
    };
}

#[macro_export]
macro_rules! interpolation_struct {
    ( |$v:vis $i:ident| $( $k:ident ),* ) => {
        use std::collections::HashMap;

        #[allow(non_snake_case)]
        $v struct $i {
            $( pub $k: String, )*
        }

        impl From<$i> for HashMap<String, String> {
            fn from(i: $i) -> Self {
                let mut map = HashMap::new();

                $(
                    map.insert(stringify!($k).to_string().to_uppercase(), i.$k.clone());
                )*

                map
            }
        }
    };
}

#[macro_export]
macro_rules! static_templates {
    ( |$v:vis $i:ident| $( $t:expr ),* ) => {
        use crate::__macro_repeat_count;

        $v const $i: [(&str, &str); __macro_repeat_count!($($t)*)] = [
            $(
                ($t, include_str!(concat!("project/", $t, ".template"))),
            )*
        ];
    };
}

#[macro_export]
macro_rules! imap {
    ( $( $n:expr, $s:expr => { $($fk:expr => $fv:expr),* } ),* ) => {{
        let mut artifacts: Vec<Artifact> = Vec::new();

        $(
            let mut artifact = Artifact {
                name: $n.to_string(),
                content: $s.as_ref().to_string(),
            };

            let mut fields: HashMap<String, String> = HashMap::new();

            $(
                fields.insert($fk.to_string(), $fv.to_string());
            )*

            for (k, v) in fields {
                artifact.content = interpolate(&artifact.content, &k, &v);
            }

            artifacts.push(artifact);
        )*

        artifacts
    }};
}

#[macro_export]
macro_rules! __macro_repeat_count {
    () => (0usize);
    ( $x:tt $($xs:tt)* ) => (1usize + __macro_repeat_count!($($xs)*));
}
