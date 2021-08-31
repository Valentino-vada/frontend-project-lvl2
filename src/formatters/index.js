import stylish from './stylish.js';
import plain from './plain.js';
import jsonFormatter from './json.js';

const makeFormatter = (format) => {
  if (format === 'json') {
    return jsonFormatter;
  }
  if (format === 'plain') {
    return plain;
  }
  return stylish;
};

export default makeFormatter;
