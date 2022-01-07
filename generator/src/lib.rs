mod generator;
mod generators;
mod templates;

use generator::Generator;
use generators::Express;
use wasm_bindgen::prelude::wasm_bindgen;

/// Generates a containerized REST API using ExpressJS.
///
/// Returns a JSON string representing a serialized `ApiGeneratedArtifact`.
///
/// ## Arguments
///
/// * `generator` - A string representing the generator to use for the API.
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
pub fn generate_express_api(opts: &str) -> String {
    let express: Express = serde_json::from_str(opts).unwrap();

    let generation = express.generate();

    serde_json::to_string(&generation).unwrap()
}

#[wasm_bindgen]
pub fn generate_serverless_express_api(_opts: &str) -> String {
    todo!();
}
