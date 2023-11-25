function solution(s) {
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    // if (answer.indexOf(s[i]) === -1) answer += s[i];
    if (s.indexOf(s[i]) === i) answer += s[i];
  }

  return answer;
}

console.log(solution("ksekkset"));

function countChar(s) {
  let answer = 0;
  let pos = s.indexOf("k");

  while (pos !== -1) {
    answer++;
    // indexOf의 두번째 인자는 검색 시작 위치
    pos = s.indexOf("k", pos + 1);
  }

  return answer;
}

console.log(countChar("ksekkset"));
