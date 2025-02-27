#字符串 #math #leetcode #JavaScript #数组 #中等 
### 题目地址
>  [字符串相乘](https://leetcode.cn/problems/multiply-strings/description/ "https://leetcode.cn/problems/multiply-strings/description/")

### 题目描述

```
给定两个以字符串形式表示的非负整数 `num1` 和 `num2`，返回 `num1` 和 `num2` 的乘积，它们的乘积也表示为字符串形式。

**注意：**不能使用任何内置的 BigInteger 库或直接将输入转换为整数。

**示例 1:**

输入: num1 = "2", num2 = "3"
输出: "6"

**示例 2:**
输入: num1 = "123", num2 = "456"
输出: "56088"
```

### 解法一
```javascript
        var multiply = function (num1, num2) {

            if (num1 === '0' || num2 === '0') {

                return '0'

            }

            var l1 = num1.length, l2 = num2.length, p = new Array(l1 + l2).fill(0)

            for (var i = l1; i--;) {

                for (var j = l2; j--;) {

                    var tmp = num1[i] * num2[j] + p[i + j + 1]

                    p[i + j + 1] = tmp % 10

                    p[i + j] += 0 | tmp / 10

                }

            }

            while (p[0] === 0) {

                p.shift()

            }

            return p.join('')

        };
```
