function solution(arr) {
  let answer = [];
  answer.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) answer.push(arr[i]);
  }
  return answer.join(" ");

  // let answer = [arr[0]];
  // arr.map((v, i) => {
  //   if (arr[i] > arr[i - 1]) answer.push(arr[i]);
  // });
  // return answer.join(" ");
}

console.log(solution([7, 3, 9, 5, 6, 12]));
