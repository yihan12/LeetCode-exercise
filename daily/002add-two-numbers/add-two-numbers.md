# LeetCode 0002：两数相加

### 题目地址

> https://leetcode.com/problems/add-two-numbers/description/

### 题目描述

给出两个 **非空** 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 **逆序** 的方式存储的，并且它们的每个节点只能存储 **一位** 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

**示例：**

```
输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807
```

### 题目解析

1.设立一个表示进位的值 sum

2.设置一个链表函数

```
 function ListNode(val) {
     this.val = val;
     this.next = null;
 }
```

3.遍历两列表，直到最长的都为空

### 代码

#### 解法一

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  let node = new ListNode(0);
  let temp = node; //新建一个val为0 next为空的链表
  let add = 0; //是否进一
  let sum = 0; //新链表当前未取余的值 = 链表 1 值 + 链表 2 值 + add;

  //遍历，直到最长的都为空
  while (l1 || l2) {
    sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + add;
    temp.next = new ListNode(sum % 10); //取余则为新链表的值
    temp = temp.next;
    add = sum >= 10 ? 1 : 0;
    l1 && (l1 = l1.next); //如果l1不为空，则取l1的下一个next等于l1
    l2 && (l2 = l2.next); //同理l2也是如此
  }
  add && (temp.next = new ListNode(add)); //如果add为1则temp后还需加一位
  return node.next;
};
```

#### 解法二

```javascript
const addTwoNumbers2 = (l1, l2, curr = 0) => {
  if (l1 === null && l2 === null) {
    if (curr) return new ListNode(curr);
    else return null;
  } else {
    if (l1 == null) l1 = new ListNode(0);
    if (l2 == null) l2 = new ListNode(0);

    let nextVal = (l2.val || 0) + (l1.val || 0) + curr;

    curr = 0;
    if (nextVal > 9) {
      curr = 1;
      nextVal -= 10;
    }
    l1.val = nextVal;
    l1.next = addTwoNumbers2(l1.next, l2.next, curr);
    return l1;
  }
};
```

### 理解：可以理解 l1,l2 为

```javascript
const l1 = {
  val: 2,
  next: {
    val: 4,
    next: {
      val: 3,
      next: null,
    },
  },
};
const l2 = {
  val: 5,
  next: {
    val: 6,
    next: {
      val: 7,
      next: null,
    },
  },
};
```
