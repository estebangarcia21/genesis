mod frameworks;

use wasm_bindgen::prelude::wasm_bindgen;

#[wasm_bindgen]
pub fn generate(framework_name: &str) -> Vec<u8> {
    let frameworks = frameworks::loader::init();

    frameworks[framework_name].generate()
}
