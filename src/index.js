import fs from 'fs';
import _ from 'lodash';

const genDiff = (pathFile1, pathFile2) => {
  const file1 = fs.readFileSync(pathFile1, 'utf8');
  const file2 = fs.readFileSync(pathFile2, 'utf8');
  const file1Data = JSON.parse(file1);
  const file2Data = JSON.parse(file2);

  const keysData = { ...file1Data, ...file2Data };

  const compareKeys = (acc, value, key) => {
    if (_.has(file1Data, key) && _.has(file2Data, key)) {
      return file1Data[key] === file2Data[key]
        ? [...acc, `   ${key}: ${value}`]
        : [...acc, ` + ${key}: ${file2Data[key]}`, ` - ${key}: ${file1Data[key]}`];
    }
    if (!_.has(file1Data, key) && _.has(file2Data, key)) {
      return [...acc, ` + ${key}: ${value}`];
    }
    return [...acc, ` - ${key}: ${value}`];
  };

  const diffCollection = _.reduce(keysData, compareKeys, '');
  const diffString = `{\n${diffCollection.join('\n')}\n}`;
  return diffString;
};

export default genDiff;
