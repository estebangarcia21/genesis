use crate::{generator::Generator, templates_enum};

templates_enum! { |pub ExpressTemplate|
    CrudRoute => "crud_route"
}

pub struct Express {
    pub port: u16,
}

impl Generator for Express {
    fn generate(&self) -> Vec<u8> {
        todo!()
    }
}
