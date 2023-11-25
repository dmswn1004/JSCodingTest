function solution(s) {
  // 강의 답
  let answer = "";
  for (let x of s) {
    // if (x === x.toUpperCase()) answer += x;
    // else answer += x.toUpperCase();

    let num = x.charCodeAt();
    // 소문자일때
    if (num >= 97 && num <= 122) answer += String.fromCharCode(num - 32);
    else answer += x;
  }

  return answer;

  // 내 답
  // return s.toUpperCase();
}

console.log(solution("ItisTimeToStudy"));
