# Steps to File the New Playwright Issue

## 1. Push the Minimal Reproduction to GitHub

First, you need to create a GitHub repository with the minimal reproduction:

```bash
cd /tmp/playwright-esm-preflight-bug

# Option A: Create a new GitHub repo via CLI (if you have gh CLI)
gh repo create playwright-esm-preflight-bug --public --source=. --push

# Option B: Create manually
# 1. Go to https://github.com/new
# 2. Create a repository named "playwright-esm-preflight-bug"
# 3. Then run:
git remote add origin https://github.com/YOUR_USERNAME/playwright-esm-preflight-bug.git
git branch -M main
git push -u origin main
```

## 2. File the New Issue

1. Go to: https://github.com/microsoft/playwright/issues/new/choose
2. Click on **"Bug Report"** template
3. Copy the content from `NEW_ISSUE_TEMPLATE.md` 
4. **UPDATE** the "Minimal Reproduction Repository" section with your GitHub repo link
5. Submit the issue

## 3. Link the New Issue

After creating the new issue:
1. Copy the new issue URL
2. Go back to the original issue: https://github.com/microsoft/playwright/issues/39028
3. Add a comment:
   ```
   Filed new issue with minimal reproduction: #[NEW_ISSUE_NUMBER]
   ```

## What You've Created

The minimal reproduction includes:
- ✅ Fresh project (not your entire codebase)
- ✅ Only essential dependencies (@playwright/test, tsx)
- ✅ Minimal config file with tsx/esm
- ✅ Simple test file that demonstrates the bug
- ✅ Clear README with steps
- ✅ Environment info from `npx envinfo --preset playwright`
- ✅ Actual error output
- ✅ Works on 1.57.0, fails on 1.58.0

## Alternative: Share as Zip

If you don't want to create a GitHub repo, you can:

```bash
cd /tmp
tar -czf playwright-esm-preflight-bug.tar.gz playwright-esm-preflight-bug/
```

Then attach the `playwright-esm-preflight-bug.tar.gz` file to the GitHub issue.

---

**All files are ready at:** `/tmp/playwright-esm-preflight-bug`
