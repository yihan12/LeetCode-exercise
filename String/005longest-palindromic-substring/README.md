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

### 解法
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
