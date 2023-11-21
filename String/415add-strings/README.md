### 题目地址

> https://leetcode.cn/problems/add-strings/

### 题目描述

```
给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和并同样以字符串形式返回。

你不能使用任何內建的用于处理大整数的库（比如 BigInteger）， 也不能直接将输入的字符串转换为整数形式。

 

示例 1：

输入：num1 = "11", num2 = "123"
输出："134"
示例 2：

输入：num1 = "456", num2 = "77"
输出："533"
示例 3：

输入：num1 = "0", num2 = "0"
输出："0"
 
```

### 解法一

```javascript
const addStrings = function (num1, num2) {
    let len1 = num1.length
    let len2 = num2.length
    let maxLen;
    let newNum1 = num1
    let newNum2 = num2
    if(len2>len1){
      maxLen = len2
      newNum1 = newNum1.padStart(maxLen,'0')
    }else{
      maxLen = len1
      newNum2 = newNum2.padStart(maxLen,'0')
    }
    let target = 0
    let newStr = []
    while(maxLen--){
      let allNum = Number(newNum1[maxLen]) + Number(newNum2[maxLen]) + target
      console.log(allNum)
      target = 0
      if(allNum>=10){
        newStr.unshift(allNum - 10)
        target = 1
      }else{
        newStr.unshift(allNum)
      }
    }
    if(target) newStr.unshift(target)
    return newStr.join('')
  };
```

### 解法一优化

```javascript
const addStrings = function (num1, num2) {
    let len1 = num1.length
    let len2 = num2.length
    let maxLen;
    let newNum1 = num1
    let newNum2 = num2
    if(len2>len1){
      maxLen = len2
      newNum1 = newNum1.padStart(maxLen,'0')
    }else{
      maxLen = len1
      newNum2 = newNum2.padStart(maxLen,'0')
    }
    let target = 0
    let newStr = []
    while(maxLen--){
        let c1 = newNum1.charAt(maxLen) - '0' || 0,
            c2 = newNum2.charAt(maxLen) - '0' || 0;
     let sum = c1 + c2 + target;
             newStr.push(sum % 10);
        target = Math.floor(sum / 10);
    }
    if(target) newStr.push(target)
    return newStr.reverse().join('')
  };
```

### 解法二

```javascript
var addStrings = function(num1, num2) {
    let i = num1.length - 1,
        j = num2.length - 1,
        carry = 0,
        ans = [];
    while(i >= 0 || j >= 0 || carry !== 0){
        let c1 = i >= 0 ? num1.charAt(i) - '0' : 0,
            c2 = j >= 0 ? num2.charAt(j) - '0' : 0;
        let sum = c1 + c2 + carry;
        ans.push(sum % 10);
        carry = Math.floor(sum / 10);
        i--;
        j--;
    }
    return ans.reverse().join('');
};
```
