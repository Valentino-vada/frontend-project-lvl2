// import _ from 'lodash';
import boolObj from './booldata.js';
import getDataObj from './dataObj.js';

const buildingAst = (obj1, obj2) => {
  const keys = Object.keys({ ...obj1, ...obj2 })
    .sort((key1, key2) => key1.localeCompare(key2));
  const result = {};
  keys.forEach((key) => {
    const objKey1 = boolObj(obj1, key);
    const objKey2 = boolObj(obj2, key);
    const valueObj1 = getDataObj(obj1, key);
    const valueObj2 = getDataObj(obj2, key);
    if (objKey1 && objKey2) {
      if (valueObj1 && valueObj2) {
        result[`  ${key}`] = buildingAst(obj1[key], obj2[key]);
      } else if (valueObj1 && !valueObj2) {
        result[`- ${key}`] = buildingAst(obj1[key], obj1[key]);
        result[`+ ${key}`] = obj2[key];
      } else if (!valueObj1 && valueObj2) {
        result[`- ${key}`] = obj1[key];
        result[`+ ${key}`] = buildingAst(obj2[key], obj2[key]);
      } else if (obj1[key] === obj2[key]) {
        result[`  ${key}`] = obj1[key];
      } else {
        result[`- ${key}`] = obj1[key];
        result[`+ ${key}`] = obj2[key];
      }
    } else if (objKey1 && !objKey2) {
      if (valueObj1) {
        result[`- ${key}`] = buildingAst(obj1[key], obj1[key]);
      } else {
        result[`- ${key}`] = obj1[key];
      }
    } else if (!objKey1 && objKey2) {
      if (valueObj2) {
        result[`+ ${key}`] = buildingAst(obj2[key], obj2[key]);
      } else {
        result[`+ ${key}`] = obj2[key];
      }
    }
    return null;
  });
  return result;
};

export default buildingAst;
