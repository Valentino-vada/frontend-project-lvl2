import { readFileSync } from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const parsers = (pathFile) => {
  const absolutePath = path.resolve(pathFile);
  const format = path.extname(pathFile);

  const fileData = readFileSync(absolutePath, 'utf8');
  if (format === '.json') {
    return JSON.parse(fileData);
  }
  if (format === '.yml' || format === '.yaml') {
    return yaml.load(fileData);
  }
  return null;
};

export default parsers;
