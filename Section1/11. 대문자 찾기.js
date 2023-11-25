function solution(s) {
  // 강의 답
  let answer = 0;
  for (let x of s) {
    // if (x === x.toUpperCase()) answer++;
    let num = x.charCodeAt();
    if (num >= 65 && num <= 90) answer++;
  }
  return answer;

  // 내 답
  // return s.replace(/[^A-Z]/g, "").length;
}

console.log(solution("KoreaTimeGood"));
