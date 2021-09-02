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
  const iter = (object, complexKey = '') => {
    const keys = Object.keys(object);
    return keys.reduce((arrayAcc, key) => {
      const clearKey = key.substring(2);
      const minusKey = `- ${clearKey}`;
      const plusKey = `+ ${clearKey}`;
      const fullPath = `${complexKey}${clearKey}`;
      const stringStartPhrase = `Property '${fullPath}' was`;
      if (key.startsWith('  ') && getDataObj(object, key)) {
        return [...arrayAcc, iter(object[key], `${fullPath}.`)];
      } if (key.startsWith('- ') && keys.includes(plusKey)) {
        return [...arrayAcc, `${stringStartPhrase} updated. From ${formatPlain(object, minusKey)} to ${formatPlain(object, plusKey)}`];
      } if (key.startsWith('- ') && !keys.includes(plusKey)) {
        return [...arrayAcc, `${stringStartPhrase} removed`];
      } if (key.startsWith('+ ') && !keys.includes(minusKey)) {
        return [...arrayAcc, `${stringStartPhrase} added with value: ${formatPlain(object, plusKey)}`];
      }
      return arrayAcc;
    }, []);
  };
  return iter(obj).flat(Infinity).join('\n');
};

export default plain;
