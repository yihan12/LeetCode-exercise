### 题目地址

> https://leetcode.cn/problems/3sum-closest

### 题目描述

```
给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数，使它们的和与 target 最接近。

返回这三个数的和。

假定每组输入只存在恰好一个解。

 

示例 1：

输入：nums = [-1,2,1,-4], target = 1
输出：2
解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
示例 2：

输入：nums = [0,0,0], target = 1
输出：0
```

### 解答
#### 解法一
```javascript
var threeSumClosest = function(nums, target) {
    let N = nums.length
    let res = Number.MAX_SAFE_INTEGER
    nums.sort((a, b) => a - b)
    for (let i = 0; i < N; i++) {
        let left = i + 1
        let right = N - 1
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right]
            if (Math.abs(sum - target) < Math.abs(res - target)) {
                res = sum
            }
            if (sum < target) {
                left++
            } else if (sum > target) {
                right--
            } else {
                return sum
            }
        }
    }
    return res
};
```
#### 解法二
```javascript
var threeSumClosest = function(nums, target) {
  // 先对数组进行排序, 为了后面双指针计算值做准备
  nums = nums.sort((a, b) => a - b);
  let min = +Infinity,
    result = 0;

  for (let i = 0; i < nums.length; i++) {
    // 循环内部声明左右指针, 初始化 左指针位于索引下一个, 右指针位于数组最后一位索引
    let left = i + 1,
      right = nums.length - 1;

    // 结束条件为左右指针重合
    while (left < right) {
      // 每次用3个索引计算合然后更新最小值
      const sum = nums[i] + nums[left] + nums[right];
      const res = sum - target;
      if (Math.abs(res) < min) {
        min = Math.abs(res);
        result = sum;
      }

      // 如果合的值大于目标值target, 那么表示需要减少合值再计算, 所以右指针后退一位, 反之左指针前进一位
      if (res >= 0) {
        right--;
      } else {
        left++;
      }
    }
  }

  return result;
};
```
