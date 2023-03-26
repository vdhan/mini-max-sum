import { createInterface } from 'readline';
import { fileURLToPath } from 'url';

interface SumPlus {
  minimum: bigint,
  maximum: bigint,
  total: bigint,
  min: bigint,
  max: bigint,
  even: bigint[],
  odd: bigint[],
  sorted: bigint[]
}

function isEven(n: bigint): boolean {
  return n % 2n == 0n;
}

function miniMaxSum(arr: bigint[]): string {
  let total: bigint = 0n;
  let min: bigint = arr[0];
  let max: bigint = arr[0];
  for (let item of arr) {
    if (item < min) {
      min = item;
    } else if (item > max) {
      max = item;
    }

    total += item;
  }

  return `${total - max} ${total - min}`;
}

function miniMaxSumPlus(arr: bigint[]): SumPlus {
  let even: bigint[] = [];
  let odd: bigint[] = [];

  arr.sort((a, b) => (a < b) ? -1 : 0);
  let min: bigint = arr[0];
  if (isEven(min)) {
    even.push(min);
  } else {
    odd.push(min);
  }

  let sum: bigint = 0n;
  for (let i = 1; i < 4; i++) {
    let item: bigint = arr[i];
    if (isEven(item)) {
      even.push(item);
    } else {
      odd.push(item);
    }

    sum += item;
  }

  let max: bigint = arr[4];
  if (isEven(max)) {
    even.push(max);
  } else {
    odd.push(max);
  }

  let minimum: bigint = sum + min;
  let maximum: bigint = sum + max;
  let total: bigint = minimum + max;
  return {
    minimum: minimum,
    maximum: maximum,
    total: total,
    min: min,
    max: max,
    even: even,
    odd: odd,
    sorted: arr
  };
}

if (fileURLToPath(import.meta.url) == process.argv[1]) {
  let readline = createInterface({
    input: process.stdin,
    output: process.stdout
  });

  readline.question('Input: ', (input) => {
    try {
      let temp: string[] = input.trim().split(/\s+/);
      let arr: bigint[] = [];
      for (let item of temp) {
        let element: bigint = BigInt(item);
        if (element < 0) {
          console.log('Positive integer required');
          return;
        }

        arr.push(element);
      }

      if (arr.length != 5) {
        console.log(`Required 5 numbers. Received ${arr.length}`);
        return;
      }

      console.log(miniMaxSum(arr));
    } catch (error) {
     console.log(error);
    } finally {
      readline.close();
    }
  });
}

export { miniMaxSum, miniMaxSumPlus };
