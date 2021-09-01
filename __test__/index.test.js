import { fileURLToPath } from 'url';
import path, { dirname, format } from 'path';
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

const expectedBigJson = readFileSync(getFixturePath('expectedBigJson.txt'), 'utf8');
const pathFileJson3 = getFixturePath('file3.json');
const pathFileJson4 = getFixturePath('file4.json');
test('Comparison of flat bigJson files', () => {
  expect(genDiff(pathFileJson3, pathFileJson4)).toBe(expectedBigJson);
});

const expectedBigYaml = readFileSync(getFixturePath('expectedBigYaml.txt'), 'utf8');
const pathFileYaml3 = getFixturePath('file3.yaml');
const pathFileYaml4 = getFixturePath('file4.yaml');
test('Comparison of flat BigYaml files', () => {
  expect(genDiff(pathFileYaml3, pathFileYaml4)).toBe(expectedBigYaml);
});

const expectedPlain = readFileSync(getFixturePath('expectedPlain.txt'), 'utf8');
test('Comparison of flat json with plain files', () => {
  expect(genDiff(pathFileJson3, pathFileJson4, 'plain')).toBe(expectedPlain);
});

const expectedBigJsonPlain = readFileSync(getFixturePath('expectedBigJsonPlain.txt'), 'utf8');
test('Comparison of flat json with JSON files', () => {
  expect(genDiff(pathFileJson3, pathFileJson4, format)).toBe(expectedBigJsonPlain);
});
