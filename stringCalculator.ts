export function add(numbers: string): number {
    if (numbers === "") return 0;
  
    let delimiter = /,|\n/;
    let input = numbers;
  
    const customMatch = numbers.match(/^\/\/(.+)\n(.*)$/);
    if (customMatch) {
      delimiter = new RegExp(customMatch[1]);
      input = customMatch[2];
    }
  
    return input
      .split(delimiter)
      .map(Number)
      .reduce((sum, num) => sum + num, 0);
  }