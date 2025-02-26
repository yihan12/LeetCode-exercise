#leetcode #JavaScript #数组 #简单 #二分查找 

### 题目地址
[搜索插入位置](https://leetcode.cn/problems/search-insert-position/)


### 题目描述

```plain
给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。  
请必须使用时间复杂度为 O(log n) 的算法。
```

### 思路与解答
```javascript
const searchInsert = function(nums, target) {
    if(!nums.length) return 0
    let l = 0, r = nums.length - 1, mid;
    while(l < r){
      mid = l + r >>> 1;
      if(nums[mid] == target){
        return mid
      }
      
      if(nums[mid] < target){
        l = mid+1
      }else{
        r = mid - 1
      }
    }
    if(nums[l]<target){
        return l+1
    }
    if(nums[l]>=target){
        return l
    }
};
```

