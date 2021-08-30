import stylish from './stylish.js';
import jsonFormatter from './json.js';

const makeFormatter = (format) => {
  if (format === 'json') {
    return jsonFormatter;
  }
  return stylish;
};

export default makeFormatter;
