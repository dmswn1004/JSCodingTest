function solution(str1, str2) {
  let answer = "YES";
  let sH = new Map();

  for (let x of str1) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }
  for (let x of str2) {
    if (!sH.has(x) || sH.get(x) === 0) return "NO";
    sH.set(x, sH.get(x) - 1);
  }
  return answer;

  //   str1 = [...str1].sort((a, b) => a.localeCompare(b)).join("");
  //   str2 = [...str2].sort((a, b) => a.localeCompare(b)).join("");
  //   return str1 === str2 ? "YES" : "NO";
}

let a = "AbaAeCe";
let b = "baeeACA";
let c = "abaCC";
let d = "Caaab";
console.log(solution(a, b));
console.log(solution(c, d));
