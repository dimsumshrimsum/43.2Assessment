/**
 * Implement an algorithm that sorts the array then returns the minimum and maximum
 */
function minimumAndMaximumSort(numbers) {
  numbers.sort((a, b) => a - b);
  const first = numbers[0];
  const last = numbers[numbers.length - 1];
  return [first, last].filter((e) => e !== undefined);
}

/**
 * Implement an algorithm that uses iteration to find the minimum and maximum
 */
function minimumAndMaximumIterate(numbers) {
  if (numbers.length === 0) {
    return [];
  }

  let smallest = numbers[0];
  let largest = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
      smallest = numbers[i];
    }
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }
  return [smallest, largest];
}

module.exports = { minimumAndMaximumIterate, minimumAndMaximumSort };
