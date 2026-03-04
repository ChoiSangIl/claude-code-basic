---
name: create-pr
description: Create a pull request with an AI-generated code review summary in the description, highlighting areas that reviewers should pay special attention to. Use when the user wants to open a PR with reviewer guidance.
argument-hint: [PR title]
---

Create a pull request with an AI-awareness notice for reviewers:

1. Run `git status` and `git diff main...HEAD` (or `master...HEAD`) to understand what changed
2. Analyze the changed code for:
   - AI-generated code patterns that need human verification
   - Missing input validation or error handling
   - Edge cases that may not be covered
   - Logic that looks correct but may have subtle bugs
3. Run `git log main...HEAD --oneline` to summarize commits
4. Build the PR description in Korean using this format:

```
## 변경 사항 요약
<bullet points summarizing what was changed>

## 🤖 AI 생성 코드 리뷰어 주의사항

> 이 PR의 일부 또는 전체 코드는 AI(Claude)가 생성했습니다.
> 아래 항목은 AI 코드에서 자주 발생하는 문제입니다. **사람이 직접 검토**해주세요.

### 주의 깊게 봐야 할 부분

For each risky area found, add:
- **[파일명:함수명]** - 주의 이유
  - 위험도: 🔴 높음 / 🟡 중간 / 🟢 낮음
  - 확인 포인트: 구체적으로 무엇을 확인해야 하는지

### ✅ 테스트된 항목
<list what is covered by tests>

### ❓ 테스트되지 않은 항목
<list edge cases or scenarios not covered>

---
🤖 Generated with [Claude Code](https://claude.com/claude-code)
```

5. Use the title from $ARGUMENTS if provided, otherwise infer a concise title from the changes
6. Create the PR using:
   ```
   gh pr create --title "<title>" --body "<description above>"
   ```
7. After the PR is created, post inline review comments on specific lines of code that need attention using the GitHub API:
   ```
   gh api repos/{owner}/{repo}/pulls/{pull_number}/comments \
     --method POST \
     --field body="<comment>" \
     --field commit_id="<latest commit sha>" \
     --field path="<file path>" \
     --field line=<line number>
   ```
   For each risky or notable code section identified in step 2, post a comment on that specific line explaining:
   - What the code does
   - Why it needs attention (if it's a risk)
   - What the reviewer should verify

   Use Korean for all comments.

8. Return the PR URL and list which lines received comments
