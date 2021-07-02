// export const nextGen = (arr: number[][]): number[][] => {
//   // loop through rows

//   const newGrid: number[][] = [];

//   for (let i = 0; i < arr.length; i++) {
//     newGrid.push([]);
//     for (let j = 0; i < arr[i].length; j++) {
//       newGrid[i].push(aliveNext(i, j));
//     }
//   }

//   return newGrid;
// };

export const nextGen = (arr: number[][]): number[][] => {
  const aliveNext = (i: number, j: number): number => {
    let count = 0;
    const len = arr.length;
    const alive: number = arr[i][j];
    const indices: number[] = [
      arr[Math.abs(i - 1 + len) % len][Math.abs(j - 1 + len) % len],
      arr[Math.abs(i - 1 + len) % len][j],
      arr[Math.abs(i - 1 + len) % len][Math.abs(j + 1 + len) % len],
      arr[i][Math.abs(j - 1 + len) % len],
      // skip current
      arr[i][Math.abs(j + 1 + len) % len],
      arr[Math.abs(i + 1 + len) % len][Math.abs(j - 1 + len) % len],
      arr[Math.abs(i + 1 + len) % len][j],
      arr[Math.abs(i + 1 + len) % len][Math.abs(j + 1 + len) % len],
    ];

    indices.forEach((index) => {
      if (index === 1) {
        count++;
      }
    });

    if ((alive === 1 && count === 3) || (alive === 1 && count === 2)) {
      return 1;
    } else if (alive === 0 && count === 3) {
      return 1;
    } else {
      return 0;
    }
  };

  return arr.map((row, i) => {
    return row.map((column, j) => {
      // Any live cell with fewer than two live neighbors dies, as if by under-population.
      return aliveNext(i, j);
    });
  });
};
