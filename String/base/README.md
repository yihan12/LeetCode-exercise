
### 字符串转为小写字母`str.toLowerCase()`转为大写字母`str.toUpperCase()`
```javascript
str.toLowerCase()
str.toUpperCase()
```

### 补全字符串 `str.padEnd()` `str.padStart()`
```javascript
let str = 'abc'
console.log(str.padEnd(10,'*')); // 'abc*******'
console.log(str.padStart(10,'*')); // '*******abc'
```

### 截取字符串 `str.substring(from, to)`
```javascript
let str = 'abc111fdnjsnds'
console.log(str.substring(0, 1)); // 'a'
console.log(str.substring(1, 1)); // ''
console.log(str.substring(1, 2)); // 'b'
console.log(str.substring(2, 8)); // 'c111fd'
```

### 截取字符串 `str.substr(start, length)`
```javascript
let str = 'abc111fdnjsnds'
console.log(str.substr(0, 1)); // 'a'
console.log(str.substr(1, 1)); // 'b'
console.log(str.substr(1, 2)); // 'bc'
console.log(str.substr(2, 8)); // 'c111fdnj'
```

### ASCII码转换 `charCodeAt` `fromCharCode`
```javascript
let a = '0',
b='9',
c='A',
d='Z',
e='a',
f='z';
console.log(a.charCodeAt(0)); // 48
console.log(b.charCodeAt(0)); // 57
console.log(c.charCodeAt(0)); // 65
console.log(d.charCodeAt(0)); // 90
console.log(e.charCodeAt(0)); // 97
console.log(f.charCodeAt(0)); // 122

console.log(String.fromCharCode(48, 57, 65, 90, 97, 122)); // '09AZaz'
```

### 二维数组

```javascript
let a = new Array(m).fill(0).map(x => x = new Array(n).fill(0))
```
