function solution(s) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toLowerCase()) answer += s[i].toUpperCase();
    else answer += s[i].toLowerCase();
  }
  return answer;
}

console.log(solution("StuDY"));
