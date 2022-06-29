/**
 * Source : https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/
 *
 *
 *
 *
 * There are n kids with candies. You are given an integer array candies, where each candies[i]
 * represents the number of candies the ith kid has, and an integer extraCandies,
 * denoting the number of extra candies that you have.
 *
 * Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies,
 * they will have the greatest number of candies among all the kids, or false otherwise.
 *
 * Note that multiple kids can have the greatest number of candies.
 *
 *  Input: candies = [2,3,5,1,3], extraCandies = 3
 *  Output: [true,true,true,false,true]
 *
 */

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */

const kidsWithCandies = function (candies, extraCandies) {
	const greatestKid = Math.max(...candies);
	let incCandy;
	const newKidArr = [];

	candies.forEach((kid) => {
		incCandy = kid + extraCandies;
		if (incCandy >= greatestKid) newKidArr.push(true);
		if (incCandy < greatestKid) newKidArr.push(false);
	});

	return newKidArr;
};
