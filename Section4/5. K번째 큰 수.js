function solution(n, k, card) {
  let tmp = new Set();

  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; i++) {
      for (let k = j + 1; k < n; k++) {
        tmp.add(card[i] + card[j] + card[k]);
      }
    }
  }
  let a = Array.from(tmp).sort((a, b) => b - a);
  return a[k - 1];

  //   let count = 0;
  //   let arr = [];
  //   card.sort((a, b) => b - a);
  //   for (let i = 0; i < n - 2; i++) {
  //     for (let j = i + 1; j < n - 1; j++) {
  //       for (let s = j + 1; s < n; s++) {
  //         let sum = card[i] + card[j] + card[s];
  //         if (arr.includes(sum)) continue;
  //         count++;
  //         if (count == k) return sum;
  //       }
  //     }
  //   }
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
