export let genesisGenerator: typeof import('../../generator/pkg/genesis_generator');

if (process.env.NODE_ENV === 'development' || process.env.IS_OFFLINE) {
  genesisGenerator = require('../../generator/pkg/genesis_generator');
} else {
  genesisGenerator = require('./artifacts/wasm_pkg/genesis_generator');
}
