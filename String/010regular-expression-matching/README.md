### 题目地址

> https://leetcode.cn/problems/regular-expression-matching

### 题目描述

```
给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。

'.' 匹配任意单个字符
'*' 匹配零个或多个前面的那一个元素
所谓匹配，是要涵盖 整个 字符串 s的，而不是部分字符串。

 
示例 1：

输入：s = "aa", p = "a"
输出：false
解释："a" 无法匹配 "aa" 整个字符串。
示例 2:

输入：s = "aa", p = "a*"
输出：true
解释：因为 '*' 代表可以匹配零个或多个前面的那一个元素, 在这里前面的元素就是 'a'。因此，字符串 "aa" 可被视为 'a' 重复了一次。
示例 3：

输入：s = "ab", p = ".*"
输出：true
解释：".*" 表示可匹配零个或多个（'*'）任意字符（'.'）。
```


### 题目解答
```javascript
var isMatch = function(s, p) {
  if(s.length <1 && s==p) return true
  if(!p) return false

  function getIsMactch(s,p){
    //判断，如果传入p的长度为0，那么，必须s的长度也为0才会返回true
    if (p.length === 0) {
      return !s.length
    }


    //判断第一个字符是否相等
    let match = false
    if (s.length > 0 && (s[0] === p[0] || p[0] === '.')) {
      match = true
    }

    if (p.length > 1 && p[1] === "*") {
      //第一种情况：s*匹配0个字符 也就是p的（前面n个字符+*） 匹配s的0个字符，s不变。执行getIsMactch(s, p.slice(2))
      //第二种情况：s*匹配1个字符，递归下去，用来表示s*匹配多个s* 。也就是p不做任何处理。知道s的值不等于p[0]
      return getIsMactch(s, p.slice(2)) || (match && getIsMactch(s.slice(1), p))
    } else {
      // 如果有不匹配的直接返回false
      // 如果匹配 接着往下去除第一个匹配参数往后执行
      return (match && getIsMactch(s.slice(1), p.slice(1)))
    }
  }
  
  return getIsMactch(s,p)
};
```
