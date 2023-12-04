### 题目地址

> https://leetcode.cn/problems/3sum/


### 题目描述

```
给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请

你返回所有和为 0 且不重复的三元组。

注意：答案中不可以包含重复的三元组。

 

 

示例 1：

输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
解释：
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
注意，输出的顺序和三元组的顺序并不重要。
示例 2：

输入：nums = [0,1,1]
输出：[]
解释：唯一可能的三元组和不为 0 。
示例 3：

输入：nums = [0,0,0]
输出：[[0,0,0]]
解释：唯一可能的三元组和为 0 。
```

### 题目解答

#### 解答一

```javascript
var threeSum = function(nums) {
    let ans = [];
    const len = nums.length;
    if(nums == null || len < 3) return ans;
    nums.sort((a, b) => a - b); // 排序
    for (let i = 0; i < len ; i++) {
        if(nums[i] > 0) break; // 如果当前数字大于0，则三数之和一定大于0，所以结束循环
        if(i > 0 && nums[i] == nums[i-1]) continue; // 去重
        let L = i+1;
        let R = len-1;
        while(L < R){
            const sum = nums[i] + nums[L] + nums[R];
            if(sum == 0){
                ans.push([nums[i],nums[L],nums[R]]);
                while (L<R && nums[L] == nums[L+1]) L++; // 去重
                while (L<R && nums[R] == nums[R-1]) R--; // 去重
                L++;
                R--;
            }
            else if (sum < 0) L++;
            else if (sum > 0) R--;
        }
    }        
    return ans;
};
```

#### 解答二

```javascript
      var threeSum = function (nums) {
        let ans = []
        const len = nums.length
        const obj = {}
        if (nums == null || len < 3) return ans
        nums.sort((a, b) => a - b) // 排序
        for (let i = 0; i < len; i++) {
          if (nums[i] > 0) break // 如果当前数字大于0，则三数之和一定大于0，所以结束循环
          if (i > 0 && nums[i] == nums[i - 1]) continue // 去重
          let L = i + 1
          let R = len - 1
          while (L < R) {
            const sum = nums[i] + nums[L] + nums[R]
            if (sum == 0) {
              let newArr = [nums[i], nums[L], nums[R]]
              let newStr = newArr.join(',')
              if (!obj[newStr]) {
                ans.push(newArr)
                obj[newStr] = true
              }

              //   while (L < R && nums[L] == nums[L + 1]) L++ // 去重
              //   while (L < R && nums[R] == nums[R - 1]) R-- // 去重
              L++
              R--
            } else if (sum < 0) L++
            else if (sum > 0) R--
          }
        }
        return ans
      }
```

