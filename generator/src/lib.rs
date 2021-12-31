mod frameworks;

use frameworks::express::Express;
use frameworks::framework::Framework;
use wasm_bindgen::prelude::wasm_bindgen;

/// Generates a REST API using ExpressJS.
///
/// # Arguments
///
/// * `opts` - A JSON string representing the options for the REST API.
/// View the `Express` struct in the `frameworks` module for the JSON shape.
///
/// # Examples
///
/// ```js
/// const opts = {
///    "port": 3000
/// }
///
/// genesisGenerator.generate_rest_api(JSON.stringify(opts));
/// ```
#[wasm_bindgen]
pub fn generate_rest_api(_opts: &str) -> Vec<u8> {
    Express { port: 3000 }.generate();

    todo!("Deserialize express struct from opts string")
}
