function solution(arr1, arr2) {
  // Two Pointers Algorithm 사용
  let answer = [];
  let n = arr1.length;
  let m = arr2.length;

  // 두 배열의 포인터 초기화
  let p1 = (p2 = 0);

  while (p1 < n && p2 < m) {
    if (arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]);
    else answer.push(arr2[p2++]);
  }

  // 하나의 배열이 끝나면 나머지 배열을 answer에 push
  while (p1 < n) answer.push(arr1[p1++]);
  while (p2 < m) answer.push(arr2[p2++]);
  return answer;

  //   let answer = [...arr1, ...arr2];
  //   return answer.sort((a, b) => a - b);
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
