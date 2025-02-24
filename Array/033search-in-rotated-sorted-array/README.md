#leetcode #JavaScript #数组 #中等 #二分查找 
### 题目地址
[搜索旋转排序数组](https://leetcode.cn/problems/search-in-rotated-sorted-array/)

### 题目描述

```
整数数组 nums 按升序排列，数组中的值 互不相同 。 在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。  
给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。  
你必须设计一个时间复杂度为 O(log n) 的算法解决此问题。
**示例 1：**

**输入：**nums = [`4,5,6,7,0,1,2]`, target = 0
**输出：**4

**示例 2：**

**输入：**nums = [`4,5,6,7,0,1,2]`, target = 3
**输出：**-1

**示例 3：**

**输入：**nums = [1], target = 0
**输出：**-1
```


### 思路和描述
**若mid > first element，说明mid的左侧是升序的；若mid < first element，说明mid的右侧是升序的，而我们通过这规律，就可以区分两段升序的数组，然后在对应的升序区间内，进行二分查找，然后不断调整left和right的位置**

第一步：基于二分法的思路，先找mid

第二步：判断mid 和 first element的大小关系，确立mid所在的区间

第三步：分两部分讨论：

在左侧升序区间中，若target >= left 同时 target < mid, 说明target在mid的左侧，应该在[left, mid]之间找，此时执行right = mid - 1；否则target在mid的右侧，在[mid, right]之间找， 此时left = mid + 1;  
在右侧升序区间中，若target > mid 同时 target <= right , 说明target在mid的右侧，应该在[mid, right]之间找，此时执行left = mid + 1；否则target在mid的左侧，应该在[left, mid]之间找，此时right = mid -1  
终止条件是，mid element === target，结束

```javascript
const search = function(nums, target) {
    if (!nums.length) return -1
    let left = 0, right = nums.length - 1, mid
    while (left <= right) {
        mid = left + ((right - left) >> 1) // 或 left+right >>> 1 或Math.floor((left + right)/2)
        if (nums[mid] === target) {
            return mid
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
    return -1
}
```

