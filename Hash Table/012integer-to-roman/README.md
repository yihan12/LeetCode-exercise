### 题目地址

> https://leetcode.cn/problems/integer-to-roman

### 题目描述

```
罗马数字包含以下七种字符： I， V， X， L，C，D 和 M。

字符          数值
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。

通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：

I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
给你一个整数，将其转为罗马数字。

 

示例 1:

输入: num = 3
输出: "III"
示例 2:

输入: num = 4
输出: "IV"
示例 3:

输入: num = 9
输出: "IX"
示例 4:

输入: num = 58
输出: "LVIII"
解释: L = 50, V = 5, III = 3.
示例 5:

输入: num = 1994
输出: "MCMXCIV"
解释: M = 1000, CM = 900, XC = 90, IV = 4.
 
```

### 解答
```javascript
const intToRoman = function(num) {
  const map = new Map([
    [1,'I'],
    [5, 'V'],
    [10, 'X'],
    [50 ,'L'],
    [100,'C'],
    [500,'D'],
    [1000,'M'],
  ])
  let result = ''
  let y = num
  if(y >= 1000){
    let x = Math.floor(y/1000)
    y = y%1000
    for(let i= 0;i<x;i++){
      result = result+map.get(1000)
    }
  }

  if(y>=900&&y<1000) {
    y=y-900
    result = result+map.get(100)+map.get(1000)
  }
  console.log(y, result)
  
  if(y >= 500&&y<900){
    let x = Math.floor(y/500)
    y = y%500
    for(let i= 0;i<x;i++){
      result = result+map.get(500)
    }
  }
  if(y>=400&&y<500) {
    y=y-400
    result = result+map.get(100)+map.get(500)
  }
  if(y >= 100&&y<400){
    let x = Math.floor(y/100)
    y = y%100
    for(let i= 0;i<x;i++){
      result = result+map.get(100)
    }
  }
  if(y>=90&&y<100) {
    y=y-90
    result = result+map.get(10)+map.get(100)
  }
  if(y >= 50&&y<90){
    let x = Math.floor(y/50)
    y = y%50
    for(let i= 0;i<x;i++){
      result = result+map.get(50)
    }
  }
  if(y>=40&&y<50) {
    y=y-40
    result = result+map.get(10)+map.get(50)
  }
  if(y >= 10&&y<40){
    let x = Math.floor(y/10)
    y = y%10
    for(let i= 0;i<x;i++){
      result = result+map.get(10)
    }
  }
  if(y<10&&y >= 5){
    if(y==9) return result+map.get(1)+map.get(10)
    let x = Math.floor(y/5)
    y = y%5
    for(let i= 0;i<x;i++){
      result = result+map.get(5)
    }
  }
  if(y<5&&y >= 1){
    if(y==4) return result+map.get(1)+map.get(5)
    let x = Math.floor(y/1)
    y = y%1
    for(let i= 0;i<x;i++){
      result = result+map.get(1)
    }
  }


  return result
};
```
