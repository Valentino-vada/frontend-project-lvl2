import getDataObj from '../dataObj.js';
import getDataStr from '../dataStr.js';

const formatPlain = (obj, key) => {
  if (getDataObj(obj, key)) {
    return '[complex value]';
  }
  if (getDataStr(obj, key)) {
    return `'${obj[key]}'`;
  }
  return obj[key];
};

const plain = (obj) => {
  const result = [];
  const iter = (object, complexKey = '') => {
    const keys = Object.keys(object);
    keys.forEach((key) => {
      const clearKey = key.substring(2);
      const plusKey = `+ ${clearKey}`;
      const minusKey = `- ${clearKey}`;
      const fullPath = `${complexKey}${clearKey}`;
      const stringPhrase = `Property '${fullPath}' was`;
      if (key.startsWith('  ') && getDataObj(object, key)) {
        iter(object[key], `${fullPath}.`);
      } else if (key.startsWith('- ') && keys.includes(plusKey)) {
        result.push(`${stringPhrase} updated. From ${formatPlain(object, minusKey)} to ${formatPlain(object, plusKey)}`);
      } else if (key.startsWith('- ') && !keys.includes(plusKey)) {
        result.push(`${stringPhrase} removed`);
      } else if (key.startsWith('+ ') && !keys.includes(minusKey)) {
        result.push(`${stringPhrase} added with value: ${formatPlain(object, plusKey)}`);
      }
    });
  };
  iter(obj);
  return result.join('\n');
};

export default plain;
