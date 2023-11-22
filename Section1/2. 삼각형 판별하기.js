function solution(a, b, c) {
  // 강의 답
  let answer = "YES",
    max;
  let tot = a + b + c;
  if (a > b) max = a;
  else max = b;
  if (c > max) max = c;
  if (tot - max <= max) answer = "NO";
  return answer;

  // 내 답
  //   let max = a;
  //   let sum = a + b + c;
  //   if (max < b) max = b;
  //   if (c > max) max = c;
  //   return max <= sum - max ? "YES" : "NO";
}

console.log(solution(6, 7, 11));
console.log(solution(13, 33, 17));
