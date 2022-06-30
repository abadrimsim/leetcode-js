/**
 * Source : https://leetcode.com/problems/running-sum-of-1d-array/
 *
 *
 *
 *
 * Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
 * Return the running sum of nums.
 *
 *  Input: nums = [1,2,3,4]
 *  Output: [1,3,6,10]
 *  Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
 *
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */

const runningSum = function (nums) {
	let sum = 0;
	const newArr = [];

	nums.forEach((num) => {
		sum = sum + num;
		newArr.push(sum);
	});

	return newArr;
};
