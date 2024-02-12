function solution(s) {
  // Map을 이용한 방법
  let answer = "";
  let sH = new Map();
  for (let x of s) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }
  // sH 값 : Map(5) { 'B' => 3, 'A' => 3, 'C' => 5, 'D' => 2, 'E' => 2 }
  let max = Number.MIN_SAFE_INTEGER;
  for (let [key, val] of sH) {
    if (val > max) {
      max = val;
      answer = key;
    }
  }
  return answer;
  // Object를 이용한 방법
  //   let answer = "";
  //   let max = 0;
  //   let obj = new Object();
  //   [...s].map((v) => {
  //     obj[v] = (obj[v] || 0) + 1;
  //   });
  //   // obj 값 : { B: 3, A: 3, C: 5, D: 2, E: 2 }
  //   for (let v in obj) {
  //     if (obj[v] > max) {
  //       max = obj[v];
  //       answer = v;
  //     }
  //   }
  //   return answer;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));
