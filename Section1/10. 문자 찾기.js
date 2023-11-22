function solution(s, t) {
  // 강의  답
  let answer = 0;
  for (let x of s) {
    if (x === t) answer++;
  }
  return answer;

  // 맨 뒤에 t가 있어도 빈 문자열이 생기기 때문에 성립
  //   let answer = s.split(t).length;
  //   return answer - 1;

  // 내 답
  //   return s.split(t).length - 1;
}

console.log(solution("COMPUTERPROGRAMMING", "R"));
