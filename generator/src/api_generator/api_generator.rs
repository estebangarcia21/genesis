/// Capable of generating a Javascript API.
pub trait ApiGenerator {
    /// Generates an API.
    ///
    /// ## Arguments
    ///
    /// * `ts` - If true, the API will be generated in TypeScript
    fn generate(&self, opts: GenerationOptions) -> GenerationOutput;
}

/// Options for generating an API.
pub struct GenerationOptions {
    pub ts: bool,
}

/// The result of generatinog an API.
pub struct GenerationOutput {
    pub time: u32,
    pub artifact: Vec<u8>,
}
