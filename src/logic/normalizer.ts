import fs from 'fs';
import patterns from './patterns';

export default function normalize(arr: string[], size: number): number[][] {
  const intArr: number[][] = [];
  for (let i = 0; i < arr.length; i++) {
    intArr.push([]);
    const rowArray: string[] = arr[i].split('');

    // convert from string[][] to num[][]
    rowArray.map((column, j) => {
      if (column === '.') {
        intArr[i][j] = 0;
      } else {
        intArr[i][j] = 1;
      }
    });
  }

  // add columns
  for (let row of intArr) {
    while (row.length < size) {
      row.unshift(0);
      row.push(0);
    }
  }

  // add rows
  while (intArr.length < size) {
    intArr.unshift(new Array(size).fill(0));
    intArr.push(new Array(size).fill(0));
  }

  return intArr;
}

fs.appendFile(
  'normalizedPatterns.txt',
  JSON.stringify(normalize(patterns['Quasar'], 64)),
  (err) => {
    if (err) {
      console.error(err);
      return;
    }
  }
);
