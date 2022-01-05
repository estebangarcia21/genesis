use std::collections::HashMap;

use super::{read_ast_nodes, Template};

macro_rules! interpolation_map {
    ( $( $n:expr, $v:expr );* ) => {
        {
            let mut map: HashMap<&str, &str> = HashMap::new();


            $(
                map.insert($n, $v);
            )*

            map
        }
    };
}

pub fn generate_project() {
    let nodes = read_ast_nodes(Template::CrudRoute);

    let map = interpolation_map!(
        "SLOC", Template::CrudRoute.as_ref();
        "EXPORT", "export default router;"
    );

    todo!()
}

#[cfg(test)]
mod test {
    use super::*;

    #[test]
    fn test_interpolation_map_macro() {
        let map = interpolation_map!("a", "b"; "c", "d");

        assert_eq!(map.get("a"), Some(&"b"));
        assert_eq!(map.get("c"), Some(&"d"));
    }
}
