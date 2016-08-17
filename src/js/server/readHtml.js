import { readFileSync } from 'fs';

export default () => (
  readFileSync(
    './build/compiled/html/index.html',
    {
      encoding: 'utf8'
    }
  )
);
