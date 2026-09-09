#!/usr/bin/node

const occurrences = parseInt(process.argv[2]);

if (isNaN(occurrences)) {
  console.log('Missing number of occurrences');
} else {
  let i = 0;

  while (i < occurrences) {
    console.log('C is fun');
    i++;
  }
}
