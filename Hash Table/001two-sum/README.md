# LeetCode 第 1 号问题：两数之和

### 题目地址

> https://leetcode-cn.com/problems/two-sum

### 题目描述

```
给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

示例:

给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
```

#### 解法一(Map 数据结构)

##### 思路

1. 首先创建一个Map。
```javascript
const map = new Map()
```
2. 接着。遍历nums。
```javascript
let len = num.length // nums的长度
for(let i =0;i<len;i++){
}
```
3. 然后。定义diff = target 减去某一位置的值。如果，`map.has(diff)`也就是map 储存在差值，直接返回插值的索引和当前值的索引 `return [map.get(diff),i]`；否则就利用map储存当前值`nums[i]`和索引`i`
```javascript
let diff = target - nums[i]; //target减去对应的数组的值
if (map.has(diff)) {
  //判断是否已存在对应的减值，存在则取出返回，否则将减值（减出来的值）和对应索引储存
  return [map.get(diff), i];
}
map.set(nums[i], i); //将减值（减出来的值）和对应索引储存
```


#### 代码

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const map = new Map();
  const len = nums.length; //数组长度
  for (let i = 0; i < len; i++) {
    //遍历查找数组nums
    let diff = target - nums[i]; //target减去对应的数组的值
    if (map.has(diff)) {
      //判断是否已存在对应的减值，存在则取出返回，否则将减值（减出来的值）和对应索引储存
      return [map.get(diff), i];
    }
    map.set(nums[i], i); //将减值（减出来的值）和对应索引储存
  }
};
```

#### 解法二(obj 属性)

##### 思路

将 obj 替换 Map 去解决问题

#### 代码

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum1 = function (nums, target) {
  const obj = {};
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    let I = nums[i];
    let j = target - I];
    if (obj[j] !== undefined) {
      return [obj[j], i];
    }
    obj[I] = i;
  }
};
```

#### 解法三(暴力解法)

##### 思路

遍历解法

#### 代码

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum2 = function (nums, target) {
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};
```

#### 解法四(map,forEach 的方法，存在问题不会直接返回)

##### 思路

需要 try catch，扔出 error 才会返回，

#### 代码

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum3 = function (nums, target) {
  const hash = {};
  let result = [];
  try {
    nums.map(function (val, i) {
      let reduce = target - val;
      if (hash[reduce] !== undefined) {
        result[0] = hash[reduce];
        result[1] = i;
        throw "err";
      }
      hash[val] = i;
    });
  } catch (err) {
    return result;
  }
};
```

