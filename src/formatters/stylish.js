import getDataObj from '../datacheck.js';

const stylish = (obj, depth = 2) => {
  const keys = Object.keys(obj);
  const result = keys.reduce((accArr, key) => {
    if (getDataObj(obj, key)) {
      return [...accArr, `${' '.repeat(depth)}${key}: ${stylish(obj[key], depth + 4)}`];
    }
    const formattedValue = String(obj[key]).trim();
    return [...accArr, `${' '.repeat(depth)}${key}: ${formattedValue}`];
  }, ['{']);
  return [...result, `${' '.repeat(depth - 2)}}`].join('\n');
};

export default stylish;
