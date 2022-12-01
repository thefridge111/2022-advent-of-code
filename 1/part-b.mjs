import { open } from 'node:fs/promises';

const input = await open('./input.txt');
let current = 0;
let calories = [];

for await (const line of input.readLines()) {
  if (!line) {
    calories.push(current); 
    current = 0;
  } else {
    current += parseInt(line);
  }  
}

calories.sort((a, b) => { return b - a; });

const top3 = calories.slice(0, 3); 
console.log(top3);
console.log(top3.reduce((prev, next) => { return prev + next; }, 0));
