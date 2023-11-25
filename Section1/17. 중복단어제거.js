function solution(s) {
  // 강의 답
  let answer = s.filter((a, i) => {
    return s.indexOf(a) === i;
  });

  return answer.join("\n");

  // 내 답
  // let answer = [];
  // for (let i = 0; i < s.length; i++) {
  //   if (!answer.includes(s[i])) answer.push(s[i]);
  // }
  // return answer.join("\n");
}

console.log(solution(["good", "time", "good", "time", "student"]));
