use super::framework::Framework;

pub struct Express;

impl Framework for Express {
    fn name(&self) -> &str {
        "express"
    }

    fn generate(&self) -> Vec<u8> {
        let mut buffer = String::new();
        buffer.push_str("const express = require('express');\n");
        buffer.push_str("const app = express();\n");
        buffer.push_str("app.get('/', (req, res) => {\n");
        buffer.push_str("    res.send('Hello World!');\n");
        buffer.push_str("});\n");
        buffer.push_str("app.listen(3000, () => {\n");
        buffer.push_str("    console.log('Example app listening on port 3000!');\n");
        buffer.push_str("});\n");
        buffer.into_bytes()
    }
}
