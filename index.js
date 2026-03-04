/**
 * Claude Code 학습용 기본 예제
 *
 * 이 파일을 수정하면서 Claude Code의 기능을 테스트해보세요.
 * - 코드 수정 요청
 * - 버그 수정
 * - 기능 추가
 * - 리팩토링
 */

function greet(name) {
  return `안녕하세요, ${name}님!`;
}

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}

// 예제 실행
console.log(greet("Claude"));
console.log(`1 + 2 = ${add(1, 2)}`);
console.log(`3 * 4 = ${multiply(3, 4)}`);
console.log(`5 - 2 = ${subtract(5, 2)}`);
console.log(`2 ^ 8 = ${power(2, 8)}`);

module.exports = { greet, add, multiply, subtract, power };
