use crate::api_generator::{GenerationOptions, GenerationOutput, ApiGenerator};

pub struct Express {
    pub port: u32,
}

impl ApiGenerator for Express {
    fn generate(&self, opts: GenerationOptions) -> GenerationOutput {
        todo!()
    }
}
