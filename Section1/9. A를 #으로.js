function solution(s) {
  // 강의 답
  let answer = "";
  for (let x of s) {
    if (x == "A") answer += "#";
    else answer += x;
  }
  return answer;

  //   let answer = s;
  //   answer = answer.replace(/A/g, "#");
  //   return answer;

  // 내 답
  //   return s.replace(/A/g, "#");
  //   return s.replaceAll("A", "#");
  //   return s.split("A").join("#");
}

let str = "BANANA";
console.log(solution(str));
