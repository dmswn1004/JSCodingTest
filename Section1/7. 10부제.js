function solution(day, arr) {
  // 강의 답
  let answer = 0;
  for (let x of arr) {
    if (x % 10 == day) answer++;
  }

  return answer;

  // 내 답
  //   return arr.filter((a) => a % 10 === day).length;
}

arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));

arr2 = [12, 20, 54, 30, 87, 91, 30];
console.log(solution(0, arr2));
