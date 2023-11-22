function solution(arr) {
  // 강의 답
  let answer = [];
  let sum = 0,
    min = Number.MAX_SAFE_INTEGER;
  for (let x of arr) {
    if (x % 2 === 1) {
      sum += x;
      if (x < min) min = x;
    }
  }
  answer.push(sum);
  answer.push(min);
  return answer;

  // 내 답
  //   let sum = 0;
  //   let min = Number.MAX_SAFE_INTEGER;

  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] % 2 !== 0) {
  //       sum += arr[i];
  //       if (min > arr[i]) min = arr[i];
  //     }
  //   }

  //   return `${sum}\n${min}`;
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
