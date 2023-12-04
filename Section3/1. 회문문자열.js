function solution(s) {
  // 방법 1 (메서드를 사용하지 않고 배열 인덱스 번호 n번째와 len-n-1번째를 비교)
  //   let answer = "YES";
  //   s = s.toLowerCase();
  //   let len = s.length;
  //   for (let i = 0; i < Math.floor(len / 2); i++) {
  //     if (s[i] !== s[len - i - 1]) return "NO";
  //   }
  //   return answer;

  // 방법 2
  let answer = "YES";
  s = s.toLowerCase();
  if (s.split("").reverse().join("") !== s) return "NO";
  return answer;

  // 방법 3
  //   return s.toUpperCase() === s.toUpperCase().split("").reverse().join("") ? "YES" : "NO";
}

console.log(solution("goooG"));
