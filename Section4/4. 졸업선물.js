function solution(m, product) {
  let answer = 0;
  let n = product.length;
  // 상품 + 배송비 가격으로 오름차순 정렬
  product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

  // 모든 상품에 한번씩 할인 적용
  for (let i = 0; i < n; i++) {
    let money = m - (product[i][0] / 2 + product[i][1]); // 남은 예산
    let cnt = 1;
    for (let j = 0; j < n; j++) {
      if (j !== i && product[j][0] + product[j][1] > money) break;
      if (j !== i && product[j][0] + product[j][1] <= money) {
        money -= product[j][0] + product[j][1];
        cnt++;
      }
    }
    answer = Math.max(answer, cnt);
  }
  return answer;

  //   let answer = 0;
  //   let sum = 0;
  //   product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  //   for (let i = 0; i < product.length; i++) {
  //     let value = product[i][0] + product[i][1];
  //     if (sum + value <= m) {
  //       sum += value;
  //       answer++;
  //     } else if (sum + product[i][0] / 2 + product[i][1] <= m) {
  //       sum += product[i][0] / 2 + product[i][1];
  //       answer++;
  //     }
  //   }
  //   return answer;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));
