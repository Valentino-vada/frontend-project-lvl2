/* eslint-disable import/extensions */
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { readFileSync } from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const expectedJson = readFileSync(getFixturePath('expectedJson.txt'), 'utf8');
const pathFile1 = getFixturePath('file1.json');
const pathFile2 = getFixturePath('file2.json');
test('Comparison of flat json files', () => {
  expect(genDiff(pathFile1, pathFile2)).toBe(expectedJson);
});
