---
name: code-review
description: Review code quality, test coverage, and potential issues. Emphasizes areas that require human attention in AI-generated code. Use when the user wants a code review or quality check.
argument-hint: [filename]
---

Review the codebase with a focus on AI-generated code risks:

1. Read `index.js` and `test.js` (or the file specified in $ARGUMENTS)
2. Analyze each function for:
   - Correctness and edge cases
   - Input validation and error handling
   - Potential bugs or unexpected behavior
3. Evaluate test coverage:
   - Which cases are tested vs. missing
   - Whether edge cases (null, negative, overflow, etc.) are covered
4. Format the review with these sections:

   ## 코드 리뷰 결과

   ### ✅ 잘 된 점
   List what looks good

   ### ⚠️ AI 생성 코드 주의 사항
   > **[AI 생성 코드 경고]** 다음 항목은 AI가 작성한 코드에서 자주 발생하는 문제로, 사람이 직접 검토해야 합니다.

   For each issue found, format as:
   - **함수명** - 문제 설명
     - 위험도: 🔴 높음 / 🟡 중간 / 🟢 낮음
     - 이유: AI 생성 코드에서 이 패턴이 왜 위험한지 설명
     - 권장 조치: 구체적인 수정 방법 제시

   ### 🔍 테스트 커버리지 평가
   List missing test cases with suggested test code snippets

   ### 📋 총평
   Overall assessment and priority action items

5. Always remind the user at the end:
   > **주의**: 이 리뷰 자체도 AI가 생성한 것입니다. 중요한 코드는 반드시 사람이 최종 검토하세요.
