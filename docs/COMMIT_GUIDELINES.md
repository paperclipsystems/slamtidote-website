# Git Commit Message Guidelines

## Overview
Standardised commit message format for EventHub project to maintain clear project history.

## Basic Format

```
<type>: <description>

[optional body]
```

### Rules
- **Use present tense**: "Add feature" not "Added feature"  

## Commit Types

### Main Types
```bash
feat: add new feature
fix: bug fix
docs: documentation changes
test: add or update tests
refactor: code refactoring
style: formatting changes
chore: maintenance tasks
```
*FOR ANY COMMIT TYPES WHERE YOU ARE UNSURE, TRY TO FIND THE CLOSEST THING*

### Examples
```bash
# Features
feat: add user registration form
feat: implement event creation
feat: add RSVP functionality

# Bug fixes  
fix: resolve login validation error
fix: correct event date display
fix: fix responsive design on mobile

# Documentation
docs: update API documentation
docs: add installation instructions
docs: update README with setup steps

# Tests
test: add event service unit tests
test: add integration tests for user registration
test: increase controller test coverage

# Maintenance
chore: update documentation
chore: clean code implmentation
```
## Detailed Examples

### Simple Commits
```bash
feat: add event creation form
fix: resolve password validation
docs: update setup instructions
test: add user service tests
refactor: extract validation logic
```

### Commits with Body
```bash
feat: implement email notification system

Add automated email reminders for upcoming events.
Users receive notifications 24 hours before events.

- Configure JavaMailSender
- Add EmailService class  
- Create email templates
- Add scheduled task for reminders
```

## Team Collaboration

### Pair Programming
```bash
feat: implement admin user management

Co-authored-by: Alice Smith <alice@student.rmit.edu.au>
Co-authored-by: Bob Jones <bob@student.rmit.edu.au>
```

### Code Review Fixes
```bash
fix: address PR review feedback

- Extract validation to separate method
- Add error handling for null inputs
- Update test coverage
- Fix code formatting issues

addresses the ... issue described by [name]
```

## 7. What NOT to Do

### 7.1 Bad Examples
```bash
# Too vague
git commit -m "fixes"
git commit -m "updates"
git commit -m "changes"

# Wrong tense  
git commit -m "fixed bug"
git commit -m "added feature"

# Too long
git commit -m "feat: add comprehensive event creation functionality with validation, error handling, and user interface improvements"
```

### Good Examples
```bash
# Clear and specific
git commit -m "fix: resolve login timeout issue"
git commit -m "feat: add event creation form"
git commit -m "test: add user registration tests"
```