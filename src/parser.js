import { readFileSync } from 'fs';
import path from 'path';

const getFilesData = (pathFile1, pathFile2) => {
  const absolutePath1 = path.resolve(pathFile1);
  const absolutePath2 = path.resolve(pathFile2);

  const fileData1 = readFileSync(absolutePath1, 'utf8');
  const fileData2 = readFileSync(absolutePath2, 'utf8');
  return [JSON.parse(fileData1), JSON.parse(fileData2)];
};

export default getFilesData;
