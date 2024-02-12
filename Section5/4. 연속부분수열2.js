function solution(m, arr) {
  let answer = 0;
  let lt = 0;
  let sum = 0;

  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];

    while (sum > m) {
      sum -= arr[lt++];
    }
    // lt와 rt 사이의 연속부분수열 개수
    answer += rt - lt + 1;
  }
  return answer;
}

let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));
