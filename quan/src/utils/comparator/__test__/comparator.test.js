import Comparator from "../comparator";

describe("Comparator", () => {
  it("should compare with default comparator function", () => {
    const comparator = new Comparator();

    expect(comparator.equal(0, 0)).toBe(true);
    expect(comparator.equal(0, 1)).toBe(false);
    expect(comparator.equal('kao', 'kao')).toBe(true);
    expect(comparator.lessThan(0, 1)).toBe(true);
    expect(comparator.lessThan(-2, 1)).toBe(true);
    expect(comparator.lessThan(2, 1)).toBe(false);
    expect(comparator.lessThan('a', 'b')).toBe(true);
    expect(comparator.lessThan('a', 'ab')).toBe(true);
    expect(comparator.lessThanOrEqual(10, 2)).toBe(false);
    expect(comparator.lessThanOrEqual(1, 1)).toBe(true);
    expect(comparator.lessThanOrEqual(0, 0)).toBe(true);
    expect(comparator.greaterThanOrEqual(10, 0)).toBe(true);
    expect(comparator.greaterThanOrEqual(10, 10)).toBe(true);
    expect(comparator.greaterThanOrEqual(0, 10)).toBe(false);
  });

  it('should compare with custom comparator function', () => {
    const comparatorByLength = (a, b) => {
      if (a.length === b.length) return 0
      return a.length < b.length ? -1 : 1; 
    };
    const comparator = new Comparator(comparatorByLength);

    expect(comparator.equal([1,2,3], ['d', 'g', 'h'])).toBe(true);
    expect(comparator.equal([1,2,3], [])).toBe(false);
    expect(comparator.lessThan([1,2,3], [])).toBe(false);
    expect(comparator.greaterThanOrEqual('a', 'aa')).toBe(false);
    expect(comparator.greaterThanOrEqual('aa', 'a')).toBe(true);
    expect(comparator.greaterThanOrEqual('a', 'a')).toBe(true);

    comparator.reverse();

    expect(comparator.equal('a', 'b')).toBe(true);
    expect(comparator.equal('a', '')).toBe(false);
    expect(comparator.lessThan('b', 'aa')).toBe(false);
    expect(comparator.greaterThanOrEqual('a', 'aa')).toBe(true);
    expect(comparator.greaterThanOrEqual('aa', 'a')).toBe(false);
    expect(comparator.greaterThanOrEqual('a', 'a')).toBe(true);
    expect(comparator.equal([1,2,3], ['d', 'g', 'h'])).toBe(true);
    expect(comparator.equal([1,2,3], [])).toBe(false);
    expect(comparator.lessThan([1,2,3], [])).toBe(true);

  })
});
