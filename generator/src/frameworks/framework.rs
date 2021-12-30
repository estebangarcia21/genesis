pub trait Framework {
    fn name(&self) -> &str;
    fn generate(&self) -> Vec<u8>;
}
