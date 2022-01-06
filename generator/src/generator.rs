pub trait Generator {
    fn generate(&self) -> Vec<u8>;
}
