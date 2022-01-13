function parantheses(arr,n){
  let stack = [];
  for(let i = 0 ; i < n; i++){
    if(arr[i] == "{" || arr[i] == "[" || arr[i] == "("){
      stack.push(arr[i]);
    }
    else if((stack[stack.length - 1] == '(' && arr[i] ==')') || (stack[stack.length - 1] == '{' && arr[i] =='}') || (stack[stack.length - 1] == '[' && arr[i] ==']')){
      stack.pop();
    }else{
      console.log("not balanced");
      return
    }
  }

  if(stack.length === 0){console.log("balanced");}
  else{console.log("not balanced");}
}

function runProgram(input) {
   let inp = input.trim().split('\n')
   let n = +inp[0]
   let line = 1;
   for(let i = 0 ; i < n ; i++) {
     let arr = inp[line++].trim()
     parantheses(arr,arr.length)
   }
 }
 if (process.env.USERNAME === "awdhesh") {
   runProgram(`3
   ()
   {
   }`);
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