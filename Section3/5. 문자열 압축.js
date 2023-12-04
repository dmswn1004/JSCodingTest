function solution(s) {
  let answer = "";
  let cut = 1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      cut++;
    } else {
      answer += s[i];
      if (cut > 1) answer += cut.toString();
      cut = 1;
    }
  }
  return answer;
}

let str = "KKHSSSSSSSE";
console.log(solution(str));
