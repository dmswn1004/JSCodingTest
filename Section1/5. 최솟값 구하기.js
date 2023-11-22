function solution(arr) {
  // 강의 답
  //   let answer,
  //     min = Number.MAX_SAFE_INTEGER;
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] < min) min = arr[i];
  //   }
  //   answer = min;
  //   return answer;

  // 보충 (내장함수 사용)
  // let answer = Math.min(...arr);
  let answer = Math.min.apply(null, arr);
  return answer;

  // 내 답
  // return Math.min(...arr);
}

let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));
