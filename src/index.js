import _ from 'lodash';
import fs from 'fs';
import path from 'path';


const genDiff = (filepath1, filepath2) => {
    const pathAbs1 = path.resolve(filepath1);
    const pathAbs2 = path.resolve(filepath2);
    const content1 = fs.readFileSync(filepath1, 'utf8');
    const content2 = fs.readFileSync(filepath2, 'utf8');
    let obj = Object.assign(content1, content2);
return console.log(obj);
};
// 'src/file1.json', 'src./file2.json'
const a = genDiff('src/file1.json', 'src/file2.json');
export default genDiff;
