#栈 #哈希表 #leetcode #JavaScript #简单
### 题目地址

> https://leetcode.cn/problems/roman-to-integer

### 题目描述

```
罗马数字包含以下七种字符: I， V， X， L，C，D 和 M。

字符          数值
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
例如， 罗马数字 2 写做 II ，即为两个并列的 1 。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。

通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：

I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
给定一个罗马数字，将其转换成整数。

 

示例 1:

输入: s = "III"
输出: 3
示例 2:

输入: s = "IV"
输出: 4
示例 3:

输入: s = "IX"
输出: 9
示例 4:

输入: s = "LVIII"
输出: 58
解释: L = 50, V= 5, III = 3.
示例 5:

输入: s = "MCMXCIV"
输出: 1994
解释: M = 1000, CM = 900, XC = 90, IV = 4.
```

### 解答

#### 代码一

```javascript
var romanToInt = function(s) {
    const map = {
        I : 1,
        IV: 4,
        V: 5,
        IX: 9,
        X: 10,
        XL: 40,
        L: 50,
        XC: 90,
        C: 100,
        CD: 400,
        D: 500,
        CM: 900,
        M: 1000
    };
    let ans = 0;
    for(let i = 0;i < s.length;) {
        if(i + 1 < s.length && map[s.substring(i, i+2)]) {
            ans += map[s.substring(i, i+2)];
            i += 2;
        } else {
            ans += map[s.substring(i, i+1)];
            i ++;
        }
    }
    return ans;
};

```

#### 代码二

```javascript
var romanToInt = function(s) {
  const map1 = new Map([
    ['CM', 900],
    ['CD', 400],
    ['XC', 90],
    ['XL', 40],
    ['IX', 9],
    ['IV', 4],
  ])
  const map2 = new Map([
    ['M', 1000],
    ['D', 500],
    ['C', 100],
    ['L', 50],
    ['X', 10],
    ['V', 5],
    ['I', 1],
  ])
  let num = 0
  for([key,value] of map1){
    if(s.includes(key)){
      num = num+value
      s = s.replace(key, '')
    }
  }
  if(s.length == 0) return num
  for(let i = 0;i<s.length;i++){
    num = num + map2.get(s[i])
  }
  return num
  
};
```

#### 代码三
```javascript
        const romanToInt = function (str) {
            const map = new Map([
                ["CM", 900],
                ["M", 1000],
                ["CD", 400],
                ["D", 500],
                ["XC", 90],
                ["C", 100],
                ["XL", 40],
                ["L", 50],
                ["IX", 9],
                ["X", 10],
                ["IV", 4],
                ["V", 5],
                ["I", 1]
            ]);
            let roman = 0;
            while (str.length) {
                let strI = str.slice(0, 2)
                if (map.has(strI)) {
                    roman += map.get(strI)
                } else {
                    strI = str.slice(0, 1)
                    roman += map.get(strI)
                }
                str = str.replace(strI, '')
            }
            return roman;
        };
```
