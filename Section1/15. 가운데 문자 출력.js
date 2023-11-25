function solution(s) {
  // 강의 답
  let answer = "";
  let mid = Math.floor(s.length / 2);
  // if (s.length % 2 === 1) answer = s.substring(mid, mid + 1);
  // else answer = s.substring(mid - 1, mid + 1);
  // return answer;

  if (s.length % 2 === 1) return s.substr(mid, 1);
  else return s.substr(mid - 1, 2);

  // substr() vs substring()
  // substr()은 (시작 인덱스, 개수)로 지정
  // substring()은 (시작 인덱스, 끝 인덱스(포함 X))로 지정

  // 내 답
  // if (s.length % 2 !== 0) return s[Math.floor(s.length / 2)];
  // else return s[Math.floor(s.length / 2) - 1] + s[Math.floor(s.length / 2)];
}

console.log(solution("study"));
console.log(solution("good"));
