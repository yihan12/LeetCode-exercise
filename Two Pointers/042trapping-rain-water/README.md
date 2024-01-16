# 题目地址

> https://leetcode.cn/problems/trapping-rain-water/description/

# 题目描述
```
给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

示例 1：  
输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]  
输出：6  
解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。  


示例 2：   
输入：height = [4,2,0,3,2,5]  
输出：9  
```

# 解答

### 代码一
```javascript
    var trap = function(height) {
      let result = 0
      let len = height.length
      if(len <= 1) return result

      let l = 0, r = len-1,Lmax = 0, Rmax = 0;
      while(l<r){
        let left = height[l]
        let right = height[r]
        if(Lmax>left){
          result = result+(Lmax-left)
        }else{
          Lmax = Math.max(left,Lmax)
        }
        if(Rmax>right){
          result = result+(Rmax-right)
        }else{
          Rmax = Math.max(right,Rmax)
        }
        Lmax>Rmax?r--:l++
        
      }
      return result
    };
```
