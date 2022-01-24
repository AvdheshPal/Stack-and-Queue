function runProgram(input) {
  input = input.trim().split('\n')
  let n = +input[0]
  let line = 1;
  let stack = [];
  let min = []
  for (let i = 0 ; i < n ; i++){
     let str = input[line++].trim().split(' ')
     if(stack.length === 0 && str[0] === 'PUSH'){
         stack.push(+str[1])
         min.push(+str[1])
     }
     else if(str[0] === 'PUSH'){
       if(str[1] < min[min.length-1]){
         min.push(+str[1])
         stack.push(+str[1])
       }else{
         stack.push(+str[1])
       }
     }
     else if(str[0] === 'POP'){
       if(stack.length === 0){console.log('EMPTY')}
       if(min[min.length - 1] == stack[stack.length - 1]){
         min.pop()
         stack.pop()
       }
       else{
         stack.pop();
       }
     }
     else if(str[0] === 'MIN'){
       console.log(min[min.length-1]);
     }
    
    
  }  

  // function getMin(){
  //     return min[min.length-1];
    
  // }
 }
 if (process.env.USERNAME === "awdhesh") {
   runProgram(`11
   PUSH 5
   PUSH 7
   PUSH 3
   PUSH 8
   PUSH 10
   MIN
   POP
   POP
   MIN
   POP
   MIN`);
 } else {
   process.stdin.resume();
   process.stdin.setEncoding("ascii");
   let read = "";
   process.stdin.on("data", function (input) {
     read += input;
   });
   process.stdin.on("end", function () {
     read = read.replace(/\n$/, "");
     read = read.replace(/\n$/, "");
     runProgram(read);
   });
   process.on("SIGINT", function () {
     read = read.replace(/\n$/, "");
     runProgram(read);
     process.exit(0);
   });
 }