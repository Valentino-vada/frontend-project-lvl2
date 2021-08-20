import _ from 'lodash';
import getFilesData from './parse.js';

const genDiff = (pathFile1, pathFile2) => {
  const filesData = getFilesData(pathFile1, pathFile2);

  const keys = Object.keys(filesData[0]).concat(Object.keys(filesData[1]));
  const sortedKeys = _.uniq(keys).sort((key1, key2) => key1.localeCompare(key2));
  const result = [];
  sortedKeys.forEach((key) => {
    if (_.has(filesData[0], key) && _.has(filesData[1], key)) {
      if (filesData[0][key] === filesData[1][key]) {
        result.push(`  ${key}: ${filesData[0][key]}`);
      } else {
        result.push(`- ${key}: ${filesData[0][key]}`);
        result.push(`+ ${key}: ${filesData[1][key]}`);
      }
    } else if (_.has(filesData[0], key) && !_.has(filesData[1], key)) {
      result.push(`- ${key}: ${filesData[0][key]}`);
    } else if (!_.has(filesData[0], key) && _.has(filesData[1], key)) {
      result.push(`+ ${key}: ${filesData[1][key]}`);
    }
  });
  return `{\n  ${result.join('\n  ')}\n}`;
};

export default genDiff;
