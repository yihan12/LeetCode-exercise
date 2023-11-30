### 题目地址

> https://leetcode.cn/problems/find-the-index-of-the-first-occurrence-in-a-string


### 题目描述

```
给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串的第一个匹配项的下标（下标从 0 开始）。如果 needle 不是 haystack 的一部分，则返回  -1 。

 

示例 1：

输入：haystack = "sadbutsad", needle = "sad"
输出：0
解释："sad" 在下标 0 和 6 处匹配。
第一个匹配项的下标是 0 ，所以返回 0 。
示例 2：

输入：haystack = "leetcode", needle = "leeto"
输出：-1
解释："leeto" 没有在 "leetcode" 中出现，所以返回 -1 。
```

### 解答
#### 代码一
```javascript
var strStr = function(haystack, needle)  {
  if(haystack.includes(needle)){
    let arr = haystack.split(needle)
    return arr[0].length
  }else{
    return -1
  }
};
```

#### 代码二
```javascript
var strStr = function (haystack, needle) {
  let pre = 0,
    after = 0;
  while (after < needle.length && pre < haystack.length) {
    // pre代表需要从哪里开始比较
    if (haystack[after + pre] === needle[after]) {
      after++;
    } else {
    // 如果发现不想等应该剔除掉haystack之前的字符
      pre++;
    // 不相等剔除后，重新开始便利after
      after = 0;
    }
  }
  return after === needle.length ? pre : -1;
};

```

#### 代码三
```javascript
var strStr = function(haystack, needle) {
    const n = haystack.length, m = needle.length;
    if (m === 0) {
        return 0;
    }
    const pi = new Array(m).fill(0);
    for (let i = 1, j = 0; i < m; i++) {
        while (j > 0 && needle[i] !== needle[j]) {
            j = pi[j - 1];
        }
        if (needle[i] == needle[j]) {
            j++;
        }
        pi[i] = j;
    }
    for (let i = 0, j = 0; i < n; i++) {
        while (j > 0 && haystack[i] != needle[j]) {
            j = pi[j - 1];
        }
        if (haystack[i] == needle[j]) {
            j++;
        }
        if (j === m) {
            return i - m + 1;
        }
    }
    return -1;
};

```
