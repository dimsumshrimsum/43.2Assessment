/**
 * Implement a brute force algorithm for finding the missing number in an array
 */
function missingNumberBruteForce(numbers) {
  let missingNumber = 0;
  for (let i = 1; i <= numbers.length + 1; i++) {
    if (numbers.indexOf(i) === -1) {
      missingNumber = i;
    }
  }
  return missingNumber;
}

/**
 * Use an iterative  strategy for finding the missing number in an array
 */
function missingNumberSum(numbers) {
  const n = numbers.length + 1;
  const expected = (n * (n + 1)) / 2;
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return expected - sum;
}

module.exports = { missingNumberBruteForce, missingNumberSum };
