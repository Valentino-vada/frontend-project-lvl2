import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { readFileSync } from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const expectedJson = readFileSync(getFixturePath('expectedJson.txt'), 'utf8');
const pathFileJson1 = getFixturePath('file1.json');
const pathFileJson2 = getFixturePath('file2.json');
test('Comparison of flat json files', () => {
  expect(genDiff(pathFileJson1, pathFileJson2)).toBe(expectedJson);
});

const expectedYml = readFileSync(getFixturePath('expectedYml.txt'), 'utf8');
const pathFileYml1 = getFixturePath('file1.yml');
const pathFileYml2 = getFixturePath('file2.yml');
test('Comparison of flat yml files', () => {
  expect(genDiff(pathFileYml1, pathFileYml2)).toBe(expectedYml);
});
