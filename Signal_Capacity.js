function signal(k,arr){
    let stack = [0];
    let ans = [1];
    for(let i=0;i<arr.length;i++){
        while(stack.length!=0 && arr[stack[stack.length - 1]] <= arr[i]){
            stack.pop();
        }
        ans[i] = stack.length == 0 ? i+1 : i - stack[stack.length-1];
        stack.push(i)
    } 
    console.log(...ans);
}

function runProgram(input) {
  input = input.trim().split('\n')
  let n = 2;
  let line = 1;
  for(let i = 0; i < n; i++) {
      let k = +input[line++].trim()
      let arr = input[line++].trim().split(' ').map(Number)
     signal(k,arr)
  }
  
 }
 if (process.env.USERNAME === "awdhesh") {
   runProgram(`2
   7
   100 80 60 70 60 75 85
   5
   3 5 0 9 8`);
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