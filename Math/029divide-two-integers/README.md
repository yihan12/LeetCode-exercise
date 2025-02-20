
#leetcode #JavaScript #位运算 #中等 #数学 
### 题目地址
[两数相除](https://leetcode.cn/problems/divide-two-integers/description/)

### 题目描述

```
给你两个整数，被除数 `dividend` 和除数 `divisor`。将两数相除，要求 **不使用** 乘法、除法和取余运算。

整数除法应该向零截断，也就是截去（`truncate`）其小数部分。例如，`8.345` 将被截断为 `8` ，`-2.7335` 将被截断至 `-2` 。

返回被除数 `dividend` 除以除数 `divisor` 得到的 **商** 。

**注意：**假设我们的环境只能存储 **32 位** 有符号整数，其数值范围是 `[−231,  231 − 1]` 。本题中，如果商 **严格大于** `231 − 1` ，则返回 `231 − 1` ；如果商 **严格小于** `-231` ，则返回 `-231` 。

**示例 1:**

**输入:** dividend = 10, divisor = 3
**输出:** 3
**解释:** 10/3 = 3.33333.. ，向零截断后得到 3 。

**示例 2:**

**输入:** dividend = 7, divisor = -3
**输出:** -2
**解释:** 7/-3 = -2.33333.. ，向零截断后得到 -2 。
```

### 解法一
```javascript
const divide = (a, b) => {
    // 特殊情况
    if (!a) return 0;
    const [MIN, MAX] = [-(2 ** 31), 2 ** 31 - 1];
    if (a === MIN && b === -1) return MAX;
    if (a === MIN && b === 1) return MIN;

    // 是否为负数
    const isNeg = (a ^ b) < 0;
    // 取绝对值
    [a, b] = [Math.abs(a), Math.abs(b)];

    let _func = (curr, div) => {
                if (curr < div) return 0; //进来发现 当前被除数<除数 返回0
                let cnt = 1, temp = div;
                while ((temp + temp) < curr) {
                    cnt = cnt + cnt;
                    temp = temp + temp;
                }
                return cnt + _func(curr - temp, div); /* 60/8 = 4+(60-32)/8 =4+2+(28-16)/8 = 4+2+1+(12-8)/8 = 4+2+1+0 = 7 */
            }

            let res = _func(a, b);

    return isNeg ? -res : res;
};

```
