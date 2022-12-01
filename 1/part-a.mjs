import { open } from 'node:fs/promises';

const input = await open('./input.txt');
let largest = 0;
let current = 0;

for await (const line of input.readLines()) {
  if (!line) {
    largest = largest < current ? current : largest;
    current = 0;
  } else {
    current += parseInt(line);
  }  
}

console.log(largest);
