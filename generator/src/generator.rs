use crate::templates::Template;

pub trait Generator {
    fn generate(&self) -> Vec<Template>;
}
