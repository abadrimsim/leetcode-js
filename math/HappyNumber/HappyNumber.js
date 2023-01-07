/**
 * Source : https://leetcode.com/problems/happy-number/
 *
 *
 *
 * Write an algorithm to determine if a number n is happy.
 * A happy number is a number defined by the following process:
 *
 * Starting with any positive integer, replace the number by the sum of the squares of its digits.
 * Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1
 * Those numbers for which this process ends in 1 are happy.
 * Return true if n is a happy number, and false if not.
 *
 *  Input: n = 19
 *  Output: true
 *
 *
 */

/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function (n) {
	let checker = false;

	let tempNum = n;
	let count = 0;

	while (count <= 100 && !checker) {
		const numArr = tempNum.toString().split('');
		let sum = 0;

		for (let i = 0; i < numArr.length; i++) {
			sum += Math.pow(Number(numArr[i]), 2);
		}

		if (sum == 1) checker = true;
		if (sum != 1) tempNum = sum;

		count++;
	}

	return checker;
};
