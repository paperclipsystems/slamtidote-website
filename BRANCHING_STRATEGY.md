# Git Branching Strategy

## Overview
Simple branching strategy for project supporting Scrum development and frequent commits as required by the assignment.

**DON'T WORRY ABOUT TASK NUMBERS, SIMPLY USE A CONCISE STATEMENT OF WHAT YOU ARE DOING - I.E. FEATURE/HEADER-CREATION, FEATURE/HOMEPAGE-BACKGROUND**

## Branch Structure

### Main Branches

#### **main**
- Production-ready code
- Protected branch (requires PR reviews)
- Deploy to production
- Never commit directly

#### **develop**  
- Integration branch for development
- All features merge here first
- Deploy to staging/testing
- Protected branch

### Feature Branches

#### **Naming Convention, not fully sure on naming conventions?**
```bash
feature/<task-number>-<short-description>
feature/102-user-registration
feature/296-event-creation
feature/123-add-search-filters
```

#### **Bug Fixes**
```bash
bugfix/<issue-number>-<description>
bugfix/156-login-error
bugfix/89-date-validation
```

## Basic Workflow

### Starting New Feature
```bash
# 1. Update develop
git checkout develop
git pull origin develop

# 2. Create feature branch
git checkout -b feature/102-user-registration

# 3. Work and commit frequently (multiple times per day)
git add .
git commit -m "feat: add user registration form"
git add .  
git commit -m "feat: add form validation"
git add .
git commit -m "test: add registration tests"

# 4. Push regularly
git push origin feature/102-user-registration
```

### Completing Feature
```bash
# 1. Create Pull Request on GitHub
# 2. Get team review and approval
# 3. Merge to develop (use GitHub interface)
# 4. Delete feature branch
git checkout develop
git pull origin develop
git branch -d feature/102-user-registration
```

### Sprint/Milestone Release
```bash
# 1. Create release branch from develop
git checkout develop
git pull origin develop
git checkout -b release/milestone-2

# 2. Final testing and documentation
git commit -m "docs: update milestone 2 documentation"
git commit -m "fix: resolve final testing issues"

# 3. Merge to main (via PR)
# 4. Tag the release
git tag -a milestone-2 -m "Milestone 2..."
git push origin --tags
```

## Required Practices

### Frequent Commits
- **Multiple commits per day** (assignment requirement)
- Small, focused commits
- Push regularly to backup work
- Never one large commit at end

## Emergency Procedures

### Hotfix Process
```bash
# Critical production fix
git checkout main
git checkout -b hotfix/critical-issue
# Apply fix
git commit -m "hotfix: resolve critical security issue"
# PR to main (expedited review)
# Also merge to develop
```

### Merge Conflicts
```bash
# Update your branch first
git checkout develop
git pull origin develop
git checkout feature/your-branch
git merge develop
# Resolve conflicts in IDE
git commit -m "resolve: merge conflicts with develop"
```

## Quick Reference

###  Daily Commands
```bash
# Start work
git checkout develop && git pull origin develop
git checkout -b feature/new-task

# During work (multiple times per day)
git add .
git commit -m "feat: add validation logic"
git push origin feature/new-task

# End feature
# Create PR on GitHub → Review → Merge → Delete branch
```

### 8.2 Branch Cleanup
```bash
# After PR merged
git checkout develop
git pull origin develop
git branch -d feature/completed-task

# Clean up remote tracking
git remote prune origin
```