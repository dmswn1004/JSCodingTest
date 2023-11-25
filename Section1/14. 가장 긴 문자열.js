function solution(s) {
  // 강의 답
  let answer = "";
  let max = Number.MIN_SAFE_INTEGER;
  for (let x of s) {
    if (x.length > max) {
      max = x.length;
      answer = x;
    }
  }

  return answer;
  // 내 답
  // let max = s[0];
  // for (let i = 1; i < s.length; i++) {
  //   if (max.length < s[i].length) max = s[i];
  // }
  // return max;
}

console.log(solution(["teacher", "time", "student", "beautiful", "good"]));
