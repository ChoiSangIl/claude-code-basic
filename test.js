/**
 * 간단한 테스트 파일
 */

const { greet, add, multiply, subtract, divide, power } = require('./index');

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
allPassed &= test('divide 함수', divide(10, 2), 5);
allPassed &= test('divide 함수 - 소수', divide(7, 2), 3.5);

let errorCaught = false;
try { divide(1, 0); } catch (e) { errorCaught = true; }
allPassed &= test('divide 함수 - 0으로 나누기 예외', errorCaught, true);
allPassed &= test('power 함수', power(2, 8), 256);

console.log('\n=== 결과 ===');
console.log(allPassed ? '모든 테스트 통과!' : '일부 테스트 실패');
