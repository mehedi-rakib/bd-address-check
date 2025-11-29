export function getSuggestion(input: string, list: string[]): string {
  input = input.toLowerCase();
  let bestMatch = "";
  let highestMatch = 0;
  
  list.forEach((item) => {
    const name = item.toLowerCase();
    let score = 0;
    for (let i = 0; i < input.length; i++) {
      if (name[i] === input[i]) score++;
    }
    if (score > highestMatch) {
      highestMatch = score;
      bestMatch = item;
    }
  });
  
  return bestMatch;
}

