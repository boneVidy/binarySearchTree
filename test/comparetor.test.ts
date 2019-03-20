import {Comparetor} from '../src';
describe('comparetor test', () => {
  const numberComparetor = new Comparetor();
  test('should test number compare without compareFunction', () => {
    expect(numberComparetor.equal(1,1)).toBe(true);
    expect(numberComparetor.greaterThan(2,1)).toBe(true);
    expect(numberComparetor.lessThan(1,2)).toBe(true);
    expect(numberComparetor.greaterThanOrEqual(2,1)).toBe(true);
    expect(numberComparetor.greaterThanOrEqual(1,1)).toBe(true);
    expect(numberComparetor.lessThanOrEqual(1,2)).toBe(true);
    expect(numberComparetor.lessThanOrEqual(1,1)).toBe(true);

  });

  test('should test Object compare with compareFunction', () => {
    type Person = {age: number};
    const comparetor = new Comparetor<Person>((a,b) => {
      if (a.age === b.age) {
        return 0;
      }
      return a.age > b.age ? 1: -1;
    });
    const pa = {age:99};
    const pb = {age : 100};
    const pc = {age : 99};
    expect(comparetor.equal(pa, pb)).toBe(false);
    expect(comparetor.greaterThan(pa, pb)).toBe(false);
    expect(comparetor.lessThan(pa, pb)).toBe(true);
    expect(comparetor.lessThanOrEqual(pa, pb)).toBe(true);
    expect(comparetor.greaterThanOrEqual(pa, pb)).toBe(false);

    expect(comparetor.equal(pa, pc)).toBe(true);
  });
});