use std::collections::VecDeque;

macro_rules! load_templates {
    ( $( $n:ident ),* ) => {
        pub enum Template {
            $( $n )*
        }

        impl AsRef<str> for Template {
            fn as_ref(&self) -> &str {
                match self {
                    $(
                        Template::$n => include_str!(concat!("templates/", stringify!($n), ".txt")),
                    )*
                }
            }
        }
    };
}

load_templates![CrudRoute];

/// Represents a line and column value.
#[derive(Clone, Copy)]
pub struct Location {
    line: usize,
    column: usize,
}

impl Location {
    /// Returns a location with the line and column at 0.
    pub fn default() -> Self {
        Self { line: 0, column: 0 }
    }

    pub fn line(&self) -> usize {
        self.line
    }

    pub fn column(&self) -> usize {
        self.column
    }

    pub fn advance_line(&mut self, line: usize) {
        self.line += line;
        self.column = 0;
    }

    pub fn advance_column(&mut self, column: usize) {
        self.column += column;
    }
}

pub enum AstNode {
    InterpolationTarget {
        name: String,
        start: Location,
        end: Location,
        typescript_only: bool,
    },
    CodePort,
}

/// Reads the AST nodes in the order they are written in the template.
pub fn read_ast_nodes<T>(template_sdl: T) -> Vec<AstNode>
where
    T: AsRef<str>,
{
    let mut nodes: Vec<AstNode> = Vec::new();
    let mut queue: VecDeque<AstNode> = VecDeque::new();

    let mut current_loc = Location::default();

    for c in template_sdl.as_ref().chars() {
        current_loc.advance_column(1);

        match c {
            '\n' => current_loc.advance_line(1),
            '%' => {
                if let Some(node) = queue.front_mut() {
                    if let AstNode::InterpolationTarget { end, .. } = node {
                        *end = current_loc;

                        nodes.push(queue.pop_front().unwrap());
                    }
                } else {
                    queue.push_front(
                        AstNode::InterpolationTarget {
                            start: current_loc,
                            end: Location::default(),
                            name: String::new(),
                            typescript_only: false,
                        }
                        .into(),
                    );
                }
            }
            _ => {
                if let Some(node) = queue.front_mut() {
                    if let AstNode::InterpolationTarget { name, .. } = node {
                        name.push(c);
                    }
                }
            }
        }
    }

    nodes
}

#[cfg(test)]
mod test {
    use super::*;

    #[test]
    fn test_location() {
        let mut loc = Location::default();

        assert_eq!(loc.line(), 0);
        assert_eq!(loc.column(), 0);

        loc.advance_line(1);
        assert_eq!(loc.line(), 1);
        assert_eq!(loc.column(), 0);

        loc.advance_column(1);
        assert_eq!(loc.line(), 1);
        assert_eq!(loc.column(), 1);

        loc.advance_line(1);
        assert_eq!(loc.line(), 2);
        assert_eq!(loc.column(), 0);
    }

    #[test]
    fn test_load_templates() {
        let template: &str = Template::CrudRoute.as_ref();
        let raw_template = include_str!("templates/CrudRoute.txt");

        assert_eq!(template, raw_template);
    }

    #[test]
    fn test_read_interpolation_target_ast_node() {
        let template = "import 'some_library'; %SLOC%";

        let ast_nodes = read_ast_nodes(template);
        let interpolation_node = ast_nodes
            .get(0)
            .expect("there should only be one ast node in the template");

        match interpolation_node {
            AstNode::InterpolationTarget {
                name, start, end, ..
            } => {
                assert_eq!(start.column, 24);
                assert_eq!(end.column, 29);
                assert_eq!(name, "SLOC");
            }
            _ => panic!("Expected the ast node to be an interpolation target"),
        }
    }
}
