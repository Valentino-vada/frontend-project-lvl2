export default (obj, key) => {
  const type = typeof obj[key];
  const boolObj = obj[key] !== null && (type === 'object' || type === 'function');
  const boolArr = Array.isArray(obj[key]);
  return boolObj && !boolArr;
};
