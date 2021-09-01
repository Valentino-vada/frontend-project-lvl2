import _ from 'lodash';
import boolObj from './booldata.js';
import getDataObj from './dataObj.js';

const buildingAst = (obj1, obj2) => {
  const keys = _.orderBy(Object.keys({ ...obj1, ...obj2 }));
  return keys.reduce((resultAcc, key) => {
    const objKey1 = boolObj(obj1, key);
    const objKey2 = boolObj(obj2, key);
    const valueObj1 = getDataObj(obj1, key);
    const valueObj2 = getDataObj(obj2, key);
    if (!objKey2) {
      return { ...resultAcc, [`- ${key}`]: valueObj1 ? buildingAst(obj1[key], obj1[key]) : obj1[key] };
    }
    if (!objKey1) {
      return { ...resultAcc, [`+ ${key}`]: valueObj2 ? buildingAst(obj2[key], obj2[key]) : obj2[key] };
    }
    if (valueObj1 && valueObj2) {
      return { ...resultAcc, [`  ${key}`]: buildingAst(obj1[key], obj2[key]) };
    }
    if (!_.isEqual(obj1[key], obj2[key])) {
      return {
        ...resultAcc,
        [`- ${key}`]: valueObj1 ? buildingAst(obj1[key], obj1[key]) : obj1[key],
        [`+ ${key}`]: valueObj2 ? buildingAst(obj2[key], obj2[key]) : obj2[key],
      };
    }
    return { ...resultAcc, [`  ${key}`]: obj1[key] };
  }, {});
};

export default buildingAst;
