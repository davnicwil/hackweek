import Express from 'express';
import { readFileSync } from 'fs';
import readHtml from './readHtml';
import { renderToString } from 'react-dom/server';
import App from '../components/presentation/App';
import React from 'react';

const renderMarkup = () => (
  readHtml().replace(
    '#react-generated-markup',
    renderToString(<App />)
  )
);

const port = 5555;
const app = Express();

app.get('/healthcheck', (req, res) => {
  res.status(204).send();
});

app.get('/', (req, res) => {
  res.status(200).send(renderMarkup());
});

app.use('/app.js', Express.static(`${__dirname}/../../../app.js`));
app.use('/app.css', Express.static(`${__dirname}/../../css/app.css`));

app.listen(port, () => {
  console.log(`\n\n--- server started, listening on port ${port} ---\n\n`);
});
