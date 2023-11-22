function solution(a, b, c) {
  let answer;
  // 강의 답
  if (a < b) answer = a;
  else answer = b;
  if (c < answer) answer = c;

  // 내 답
  // if (b < answer) {
  //   c < answer ? (answer = c) : (answer = b);
  // } else {
  //   c < answer ? (answer = c) : (answer = a);
  // }

  return answer;
}

console.log(solution(2, 5, 1));
