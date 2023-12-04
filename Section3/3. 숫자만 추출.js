function solution(str) {
  let answer = "";
  for (let s of str) {
    if (!isNaN(s)) answer += s;
  }
  return parseInt(answer);

  // 방법 2
  //   return Number(str.replace(/[^0-9]/g, ""));
}

let str = "g0en2T0s8eSoft";
console.log(solution(str));
