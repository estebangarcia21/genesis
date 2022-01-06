use regex::Regex;

/// Interpolates an AST node into a string if it is an interpolation target.
///
/// Returns `None` if the node is not an interpolation target.
/// Returns `Some(String)` if the node is an interpolation target.
pub fn interpolate<T>(source: &str, name: &str, new: T) -> String
where
    T: AsRef<str>,
{
    let re_str = format!("%{}%", name);
    let re = Regex::new(&re_str).unwrap();

    re.replace_all(source, new.as_ref()).into_owned()
}

#[cfg(test)]
mod test {
    use super::*;

    #[test]
    fn test_interpolate() {
        let source = "Hello %NAME%";
        let new = "world";

        let result = interpolate(source, "NAME", new);

        assert_eq!(result, "Hello world".to_string());
    }
}

/// Generates a templates enum.
///
/// Each template file that a template key is mapped to is resolved in `templates/key.template`.
///
/// # Example
///
/// ```rust
/// # use crate::templates;
/// #
/// templates_enum! { |TemplateEnumName|
///     TemplateEnumKey => "template"
/// }
/// ```
#[macro_export]
macro_rules! templates_enum {
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
    };
}

#[macro_export]
macro_rules! interpolation_legend {
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
