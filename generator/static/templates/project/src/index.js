import express from 'express';
import routes from './routes';

function main() {
  const app = express();

  app.use('/%APIPrefix%', routes);

  const port = 3000;
  app.listen(port, () =>
    console.log(`Server started at http://localhost:${port}`)
  );
}

main();
