function solution(a, b) {
  // 1:가위, 2:바위, 3:보
  let answer = [];
  a.forEach((v, i) => {
    if (v === b[i]) answer.push("D");
    else if (v === 1 && b[i] === 3) answer.push("A");
    else if (v === 2 && b[i] === 1) answer.push("A");
    else if (v === 3 && b[i] === 2) answer.push("A");
    else answer.push("B");
  });
  return answer.join("\n");
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));
