### 题目地址
> https://leetcode.cn/problems/zigzag-conversion/

### 题目描述

```
将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。
比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：

P   A   H   N
A P L S I I G
Y   I   R

之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。
请你实现这个将字符串进行指定行数变换的函数：
string convert(string s, int numRows);
示例 1：

输入：s = "PAYPALISHIRING", numRows = 3
输出："PAHNAPLSIIGYIR"

示例 2：

输入：s = "PAYPALISHIRING", numRows = 4
输出："PINALSIGYAHRPI"
解释：
P     I    N
A   L S  I G
Y A   H R
P     I

示例 3：

输入：s = "A", numRows = 1
输出："A"
```

### 解答
#### 思路

1. 如果 numRows=1 或者 numsRows>s.length 则说明当前字符串即为结果，直接返回
2. 否则整个字符串需要经历，向下向右，向下向右，这样的反复循环过程，设定 down 变量表示是否向下，loc 变量表示当前字符串数组的下标
   如果 down 为 true，则 loc+=1，字符串数组下标向后移动，将当前字符加入当前字符串中
#### 代码
```javascript
const convert = function (s, numRows) {
  // 如果numRows == 1则表示z行变换时，全在一行，返回的数据就是s
  // 如果numRows > s.length，则s的数据正好放一列，返回的数据也是s
  if (numRows == 1 || numRows > s.length) return s

  const rows = new Array(numRows).fill('')
  let loc = 0
  let down = false

  for (const c of s) {
    rows[loc] = rows[loc] + c
    if (loc == 0 || loc == numRows - 1) down = !down
    loc = down ? loc + 1 : loc - 1
  }
  return rows.join('')
}
```
利用Array.from创建空数组
```javascript
const convert = function (s, numRows) {
  // 如果numRows == 1则表示z行变换时，全在一行，返回的数据就是s
  // 如果numRows > s.length，则s的数据正好放一列，返回的数据也是s
  if (numRows == 1 || numRows > s.length) return s

  const rows = Array.from({length:numRows}, v=> v='')
  let loc = 0
  let down = false

  for (const c of s) {
    rows[loc] = rows[loc] + c
    if (loc == 0 || loc == numRows - 1) down = !down
    loc = down ? loc + 1 : loc - 1
  }
  return rows.join('')
}
```
