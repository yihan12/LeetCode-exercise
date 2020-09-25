# LeetCode 第 4 号问题：寻找两个正序数组的中位数

### 题目地址

> https://leetcode-cn.com/problems/median-of-two-sorted-arrays/

### 题目描述

给定两个大小为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。

请你找出这两个正序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。

你可以假设 nums1 和 nums2 不会同时为空。


**示例 1:**

```javascript
nums1 = [1, 3]
nums2 = [2]

则中位数是 2.0
示例 2:

nums1 = [1, 2]
nums2 = [3, 4]

则中位数是 (2 + 3)/2 = 2.5
```

### 思路
暴力解决方法:拼接后找中位数

### 代码一

```javascript
const findMedianSortedArrays = function(nums1, nums2) {
    let arr=nums1.concat(nums2)// 合并两个数组
    arr.sort((a, b) => a - b)// 新数组从小到大排序
    let length = arr.length
    if(length%2==0){
        /**
         * 数组长度为偶数，输出中间两数之和的平均值
        */
        return (arr[length/2]+arr[length/2-1])/2
    }else{
        /**
         * 数组长度为奇数，输出中间数
        */
        return arr[(length-1)/2]
    }
};
```

### 代码二

代码最少的方法，时间复杂度为O((m + n)log(m + n))

```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function(nums1, nums2) {
    const arr = [...nums1, ...nums2].sort((a, b) => a - b);
    const { length } = arr;
    return length % 2 ? arr[Math.floor(length / 2)] : (arr[length / 2] + arr[length / 2 - 1]) / 2;
}
```












