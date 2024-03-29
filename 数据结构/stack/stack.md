# 栈

### 是什么？

- 一个**后进先出**的数据结构
- javascript 没有栈，但是可以利用 Array 实现栈的所有功能

### 栈的应用场景

- 需要**后进先出**的场景
- 比如：十进制转二进制、判断字符串的括号是否有效(有效括号)、函数调用堆栈......

### 场景一：十进制转二进制

- 后出来的余数反而要排到前面
- 把余数依次入栈，然后出栈，就可以实现余数倒序输出

### 场景二：有效括号

- 越靠后的左括号，对应的右括号越靠前
- 左括号入栈，右括号出栈，最后栈空了就是合法的。

### 场景三：函数调用堆栈

```javascript
function greeting() {
  // [1] Some codes here
  sayHi()
  // [2] Some codes here
}
function sayHi() {
  return 'Hi!'
}
// 调用greeting函数
greeting()

// [3] Some codes here
```

- 最后调用的函数最新执行完
- JS 解释器使用栈来控制函数调用的顺序
