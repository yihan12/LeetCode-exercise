 const isValid = function(s){
    if(s.length==0){
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
        stack.push(s[i])
      }
    }
    if(stack.length==0){
      return true
    }else{
      return false
    }
  }
