
# 时间复杂度

### 是什么？

* 一个函数，用大O表示，比如O(1)、O(n)、O(logN)...
* 定性描述该算法的时间

O(1)

```javascript
// O(1)
let i = 0;
i += 1
```
O(n)
```javascript
// O(n)
for(let i = 0; i < n; i+=1){
    console.log(i)
}
```
O(n)+O(1)=O(n)
```javascript
// O(n)+O(1)=O(n)
let i = 0;
i += 1
for(let j = 0; j < n; j+=1){
    console.log(j)
}
```
O(n)*O(n)=O(n^2)
```javascript
// O(n)*O(n)=O(n^2)
for(let i = 0; i < n; i+=1){
    for(let j = 0; j < n; j+=1){
        console.log(i,j)
    }
}
```
O(n)*O(n)=O(n^2)
```javascript
// O(n)*O(n)=O(n^2)
for(let i = 0; i < n; i+=1){
    for(let j = 0; j < n; j+=1){
        console.log(i,j)
    }
}
```

O(logN)
```javascript
// O(logN)
let i = 1;
while(i > n){
    console.log(i)
    i *= 2
}
```
