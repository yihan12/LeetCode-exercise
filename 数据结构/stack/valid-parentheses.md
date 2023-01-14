### 题目描述

[有效的括号](https://leetcode.cn/problems/valid-parentheses/)

给定一个只包括 '('，')'，'{'，'}'，'['，']'  的字符串 s ，判断字符串是否有效。

有效字符串需满足：

1. 左括号必须用相同类型的右括号闭合。
2. 左括号必须以正确的顺序闭合。
3. 每个右括号都有一个对应的相同类型的左括号。

#### 示例 1：

```
输入：s = "()"
输出：true
```

#### 示例  2：

```
输入：s = "()[]{}"
输出：true
```

#### 示例  3：

```
输入：s = "(]"
输出：false
```

### Map解答
```javascript
 const isValid = function(s){
    if(s.length==1){
      return false
    }
    const sVar = new Map([
      ['(',')'],
      ['[',']'],
      ['{','}'],
    ])
    const stack = []
    for(let i = 0; i < s.length; i++){
      if(sVar.has(s[i])){
        stack.push(s[i])
      }else if(sVar.get(stack[stack.length-1])==s[i]){
        stack.pop()
      }else{
         // stack.push(s[i])
         return false
      }
    }
    if(stack.length==0){
      return true
    }else{
      return false
    }
  }
```
