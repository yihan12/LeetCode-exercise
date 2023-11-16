### 题目描述

```
给你一个字符串 s ，请你统计并返回这个字符串中 回文子串 的数目。

回文字符串 是正着读和倒过来读一样的字符串。

子字符串 是字符串中的由连续字符组成的一个序列。

具有不同开始位置或结束位置的子串，即使是由相同的字符组成，也会被视作不同的子串。

 

示例 1：

输入：s = "abc"
输出：3
解释：三个回文子串: "a", "b", "c"
示例 2：

输入：s = "aaa"
输出：6
解释：6个回文子串: "a", "a", "a", "aa", "aa", "aaa"
```

### 解法一

```javascript
  const countSubstrings = function (s) {
    let len = s.length
    if(len <= 1) return len
    let result = 0
    const searchI = function (s, i ,j){
      let num = 0
      while(s[i] == s[j]){
        num++
        i--;
        j++;
        // 如果超出范围
        if(i < 0 || j >= len){
            return num
        }
      }
      return num
    }
    for(let i = 0; i < len; i++){
        
      result = result + searchI(s, i, i) + searchI(s, i, i + 1)
    }
    return result
  };
```
