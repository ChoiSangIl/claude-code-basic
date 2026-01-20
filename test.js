/**
 * 간단한 테스트 파일
 */

const { greet, add, multiply, subtract } = require('./index');

function test(name, actual, expected) {
  const passed = actual === expected;
  console.log(`${passed ? '✓' : '✗'} ${name}`);
  if (!passed) {
    console.log(`  Expected: ${expected}`);
    console.log(`  Actual: ${actual}`);
  }
  return passed;
}

console.log('=== 테스트 실행 ===\n');

let allPassed = true;

allPassed &= test('greet 함수', greet('테스트'), '안녕하세요, 테스트님!');
allPassed &= test('add 함수', add(2, 3), 5);
allPassed &= test('multiply 함수', multiply(3, 4), 12);
allPassed &= test('subtract 함수', subtract(5, 2), 3);

console.log('\n=== 결과 ===');
console.log(allPassed ? '모든 테스트 통과!' : '일부 테스트 실패');
