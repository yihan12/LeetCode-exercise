#leetcode #JavaScript #数组 #中等 #贪心 #动态规划 

### 题目地址
[跳跃游戏](https://leetcode.cn/problems/jump-game/)

### 题目描述
给定一个非负整数数组 nums ，你最初位于数组的 第一个下标 。  
数组中的每个元素代表你在该位置可以跳跃的最大长度。  
判断你是否能够到达最后一个下标。

示例 1：

```plain
输入：nums = [2,3,1,1,4]
输出：true
解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。
```

示例 2：

```plain
输入：nums = [3,2,1,0,4]
输出：false
解释：无论怎样，总会到达下标为 3 的位置。但该下标的最大跳跃长度是 0 ， 所以永远不可能到达最后一个下标。
```

### 思路和解答
#### 动规
动规，维护一个当前可跳出的最大值即可，如果在路上当前可跳最大值为0就无法继续前进。

```javascript
const canJump = function(nums) {
    let len = nums.length
    let max = nums[0]
    if(len==1){
        return true
    }  
    for(let i = 0; i < len; i++){
        if(max==0){
            return false
        }
        max--;
        max = nums[i]>max?nums[i]:max
    }
    return true
};
```

#### 贪心
贪心算法局部最优解：每次取最大跳跃步数（取最大覆盖范围），整体最优解：最后得到整体最大覆盖范围，看是否能到终点。

```javascript
const canJump = function(nums) {
    if(nums.length === 1) return true
    let cover = 0
    for(let i = 0; i <= cover; i++) {
        cover = Math.max(cover, i + nums[i])
        if(cover >= nums.length - 1) {
            return true
        }
    }
    return false
};
```

