function solution(arr) {
  let answer = arr;
  let sum = arr.reduce((a, b) => a + b, 0);
  let flag = false;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        arr.splice(j, 1);
        arr.splice(i, 1);
        flag = true;
        break;
      }
    }
    if (flag) break;
  }
  return answer;
}

let arr = [22, 7, 21, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));

console.log(solution([20, 7, 23, 19, 10, 15, 25, 8, 13]));
