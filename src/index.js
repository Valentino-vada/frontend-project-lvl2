import buildingAst from './building.js';
import parsers from './parsers.js';
import makeFormatter from './formatters/index.js';

const genDiff = (filepath1, filepath2, format) => {
  const diff = buildingAst(parsers(filepath1), parsers(filepath2));
  if (format) {
    return makeFormatter(format)(diff);
  }
  return makeFormatter()(diff);
};

export default genDiff;
