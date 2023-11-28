### 题目地址

> https://leetcode.cn/problems/valid-sudoku

### 题目描述

```
请你判断一个 9 x 9 的数独是否有效。只需要 根据以下规则 ，验证已经填入的数字是否有效即可。

数字 1-9 在每一行只能出现一次。
数字 1-9 在每一列只能出现一次。
数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。（请参考示例图）
 

注意：

一个有效的数独（部分已被填充）不一定是可解的。
只需要根据以上规则，验证已经填入的数字是否有效即可。
空白格用 '.' 表示。
 示例 1：


输入：board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
输出：true
示例 2：

输入：board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
输出：false
解释：除了第一行的第一个数字从 5 改为 8 以外，空格内其他数字均与 示例1 相同。 但由于位于左上角的 3x3 宫内有两个 8 存在, 因此这个数独是无效的。
```

### 解答

```javascript
var isValidSudoku = function(board) {
    // 方向判重
    let rows = {};//行
    let columns = {};//列
    let boxes = {};//3*3小方块
    // 遍历数独
    for(let i = 0;i < 9;i++){
        for(let j = 0;j < 9;j++){
            let num = board[i][j];
            if(num != '.'){//遇到有效的数字
                let boxIndex = parseInt((i/3)) * 3 + parseInt(j/3);// 子数独序号

                console.log(boxIndex,'boxIndex')
                if(rows[i+'-'+num] || columns[j+'-'+num] || boxes[boxIndex+'-'+num]){//重复检测
                    return false;
                }
                // 方向 + 数字 组成唯一键值，若出现第二次，即为重复
              	// 更新三个对象
                rows[i+'-'+num] = true;
                columns[j+'-'+num] = true;
                boxes[boxIndex+'-'+num] = true;
            }
        }
    }
    return true;
};
```


```javascript
const isValidSudoku = (board) => {
  // 步骤 1：初始化横、纵以及小九宫格
  const rows = [],
    columns = [],
    boxes = [];
  for (let i = 0; i < 9; i++) {
    rows[i] = [];
    columns[i] = [];
    boxes[i] = [];
  }
  // 对应的 rows 为 [[], [], [], [], [], [], [], [], []]
  
  // 步骤 2：遍历填充值
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {

      // 获取值
      const value = board[i][j];

      // 先判断非 . 元素
      if (value !== '.') {

        // 检验横排
        if (!rows[i].includes(value)) {
          rows[i].push(value);
        } else {
          return false;
        }

        // 检验竖排
        if (!columns[j].includes(value)) {
          columns[j].push(value);
        } else {
          return false;
        }

        // 检查盒子
        const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3); // 对应的盒子
        if (!boxes[boxIndex].includes(value)) {
          boxes[boxIndex].push(value);
        } else {
          return false;
        }
      }
    }
  }

  // 步骤 3：如果没有问题，就是真的，返回 true
  return true;
};
```
