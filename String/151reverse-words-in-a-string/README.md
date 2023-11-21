### 题目地址

> https://leetcode.cn/problems/reverse-words-in-a-string/

### 题目描述

```
给你一个字符串 s ，请你反转字符串中 单词 的顺序。

单词 是由非空格字符组成的字符串。s 中使用至少一个空格将字符串中的 单词 分隔开。

返回 单词 顺序颠倒且 单词 之间用单个空格连接的结果字符串。

注意：输入字符串 s中可能会存在前导空格、尾随空格或者单词间的多个空格。返回的结果字符串中，单词间应当仅用单个空格分隔，且不包含任何额外的空格。

 

示例 1：

输入：s = "the sky is blue"
输出："blue is sky the"
示例 2：

输入：s = "  hello world  "
输出："world hello"
解释：反转后的字符串中不能存在前导空格和尾随空格。
示例 3：

输入：s = "a good   example"
输出："example good a"
解释：如果两个单词间有多余的空格，反转后的字符串需要将单词间的空格减少到仅有一个。
 
```

### 解法一
```javascript
var reverseWords = function(s) {
    return s.split(" ").filter(v => v != "").reverse().join(" ");
};
```

### 解法二
```javascript
    const reverseWords = (s) => {
      let str = ''
      let newS = ''
      for (let i = 0; i <= s.length - 1; i++) {
        console.log(s[i], str)
        if (s[i] != ' ') {
          str = str + s[i]
        } else {
          if (str) newS = newS ? str + ' ' + newS : str
          str = ''
        }
        if (i == s.length - 1 && str) newS = newS ? str + ' ' + newS : str
      }

      return newS
    }
```

### 解法三

```javascript
var reverseWords = function(s) {
    let left = 0
    let right = s.length - 1
    let queue = []
    let word = ''
    while (s.charAt(left) === ' ') left ++
    while (s.charAt(right) === ' ') right --
    while (left <= right) {
        let char = s.charAt(left)
        if (char === ' ' && word) {
            queue.unshift(word)
            word = ''
        } else if (char !== ' '){
            word += char
        }
        left++
    }
    queue.unshift(word)
    return queue.join(' ')
};
```
