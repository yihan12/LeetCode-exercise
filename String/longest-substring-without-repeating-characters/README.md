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

### 思路一 下标维护

1. 因为需要找无重复的子串，我们可以定义初始化的子串是第一个字符，也就是 `let newStr = str[0]`。
2. 然后我们每次往后去加一个字符也就是str[i]。
3. 这时候就需要判断str[i]是否在newStr中，并且知道它所在的位置，`let j = newStr.indexOf(str[i]);`。
4. 如果j为-1就是newStr不存在str[i],就是把str[i]的数据加到newStr的后面，`newStr = newStr + str[i]`;否则，从j的位置删除前面的数据后，再加上str[i]，`newStr = newStr.substring(j+1,newStr.length);newStr = newStr + str[i]`
5. 最后将存的最大值和当前的最大值比较。
6. 循环上述操作，从而得出最后的最大值max。

#### 代码

```javascript
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (str) {
  let len = s.length
  let str = s[0]
  let max = 1
  if(len<=1){
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

#### 代码优化
```javascript
const lengthOfLongestSubstring = function(s) {
    let index = 0, max = 0;
    for(let i = 0, j = 0; j < s.length; j++) {
        index = s.substring(i, j).indexOf(s[j]) 
        if(index !== -1) { 
            i = i + index + 1 
        } 
        max = Math.max(max, j - i + 1) 
    }
    return max
};
```

