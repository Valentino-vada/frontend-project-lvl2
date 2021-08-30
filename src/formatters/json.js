import getDataObj from '../datacheck.js';

const formatDistanceKeys = (obj) => {
  const result = Object.keys(obj)
    .map((key) => {
      const dataObject = getDataObj(obj, key);
      return key.startsWith('  ')
        ? { [key.substring(2)]: dataObject ? formatDistanceKeys(obj[key]) : obj[key] }
        : { [key]: dataObject ? formatDistanceKeys(obj[key]) : obj[key] };
    });
  return Object.assign({}, ...result);
};

const jsonFormatter = (obj) => {
  const withoutDistanceKeys = formatDistanceKeys(obj);
  return JSON.stringify(withoutDistanceKeys, null, '  ');
};

export default jsonFormatter;
