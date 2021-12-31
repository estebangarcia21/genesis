import express from 'express';

async function main() {
  const app = express();

  app.listen(3000, () => {
    console.log('Listening on port 3000');
  });
}

main().catch(console.log);
