function solution(n) {
  // 강의 답
  let answer = Math.ceil(n / 12);
  return answer;

  // 내 답
  //   if (n % 12 === 0) return n / 12;
  //   return Math.floor(n / 12) + 1;
}

console.log(solution(25));
console.log(solution(178));
