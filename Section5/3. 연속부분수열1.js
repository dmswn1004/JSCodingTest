function solution(m, arr) {
  let answer = 0;
  // 2개의 포인터를 이용해서 풀이 (Two Pointers Algorithm)
  let lt = 0;
  let sum = 0;

  for (let rt = 0; rt < arr.length; i++) {
    // rt 포인터를 이동하면서 sum에 더해줌
    sum += arr[rt];
    if (sum === m) answer++;

    while (sum >= m) {
      // lt 포인터를 이동하면서 sum에서 빼줌
      sum -= arr[lt++];
      if (sum === m) answer++;
    }
  }
  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
