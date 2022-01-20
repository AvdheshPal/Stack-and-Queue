function minimumstack(str){
    let stack = [];
    let min
    console.log(min);
}

function runProgram(input) {
  input = input.trim().split('\n')
  let n = +input[0]
  let line = 1;
  let stack = [];
  let min;
  for (let i = 0 ; i < n ; i++){
     let str = input[line++].trim().split(' ')
     if(stack.length === 0 && str[0] === 'PUSH'){
         stack.push(+str[1])
         min = +str[1]
    }

     if(str[0] === 'PUSH'){
         if(+str[1] < min){
             stack.push((+str[1])-min)
             min = +str[1]
         }else{
             stack.push((+str[1]))
         }
     }
     else if(str[0] === 'POP'){
         if(stack[stack.length - 1] >= min){stack.pop()}
         else{
             min = min - stack[stack.length - 1]
             stack.pop();
            }
        }
        if(stack.length === 0) {console.log('EMPTY')}
        else if(str[0] === 'MIN'){
            console.log(min);
        }
  }  
 }
 if (process.env.USERNAME === "awdhesh") {
   runProgram(`10
   POP
   POP
   POP
   PUSH 68
   PUSH 14
   MIN
   PUSH 19
   PUSH 12
   PUSH 7
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