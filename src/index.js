import _ from 'lodash';
import * as fs from 'fs';
import path from 'path';


const genDiff = (filepath1, filepath2) => {
    const pathAbs1 = path.resolve(process.cwd(filepath1));
    const pathAbs2 = path.resolve(process.cwd(filepath2));
    const pathAbs3 = process.cwd(filepath1);
    const pathAbs4 = process.cwd(filepath2);
    const content1 = fs.readFileSync(filepath1, 'utf8');
    const content2 = fs.readFileSync(filepath2, 'utf8');
    
return console.log({content1, content2});
};

const a = genDiff();
console.log(a);