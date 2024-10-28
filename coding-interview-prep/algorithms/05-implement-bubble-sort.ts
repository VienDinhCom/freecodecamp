import { expect } from 'jsr:@std/expect';

function bubbleSort(arr: number[]): number[] {
  // Check for empty or single-element arrays
  if (arr.length <= 1) return arr;

  for (let i = 0; i < arr.length; i++) {
    let swapped = false;

    for (let j = 0; j < arr.length - i - 1; j++) {
      // Compare adjacent elements
      if (arr[j] > arr[j + 1]) {
        swapped = true;
        // Swap elements
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }

    // If no elements were swapped, the array is sorted
    if (!swapped) break;
  }

  return arr;
}

// https://visualgo.net/en/sorting
// https://www.w3schools.com/dsa/dsa_algo_bubblesort.php

Deno.test('test', () => {
  const input = [3, 15, 7, 1, 12, 19, 5, 8, 2, 10];
  const output = input.toSorted((a, b) => a - b);

  expect(bubbleSort(input)).toStrictEqual(output);
});
