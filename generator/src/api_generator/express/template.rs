macro_rules! load_template {
    ($n:ident) => {
        const $n: &str = include_str!(concat!("templates/", stringify!($n), ".txt"));
    };
}

load_template!(CRUD_ROUTE);

struct TemplateParser {
    template: &'static str,
    params: Vec<String>,
}
