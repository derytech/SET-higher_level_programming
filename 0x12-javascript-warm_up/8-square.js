#!/usr/bin/node

const size = parseInt(process.argv[2]);

if (isNaN(size)) {
  console.log('Missing size');
} else {
  let row = 0;

  while (row < size) {
    console.log('X'.repeat(size));
    row++;
  }
}
