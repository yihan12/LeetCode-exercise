### 题目地址

> https://leetcode.cn/problems/longest-consecutive-sequence/

### 题目描述

```
给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

请你设计并实现时间复杂度为 O(n) 的算法解决此问题。

 

示例 1：

输入：nums = [100,4,200,1,3,2]
输出：4
解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。
示例 2：

输入：nums = [0,3,7,2,5,8,4,6,0,1]
输出：9
 
```

### 解答

#### 代码
```javascript
const longestConsecutive = function(nums) {
  if(nums.length<2) return nums.length
  // nums = nums.sort((a,b)=>a-b)
  let newNums = [...new Set(nums)].sort((a,b)=>a-b)
  let arr = [newNums[0]]
  let max = 1
  console.log(newNums)
  for(let i = 1;i<newNums.length;i++){
    if(arr[arr.length-1]+1 ==newNums[i]){
      arr.push(newNums[i])
      max = arr.length > max ? arr.length : max
    }else{
      arr = [newNums[i]]
    }
  }
  return max
};
```
