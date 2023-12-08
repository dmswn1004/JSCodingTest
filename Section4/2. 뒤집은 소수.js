function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(arr) {
  //   let answer = [];
  //   for (let x of arr) {
  //     let res = 0;
  //     while (x) {
  //       let t = x % 10;
  //       res = res * 10 + t;
  //       x = parseInt(x / 10);
  //     }
  //     if (isPrime(res)) answer.push(res);
  //   }
  //   return answer;

  let answer = [];
  for (let i of arr) {
    let num = Number(i.toString().split("").reverse().join(""));
    if (isPrime(num)) answer.push(num);
  }
  return answer.join(" ");
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
