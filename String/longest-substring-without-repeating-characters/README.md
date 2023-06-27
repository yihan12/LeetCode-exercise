# LeetCode 003：无重复字符的最长子串

### 题目地址

> https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

### 题目描述

```md
给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

示例 1:

输入: "abcabcbb"
输出: 3
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:

输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

```

### 思路

1.首先取 res 为输入字符串的第一个字符

2.判断第二个字符是否存在 s 中，并判断其位置，如果存在就删除所在位置的之前的所有元素，包括存在的元素，否则 res 加上地二个字符

3.重复步骤二

4.既能返回长度 newLen,也能返回最后位置的最长的字符串 newRes

### 代码

```javascript
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (str) {
  let len = s.length
  let str = s[0]
  let max = 1
  if(len==0 || len ==1){
      return len
  }
  for(let i =1; i<len; i++ ){
          let j = str.indexOf(s[i]);
          if(j == -1){
              str = str + s[i]
              
          }
          if(j!=-1){
              str = str.substring(j+1,str.length)
              str=str+s[i]
              
          }
          max = max >= str.length?max:str.length
  }
  return max
};
```
