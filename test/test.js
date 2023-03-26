import { expect } from 'chai';
import { miniMaxSum, miniMaxSumPlus } from '../dist/index.js';

describe('miniMaxSum', () => {
  it('Simple test', () => {
    let arr = [1n, 2n, 3n, 4n, 5n];
    expect(miniMaxSum(arr)).to.eq('10 14');
  });

  it('Big integer array', () => {
    let arr = [1000000000000000n, 0n, 9999999999999999n, 2147485547n, 9007199254740993n];
    expect(miniMaxSum(arr)).to.eq('10007201402226540 20007201402226539');
  });
});

describe('miniMaxSumPlus', () => {
  it('Simple test', () => {
    let arr = [1n, 2n, 3n, 4n, 5n];
    let expected = {
      minimum: 10n,
      maximum: 14n,
      total: 15n,
      min: 1n,
      max: 5n,
      even: [2n, 4n],
      odd: [1n, 3n, 5n],
      sorted: [1n, 2n, 3n, 4n, 5n]
    };

    expect(miniMaxSumPlus(arr)).to.eql(expected);
  });

  it('Big integer array', () => {
    let arr = [1000000000000000n, 0n, 9999999999999999n, 2147485547n, 9007199254740993n];
    let expected = {
      minimum: 10007201402226540n,
      maximum: 20007201402226539n,
      total: 20007201402226539n,
      min: 0n,
      max: 9999999999999999n,
      even: [0n, 1000000000000000n],
      odd: [2147485547n, 9007199254740993n, 9999999999999999n],
      sorted: [0n, 2147485547n, 1000000000000000n, 9007199254740993n, 9999999999999999n]
    };

    expect(miniMaxSumPlus(arr)).to.eql(expected);
  });
});
