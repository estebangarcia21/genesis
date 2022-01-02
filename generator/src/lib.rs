mod api_generator;

use wasm_bindgen::prelude::wasm_bindgen;

use crate::api_generator::{ApiGenerator, GenerationOptions};

/// Generates a REST API using ExpressJS.
///
/// Retruns a JSON string representing a serialized `ApiGeneratedArtifact`.
///
/// ## Arguments
///
/// * `opts` - A JSON string representing the options for the REST API.
/// View the `Express` struct in the `frameworks` module for the JSON shape.
///
/// ## Examples
///
/// ```js
/// const opts = {
///    "port": 3000
/// }
///
/// genesisGenerator.generate_rest_api(JSON.stringify(opts));
/// ```
#[wasm_bindgen]
pub fn generate_rest_api(_opts: &str) -> String {
    api_generator::Express { port: 3000 }.generate(GenerationOptions { ts: false });

    // Deserialize express struct from opts string
    todo!();
}
