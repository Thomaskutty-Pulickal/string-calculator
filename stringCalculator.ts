export function add(numbers: string): number {
    if (numbers === "") return 0;
    const tokens = numbers.split(/,|\n/);
    return tokens.reduce((sum, num) => sum + Number(num), 0);
  }