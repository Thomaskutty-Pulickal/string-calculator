import { add } from './stringCalculator';

describe('String Calculator', () => {
  test('returns 0 for empty string', () => {
    expect(add("")).toBe(0);
  });
  test('returns sum of comma-separated numbers', () => {
    expect(add("1,2,3")).toBe(6);
  });
  test('handles newlines as delimiters', () => {
    expect(add("1\n2,3")).toBe(6);
  });
});