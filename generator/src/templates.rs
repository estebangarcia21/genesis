use std::{collections::HashMap, path::Path};

use regex::Regex;

pub struct TemplateAccumulator {
    inner: Vec<Template>,
}

impl TemplateAccumulator {
    pub fn new() -> Self {
        Self { inner: Vec::new() }
    }

    pub fn add(&mut self, templates: &mut Vec<Template>) {
        self.inner.append(templates);
    }

    pub fn interpolate_all(&mut self, interpolation_legend: &HashMap<String, String>) {
        for template in &mut self.inner {
            template.interpolate(interpolation_legend);
        }
    }

    pub fn into_inner(self) -> Vec<Template> {
        self.inner
    }
}

#[derive(Debug)]
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

    pub fn load_static_from_list(templates: &[(&str, &str)]) -> Vec<Template> {
        templates
            .into_iter()
            .map(|set| Template {
                source: set.1.into(),
                path: Some(set.0.into()),
            })
            .collect()
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
        interpolation_struct! { |Interpolation| NAME };

        let mut template = Template::from("Hello %NAME%".to_string());
        let new = "world";

        template.interpolate(
            &Interpolation {
                NAME: new.to_string(),
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
macro_rules! reference_templates {
    ( |$v:vis $i:ident| $( $k:ident => $l:expr ),* ) => {
        $v enum $i {
            $( $k, )*
            Other(String),
        }

        impl AsRef<str> for $i {
            fn as_ref(&self) -> &str {
                match self {
                    $(
                        $i::$k => include_str!(concat!("templates/", $l, ".template")),
                    )*
                    $i::Other(s) => s.as_str()
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
                    map.insert(stringify!($k).to_string(), i.$k.clone());
                )*

                map
            }
        }
    };
}

#[macro_export]
macro_rules! __macro_repeat_count {
    () => (0usize);
    ( $x:tt $($xs:tt)* ) => (1usize + __macro_repeat_count!($($xs)*));
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
