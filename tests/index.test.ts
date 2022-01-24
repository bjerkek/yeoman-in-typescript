import path = require('path');
import assert = require('yeoman-assert');
import helpers = require('yeoman-test');
import { copyFileSync } from 'fs';

describe('Testing generator in and with Typescript', () => {
  it('Should generate index.html inside folder Foo', async () => {
    const name = 'Foo';
    const title = 'Bar';
    await helpers.run(path.join(__dirname, '../src/app/index.ts'))
        .inTmpDir((dir) => {
          copyFileSync(path.join(__dirname, '../tests/mock/mock.xml'), path.join(dir, 'mock.xml'));
        })
        .withPrompts({
          name,
          title
        })

      assert.file([`${name}/index.html`, 'mock.xml']);
      assert.fileContent(`${name}/index.html`, 
`<html>
  <head>
    <title>${title}</title>
  </head>
</html>`
      )
  });
});
