function solution(arr) {
  let answer = 0;
  let cnt = 0;
  for (let x of arr) {
    if (x === 1) {
      cnt++;
      answer += cnt;
    } else cnt = 0;
  }
  return answer;

  //   let answer = [];
  //   arr.map((v, i) => {
  //     if (v === 1) {
  //       if (arr[i - 1] === 1) {
  //         answer.push(answer.at(-1) + 1);
  //       } else {
  //         answer.push(1);
  //       }
  //     }
  //   });
  //   return answer.reduce((a, c) => a + c, 0);
}

console.log(solution([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));
