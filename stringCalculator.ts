export function add(numbers: string): number {
    if (numbers === "") return 0;
  
    let delimiter = /,|\n/;
    let input = numbers;
  
    const customMatch = numbers.match(/^\/\/(.+)\n(.*)$/);
    if (customMatch) {
      delimiter = new RegExp(customMatch[1]);
      input = customMatch[2];
    }
  
    const nums = input.split(delimiter).map(Number);
    const negatives = nums.filter(n => n < 0);
  
    if (negatives.length)
      throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
  
    return nums.reduce((sum, num) => sum + num, 0);
  }
  