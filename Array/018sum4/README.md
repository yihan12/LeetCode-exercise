### 题目地址

> https://leetcode.cn/problems/4sum/

### 题目描述

```
给你一个由 n 个整数组成的数组 nums ，和一个目标值 target 。请你找出并返回满足下述全部条件且不重复的四元组 [nums[a], nums[b], nums[c], nums[d]] （若两个四元组元素一一对应，则认为两个四元组重复）：

0 <= a, b, c, d < n
a、b、c 和 d 互不相同
nums[a] + nums[b] + nums[c] + nums[d] == target
你可以按 任意顺序 返回答案 。

 

示例 1：

输入：nums = [1,0,-1,0,-2,2], target = 0
输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
示例 2：

输入：nums = [2,2,2,2,2], target = 8
输出：[[2,2,2,2]]
 
```

### 解答

#### 代码一
```javascript
var fourSum = function (nums, target) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    let ans = [];
    for (let a = 0; a < n - 3; a++) { // 枚举第一个数
        const x = nums[a]; // 使用 long long 避免溢出
        if (a > 0 && x === nums[a - 1]) continue; // 跳过重复数字
        if (x + nums[a + 1] + nums[a + 2] + nums[a + 3] > target) break; // 优化一
        if (x + nums[n - 3] + nums[n - 2] + nums[n - 1] < target) continue; // 优化二
        for (let b = a + 1; b < n - 2; b++) { // 枚举第二个数
            const y = nums[b];
            if (b > a + 1 && y === nums[b - 1]) continue; // 跳过重复数字
            if (x + y + nums[b + 1] + nums[b + 2] > target) break; // 优化一
            if (x + y + nums[n - 2] + nums[n - 1] < target) continue; // 优化二
            let c = b + 1, d = n - 1;
            while (c < d) { // 双指针枚举第三个数和第四个数
                const s = x + y + nums[c] + nums[d]; // 四数之和
                if (s > target) d--;
                else if (s < target) c++;
                else { // s == target
                    ans.push([x, y, nums[c], nums[d]]);
                    for (c++; c < d && nums[c] === nums[c - 1]; c++); // 跳过重复数字
                    for (d--; d > c && nums[d] === nums[d + 1]; d--); // 跳过重复数字
                }
            }
        }
    }
    return ans;
};

```


#### 代码二

```javascript
var fourSum = function(nums, target) {
    const len = nums.length;
    if(len < 4) return [];
    nums.sort((a, b) => a - b);
    const res = [];
    for(let i = 0; i < len - 3; i++) {
        // 去重i
        if(i > 0 && nums[i] === nums[i - 1]) continue;
        for(let j = i + 1; j < len - 2; j++) {
            // 去重j
            if(j > i + 1 && nums[j] === nums[j - 1]) continue;
            let l = j + 1, r = len - 1;
            while(l < r) {
                const sum = nums[i] + nums[j] + nums[l] + nums[r];
                if(sum < target) { l++; continue}
                if(sum > target) { r--; continue}
                res.push([nums[i], nums[j], nums[l], nums[r]]);
                while(l < r && nums[l] === nums[++l]);
                while(l < r && nums[r] === nums[--r]);
            }
        } 
    }
    return res;
};
```
