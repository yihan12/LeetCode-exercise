#leetcode #JavaScript #数组 #中等 #二分查找 
### 题目地址
[寻找旋转排序数组中的最小值](https://leetcode.cn/problems/find-minimum-in-rotated-sorted-array/)

### 题目描述
```
已知一个长度为 n 的数组，预先按照升序排列，经由 1 到 n 次 旋转 后，得到输入数组。例如，原数组 nums = [0,1,2,4,5,6,7] 在变化后可能得到：  
若旋转 4 次，则可以得到 [4,5,6,7,0,1,2]  
若旋转 7 次，则可以得到 [0,1,2,4,5,6,7]  
注意，数组 [a[0], a[1], a[2], ..., a[n-1]] 旋转一次 的结果为数组 [a[n-1], a[0], a[1], a[2], ..., a[n-2]] 。  
给你一个元素值 互不相同 的数组 nums ，它原来是一个升序排列的数组，并按上述情形进行了多次旋转。请你找出并返回数组中的 最小元素 。  
你必须设计一个时间复杂度为 O(log n) 的算法解决此问题。


**示例 1：**

**输入：**nums = [3,4,5,1,2]
**输出：**1
**解释：**原数组为 [1,2,3,4,5] ，旋转 3 次得到输入数组。

**示例 2：**

**输入：**nums = [4,5,6,7,0,1,2]
**输出：**0
**解释：**原数组为 [0,1,2,4,5,6,7] ，旋转 4 次得到输入数组。

**示例 3：**

**输入：**nums = [11,13,15,17]
**输出：**11
**解释：**原数组为 [11,13,15,17] ，旋转 4 次得到输入数组。
```


### 思路与解答
第一步：基于二分法的思路，先找mid

第二步：若mid > first element ，说明什么？说明mid的左侧是升序，最小值肯定不在mid左边，此时，我们需要在mid的右边找，所以 left = mid + 1

第三步：若mid < first element ，说明什么？说明最小值肯定在mid左边，此时，我们需要在mid的左边找，所以 right = mid - 1

第四步：终止条件是什么？分两种情况讨论：

1、若mid > mid + 1，此时mid + 1就是最小值，返回结果  
2、若mid < mid - 1，此时mid就是最小值，返回结果

```javascript
const findMin = function(nums) {
  if(!nums.length){
    return null
  }
  if(nums.length == 1) return nums[0]
  let r = nums.length - 1 
  let l = 0
  // 左闭右闭
  if(nums[l]<nums[r]){
      return nums[l]
  }
  
  while(l <= r){
    let mid = (l + r) >>> 1  // Math.floor((l+r)/2)
    if (nums[mid] > nums[mid + 1]) {
        return nums[mid + 1]
    }
    if (nums[mid] < nums[mid - 1]) {
        return nums[mid]
    }
    
    if(nums[mid] > nums[0]){
      l = mid + 1
    } else{
      r = mid - 1
    }
  }
  return null
};
```

