function solution(s) {
  let answer = 0;
  let stack = [];

  for (let x of s) {
    if (!isNaN(x)) stack.push(Number(x));
    else {
      let rt = stack.pop(); // right
      let lt = stack.pop(); // left
      if (x === "+") stack.push(lt + rt);
      else if (x === "-") stack.push(lt - rt);
      else if (x === "*") stack.push(lt * rt);
      else if (x === "/") stack.push(lt / rt);
    }
  }
  answer = stack[0];
  return answer;
}

let str = "352+*9-";
console.log(solution(str));
