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

### 解法 滑动窗口+双指针


#### 思路

- 1. 因为需要找无重复的子串，我们可以定义初始化的子串是第一个字符，也就是 `let newStr = str[0]`。
- 2. 然后我们每次往后去加一个字符也就是str[i]。
- 3. 这时候就需要判断str[i]是否在newStr中，并且知道它所在的位置，`let j = newStr.indexOf(str[i]);`。
- 4. 如果j为-1就是newStr不存在str[i],就是把str[i]的数据加到newStr的后面，`newStr = newStr + str[i]`;否则，从j的位置删除前面的数据后，再加上str[i]，`newStr = newStr.substring(j+1,newStr.length);newStr = newStr + str[i]`
- 5. 最后将存的最大值和当前的最大值比较。`max = Math.max(max, newStr.length)`
- 6. 循环上述操作，从而得出最后的最大值max。

#### 代码一

> 使用方法：indexOf + substring + Math.max
```javascript
/**
 * @param {string} str
 * @return {number}
 */
const lengthOfLongestSubstring = function (str) {
  let len = str.length
  if( len <= 1) {
      return len
  }
  let newStr = str[0]
  let max = 1
  for (let i = 1; i < len; i++ ) {
      let j = newStr.indexOf(str[i]);
      if (j !== -1) newStr = newStr.substring(j+1, newStr.length)
      newStr = newStr + str[i]
      max = Math.max(max, newStr.length)
  }
  return max
};
```

#### 代码二
> 使用方法：push + splice + indexOf + charAt + Math.max

代码二的逻辑基本与代码一一致，唯一区别在于方法的使用
```javascript
const lengthOfLongestSubstring = function(s) {
	let len = s.length
	if(len <= 1) return len
    let arr = [], max = 1;
    for(let i = 0; i < len; i++) {
        let index = arr.indexOf(s[i])
        if(index !== -1) {
            arr.splice(0, index+1);
        }
        arr.push(s.charAt(i))
        max = Math.max(arr.length, max) 
    }
    return max
};
```

#### 代码三
> 使用方法：Map数据结构 + Math.max

代码三的思路也是与代码一一致，优点：indexOf会自带循环获取下标的逻辑，时间上会比Map慢
```javascript
const lengthOfLongestSubstring = function(s) {
	let len = s.length
	if(len <= 1) return len
	let max = 1; // 结果
	let map = new Map(); // 存放字符和对应下标
	for (let l = 0, r = 0; r < len; r++) {
		// 如果出现了重复字符，则把左指针移到重复字符的下一位。注意同时满足重复字符的索引大于左指针。
		if (map.has(s[r]) && map.get(s[r]) >= l) {
			l = map.get(s[r]) + 1;
		}
		max = Math.max(max, r - l + 1); // 计算结果
		map.set(s[r], r); // 存下每个字符的下标
	}
	return max;
};
```
# 滑动窗口模板
```javascript
//外层循环扩展右边界，内层循环扩展左边界
for (let l = 0, r = 0 ; r < n ; r++) {
	//当前考虑的元素
	while (l <= r && check()) {//区间[left,right]不符合题意
        //扩展左边界
    }
    //区间[left,right]符合题意，统计相关信息
}
```




