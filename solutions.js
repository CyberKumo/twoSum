/* Two Sum
Given an array of integers, return indices of the two numbers
such that they add up to a specific target. You may assume that
each input would have exactly one solution, and you may not use
the same element twice. */

//Solution 1
const twoSum = (nums, target) => {
  let storage = {};
  for (let [index, num] of nums.entries()) {
    if (storage[num] !== undefined) return [storage[num], index];
    storage[target - num] = index;
  }
};

//Solution 2
var twoSum = function (nums, target) {
  let mp = new Map();
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (mp.has(diff)) {
      return [i, mp.get(diff)];
    }
    mp.set(nums[i], i);
  }
};

//Solution 3
var twoSum = function (nums, target) {
  let disct = {};
  for (let i = 0; i < nums.length; i++) {
    let rest = target - nums[i];
    if (disct[rest] || disct[rest] === 0) {
      return [disct[rest], i];
    }
    disct[nums[i]] = i;
  }
};

//Solution 4
let twoSum = function (nums, target) {
  let map = new Map();
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) {
      result.push(map.get(complement));
      result.push(i);
      return result;
    }
    map.set(nums[i], i);
  }
  return result;
};

//Solution 5
var twoSum = function (nums, target) {
  let i = 0;
  let y = 0;
  let firstNumber = 0;
  let secondNumber = 0;
  while (i < nums.length - 1) {
    firstNumber = nums[i];
    y = i + 1;
    while (y < nums.length) {
      secondNumber = nums[y];
      if (firstNumber + secondNumber === target) return [i, y];
      y++;
    }
    i++;
  }
};

//Solution 6
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
};

//Solution 7
var twoSum = function (nums, target) {
  const arr = {};
  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i];
    if (need in arr) {
      return [arr[need], i];
    }
    arr[nums[i]] = i;
  }
};

//Solution 8
var twoSum = function (nums, target) {
  let hashMap = {};
  for (let j = 0; j < nums.length; j++) {
    let val = target - nums[j];
    if (typeof hashMap[val] !== 'undefined') {
      return [j, hashMap[val]];
    } else {
      hashMap[nums[j]] = j;
    }
  }
};

//Solution 9
const twoSum = (nums, target) => {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    let ch = nums[i];
    if (ch in hash) return [hash[ch], i];
    hash[target - ch] = i;
  }
};

//Solution 10
var twoSum = function (nums, target) {
  const n = nums.length;
  let match = false;
  for (let i = 0, j = n - 1; i <= j && !match; i++, j--) {
    let diff1 = target - nums[i];
    let idx1 = nums.indexOf(diff1);
    let diff2 = target - nums[j];
    let idx2 = nums.indexOf(diff2);

    if (idx1 > -1 && idx1 !== i) {
      match = true;
      return [i, idx1];
    }
    if (idx2 > -1 && idx2 !== j) {
      match = true;
      return [j, idx2];
    }
  }
};
