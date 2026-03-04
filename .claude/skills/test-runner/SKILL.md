---
name: test-runner
description: Run and analyze tests for this project. Use when the user wants to run tests, debug test failures, or check test results.
argument-hint: [test-name]
---

Run the project tests and analyze results:

1. Execute `npm test` to run all tests
2. If a specific test name is provided via $ARGUMENTS, focus on that test
3. Report which tests passed and which failed
4. For failures, explain the root cause and suggest a fix
5. If all tests pass, confirm the results clearly
