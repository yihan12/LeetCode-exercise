#leetcode #JavaScript #数组 #中等 #二分查找 

### 题目地址

[搜索旋转排序数组 II](https://leetcode.cn/problems/search-in-rotated-sorted-array-ii/)

### 题目描述
```
已知存在一个按非降序排列的整数数组 nums ，数组中的值不必互不相同。  
在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转 ，使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。例如， [0,1,2,4,4,4,5,6,6,7] 在下标 5 处经旋转后可能变为 [4,5,6,6,7,0,1,2,4,4] 。  
给你 旋转后 的数组 nums 和一个整数 target ，请你编写一个函数来判断给定的目标值是否存在于数组中。如果 nums 中存在这个目标值 target ，则返回 true ，否则返回 false 。  
你必须尽可能减少整个操作步骤。
**示例 1：**

**输入：**nums = `[2,5,6,0,0,1,2]`, target = 0
**输出：**true

**示例 2：**

**输入：**nums = `[2,5,6,0,0,1,2]`, target = 3
**输出：**false
```


### 思路和解决
不同的点在于这里的数组是含有重复元素的，我们怎么排除重复元素的干扰呢？比如[1,3,1,1,1]这种的数组，很难通过mid和left element的比较界定两个升序区间，不过我们可以通过不断比较mid和left是否相同，来排除重复的干扰项。

思路

若 mid element === left element:  
此时说明具有重复项目，应该调整left指针，使left向右移动，用以去除重复干扰

```javascript
const search = function(nums, target) {
    if (!nums.length) return false
    let left = 0, right = nums.length - 1, mid
    while (left <= right) {
        mid = left + ((right - left) >> 1)
        if (nums[mid] === target) {
            return true
        }
        if (nums[left] === nums[mid]) {
            ++left
            continue
        }
        if (nums[mid] >= nums[left]) {
            if (target >= nums[left] && target < nums[mid]) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        } else {
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
    }
    return false
}
```

