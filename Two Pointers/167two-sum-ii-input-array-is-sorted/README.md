# 题目地址

> https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/

# 题目描述

```
给你一个下标从 1 开始的整数数组 numbers ，该数组已按 非递减顺序排列  ，请你从数组中找出满足相加之和等于目标数 target 的两个数。如果设这两个数分别是 numbers[index1] 和 numbers[index2] ，则 1 <= index1 < index2 <= numbers.length 。

以长度为 2 的整数数组 [index1, index2] 的形式返回这两个整数的下标 index1 和 index2。

你可以假设每个输入 只对应唯一的答案 ，而且你 不可以 重复使用相同的元素。

你所设计的解决方案必须只使用常量级的额外空间。

 
示例 1：

输入：numbers = [2,7,11,15], target = 9
输出：[1,2]
解释：2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。返回 [1, 2] 。
示例 2：

输入：numbers = [2,3,4], target = 6
输出：[1,3]
解释：2 与 4 之和等于目标数 6 。因此 index1 = 1, index2 = 3 。返回 [1, 3] 。
示例 3：

输入：numbers = [-1,0], target = -1
输出：[1,2]
解释：-1 与 0 之和等于目标数 -1 。因此 index1 = 1, index2 = 2 。返回 [1, 2] 。

```

# 解答

### 代码一

```javascript
var twoSum = function(numbers, target) {
      let len = numbers.length
      if(len<=1) return []
      const map = new Map()
      for(let i = 0;i<len; i++){
        
        let num = target-numbers[i]
        if(map.has(numbers[i])){
          return [map.get(numbers[i]),i+1]
        }
        map.set(num, i+1)
        
      }
      return []
    };
```

### 代码二

```javascript
var twoSum = function (numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    while (true) {
        let s = numbers[left] + numbers[right];
        if (s === target) {
            return [left + 1, right + 1]; // 题目要求下标从 1 开始
        }
        s > target ? right-- : left++;
    }
};
```
