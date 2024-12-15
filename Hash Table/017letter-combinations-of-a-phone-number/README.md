#栈 #哈希表 #leetcode #JavaScript #BFS #DFS

# 题目地址

> [电话号码的字母组合](https://leetcode.cn/problems/letter-combinations-of-a-phone-number/description/?envType=problem-list-v2&envId=hash-table)

# 题目描述

```
给定一个仅包含数字 `2-9` 的字符串，返回所有它能表示的字母组合。答案可以按 **任意顺序** 返回。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2021/11/09/200px-telephone-keypad2svg.png)

**示例 1：**

**输入：**digits = "23"
**输出：**["ad","ae","af","bd","be","bf","cd","ce","cf"]

**示例 2：**

**输入：**digits = ""
**输出：**[]

**示例 3：**

**输入：**digits = "2"
**输出：**["a","b","c"]

**提示：**

- `0 <= digits.length <= 4`
- `digits[i]` 是范围 `['2', '9']` 的一个数字。
```

# 解答

## dfs

```javascript
const letterCombinations = (digits) => {
  if (digits.length == 0) return []
  const res = []
  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  }
  // dfs: 当前构建的字符串为curStr，现在“翻译”到第i个数字，基于此继续“翻译”
  const dfs = (curStr, i) => {
    // curStr是当前字符串，i是扫描的指针
    if (i > digits.length - 1) {
      // 指针越界，递归的出口
      res.push(curStr) // 将解推入res
      return // 结束当前递归分支
    }
    const letters = map[digits[i]] // 当前数字对应的字母
    for (const letter of letters) {
      // 一个字母是一个选择，对应一个递归分支
      dfs(curStr + letter, i + 1) // 选择翻译成letter，生成新字符串，i指针右移继续翻译（递归）
    }
  }
  dfs('', 0) // 递归的入口，初始字符串为''，从下标0开始翻译
  return res
}
```

## bfs

```javascript
const letterCombinations = (digits) => {
  if (digits.length == 0) return []
  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  }

  const queue = []
  queue.push('')
  for (let i = 0; i < digits.length; i++) {
    // bfs的层数，即digits的长度
    const levelSize = queue.length // 当前层的节点个数
    for (let j = 0; j < levelSize; j++) {
      // 逐个让当前层的节点出列
      const curStr = queue.shift() // 出列

      const letters = map[digits[i]]

      for (const l of letters) {
        queue.push(curStr + l) // 生成新的字母串入列
      }
    }
  }
  return queue // 队列中全是最后一层生成的字母串
}
```
