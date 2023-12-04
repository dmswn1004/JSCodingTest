function solution(s, t) {
  // 방법 1 (문자열을 앞에서부터 탐색하면서 가장 가까운 t까지의 거리 구하기
  // 그리고 뒤에서부터 탐색하면서 가장 가까운 t까지의 거리를 구한 후 둘 중 작은 값을 answer에 넣음
  let answer = [];
  let p = 1000;
  for (let x of s) {
    if (x === t) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer.push(p);
    }
  }

  p = 1000;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) {
      p = 0;
    } else {
      p++;
      answer[i] = Math.min(answer[i], p);
    }
  }
  return answer.join(" ");

  // 방법 2
  //   let idx = [];
  //   let answer = [];
  //   s.split("").map((v, i) => {
  //     if (v === t) idx.push(i);
  //   });
  //   for (let i = 0; i < s.length; i++) {
  //     let min = Math.min(...idx.map((v) => Math.abs(v - i)));
  //     answer.push(min);
  //   }
  //   return answer.join(" ");
}

let str = "teachermode";
console.log(solution(str, "e"));
