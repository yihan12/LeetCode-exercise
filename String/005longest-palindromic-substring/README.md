# LeetCode 005：最长回文子串

### 题目地址

> [https://leetcode.com/problems/longest-substring-without-repeating-characters/description/](https://leetcode.cn/problems/longest-palindromic-substring/)

### 题目描述

```
给你一个字符串 s，找到 s 中最长的回文子串。
如果字符串的反序与原始字符串相同，则该字符串称为回文字符串。

示例 1：

输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案。

示例 2：

输入：s = "cbbd"
输出："bb"
```

### 解法一 中心扩散法
#### 由简入繁
先看一个最简单的字符串，比如'aabaaabaa'； 
1. 第一步,i=0,这时候res='a',如果回文子串长度是奇数，左边无值，右边有值，这时候最长回文子串是'a'，如果回文子串长度是偶数，res='aa'这时候最长回文子串是'aa';
2. 第二步,i=1,这时候res='a',如果回文子串长度是奇数,左边有一个值'a',右边的值为'b'，这时候当前i位置最长回文子串是'a',如果回文子串长度是偶数，res='aa'或者res='ab'这时候最长回文子串是'aa';
3. 第三步,i=2,这时候res='b',如果回文子串长度是奇数,左边第一个值'a',右边第一个值为'a'，res='aba',左边第二个值'a'，右边第二个值'a'，res='aabaa',这时候最长回文子串还是'aabaa',如果回文子串长度是偶数,最长的长度为1;
4. 第四步,i=3,...这时候最长回文子串还是第三步的'aabaa';
5. 第五步,i=4,这时候res='a' ... 这时候最长回文子串还是第三步的'aabaaabaa';
....

#### 思路


- 1. 如果 s 的长度是 1 或者 0 的时候，s 的最长回文子串就是它本身，例如'a',直接返回 s。

```javascript
if (s.length < 2) {
  return s
}
```

- 2. 遍历整个 s
  例:s 字符串 'acaca',遍历字符串，区分 i 为奇数和偶数的情况；
  在 s 的范围内（所以需要 `m>=0 ,n<s.length`），从中心往两边去遍历，如果`s[m] == s[n]`,如果如果此时回文字符串的长度大于之前最大长度则取 n-m-1

```javascript
const longestPalindrome = function (s) {
  if (s.length < 2) {
    return s
  }
  let res = ''
  for (let i = 0; i < s.length; i++) {
    // 回文子串长度是奇数
    helper(i, i)
    // 回文子串长度是偶数
    helper(i, i + 1)
  }

  function helper(m, n) {
    while (m >= 0 && n < s.length && s[m] == s[n]) {
      m--
      n++
    }
    // 注意此处m,n的值循环完后  是恰好不满足循环条件的时刻
    // 此时m到n的距离为n-m+1，但是mn两个边界不能取 所以应该取m+1到n-1的区间  长度是n-m-1
    if (n - m - 1 > res.length) {
      // slice也要取[m+1,n-1]这个区间
      res = s.slice(m + 1, n)
    }
  }
  return res
}
```

### 解法二 动态规划

### 思路
1. 状态定义
dp[i,j]：字符串s从索引i到j的子串是否是回文串
true： s[i,j] 是回文串
false：s[i,j] 不是回文串
2. 转移方程
dp[i][j] = dp[i+1][j-1] && s[i] == s[j]
* s[i] == s[j]：说明当前中心可以继续扩张，进而有可能扩大回文串的长度
* dp[i+1][j-1]：true
  * 说明s[i,j]的**子串s[i+1][j-1]**也是回文串
  * 说明，i是从最大值开始遍历的，j是从最小值开始遍历的
* 特殊情况
  * j===i：s[i]和是[j]值是同一个值
  * j - i === 1:表示s[i]和是[j]为相邻值，则需要是s[i]===s[j]

### 代码
```javascript
const longestPalindrome = function (s) {
  if (!s || s.length < 2) return s;
  let res = s[0];
  const dp = [];
  // 倒着遍历简化操作， 这么做的原因是dp[i][..]依赖于dp[i + 1][..]
  for (let i = s.length - 1; i >= 0; i--) {
    dp[i] = [];
    for (let j = i; j < s.length; j++) {
      if (j - i === 0) dp[i][j] = true; // j===i的时候，值是同一个值
      // specail case 1
      else if (j - i === 1 && s[i] === s[j]) dp[i][j] = true; // j - i === 1的时候，表示s[i]和是[j]为相邻值，则需要是s[i]===s[j]
      // specail case 2
      else if (s[i] === s[j] && dp[i + 1][j - 1]) { // 所有的i+1和j-1为true,并且s[i] === s[j]
        // state transition
        dp[i][j] = true;
      }

      if (dp[i][j] && j - i + 1 > res.length) {
        // update res
        res = s.slice(i, j + 1);
      }
    }
  }

  return res;
};
```
