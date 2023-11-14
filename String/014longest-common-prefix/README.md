### 题目描述
```
编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

 

示例 1：

输入：strs = ["flower","flow","flight"]
输出："fl"
示例 2：

输入：strs = ["dog","racecar","car"]
输出：""
解释：输入不存在公共前缀。
```

### 解法一
```javascript
const longestCommonPrefix = (strs) => {
    let len = strs.length
    if (len == 0) return ""
    let str = ""
    for(let j = 0;j < strs[0].length; j++){
        str = str + strs[0][j]
        console.log(str)
        for(let i = 1; i < len; i++){
            if(strs[i][j] !== strs[0][j]){
                return str.slice(0, str.length-1)
            }
        }
    }
    return str
};
```
### 解法二
```javascript
const longestCommonPrefix = (strs) => {
    if(strs.length == 0) 
        return "";
    let ans = strs[0];
    for(let i =1;i<strs.length;i++) {
        let j=0;
        for(;j<ans.length && j < strs[i].length;j++) {
            if(ans[j] != strs[i][j])
                break;
        }
        ans = ans.substr(0, j);
        if(ans === "")
            return ans;
    }
    return ans;
};
```
