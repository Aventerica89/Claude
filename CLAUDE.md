# CLAUDE.md - AI Assistant Guide

> **Last Updated:** 2025-11-30
> **Repository:** Aventerica89/Claude
> **Purpose:** Testing Environment

## Overview

This repository serves as a testing environment for development and experimentation. It follows a minimal structure designed for flexibility and ease of use.

## Repository Structure

```
/home/user/Claude/
├── .git/                 # Git version control
├── README.md            # Basic repository description
└── CLAUDE.md           # This file - AI assistant guide
```

### Current State
- **Status:** Minimal setup with initial commit
- **Main Files:** README.md only
- **Configuration:** None currently
- **Dependencies:** None currently

## Development Workflow

### Git Branch Strategy

This repository uses a feature branch workflow with specific naming conventions:

#### Branch Naming Convention
```
claude/<description>-<session-id>
```

**Example:** `claude/claude-md-mila3xdel9u0s1uz-015ZjQwAGkCd3MH6p73R2n54`

#### Current Working Branch
```bash
claude/claude-md-mila3xdel9u0s1uz-015ZjQwAGkCd3MH6p73R2n54
```

### Git Operations

#### Creating a New Branch
```bash
git checkout -b claude/<feature-name>-<session-id>
```

#### Committing Changes
```bash
# Stage changes
git add <files>

# Commit with descriptive message
git commit -m "type: brief description

Detailed explanation of changes"
```

**Commit Message Types:**
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

#### Pushing Changes
```bash
# Always use -u flag for first push
git push -u origin claude/<branch-name>
```

**Important:** Branch names MUST:
- Start with `claude/`
- End with matching session ID
- Otherwise push will fail with 403 error

#### Network Retry Logic
If network failures occur during fetch/pull/push:
- Retry up to 4 times
- Use exponential backoff: 2s, 4s, 8s, 16s
- Example: Try → Wait 2s → Retry → Wait 4s → Retry → etc.

### Pull Request Process

1. **Complete Development:** Ensure all changes are committed
2. **Push Branch:** Push feature branch to origin
3. **Create PR:** Use descriptive title and detailed description
4. **Include in PR:**
   - Summary of changes (1-3 bullet points)
   - Test plan or verification steps
   - Any breaking changes or migration notes

## Code Conventions

### General Principles

1. **Simplicity First**
   - Avoid over-engineering
   - Make only requested or clearly necessary changes
   - Keep solutions focused and minimal

2. **Security Awareness**
   - Prevent command injection
   - Avoid XSS vulnerabilities
   - Guard against SQL injection
   - Follow OWASP top 10 best practices

3. **No Premature Optimization**
   - Don't add features beyond what's requested
   - Don't refactor surrounding code unnecessarily
   - Don't add comments/docs to unchanged code
   - Three similar lines is better than premature abstraction

4. **Clean Deletions**
   - Remove unused code completely
   - No backwards-compatibility hacks
   - No `_var` renames or `// removed` comments
   - If unused, delete it

### File Operations

**Prefer:**
- `Read` tool for reading files (not `cat/head/tail`)
- `Edit` tool for editing files (not `sed/awk`)
- `Write` tool for creating files (not `echo >/cat <<EOF`)
- `Grep` tool for searching (not `grep/rg` commands)
- `Glob` tool for finding files (not `find/ls`)

**Reserve Bash for:**
- Terminal operations (git, npm, docker, etc.)
- System commands requiring shell execution
- Never for file operations or user communication

### Error Handling

- Only validate at system boundaries (user input, external APIs)
- Trust internal code and framework guarantees
- Don't add error handling for scenarios that can't happen
- Fix security vulnerabilities immediately when discovered

## Development Guidelines for AI Assistants

### Before Making Changes

1. **Read First:** Always read files before proposing changes
2. **Understand Context:** Review related code and dependencies
3. **Plan Tasks:** Use TodoWrite tool for multi-step tasks
4. **Verify Locations:** Use `ls` to verify directories exist before creating files/folders

### Task Management

Use the TodoWrite tool for:
- Complex multi-step tasks (3+ steps)
- Non-trivial operations
- Multiple user-requested tasks
- Tracking progress on complex implementations

**Task States:**
- `pending`: Not started
- `in_progress`: Currently working (ONE at a time)
- `completed`: Finished successfully

**Requirements:**
- Mark tasks completed IMMEDIATELY when done
- Don't batch completions
- Exactly ONE task in_progress at a time
- Complete current task before starting new one

### When to Use Task Tool (Agents)

Use specialized agents for:
- **Explore agent:** Codebase exploration, understanding structure
- **Plan agent:** Planning complex implementations
- **claude-code-guide agent:** Questions about Claude Code features

**Don't use Task tool for:**
- Single specific file reads
- Specific class/function searches (use Glob)
- Searching within 2-3 known files (use Read)

### Parallel vs Sequential Operations

**Parallel (single message, multiple tools):**
- Independent commands
- Multiple file reads
- Concurrent searches
- Example: `git status` + `git diff`

**Sequential (chained with &&):**
- Dependent operations
- Example: `mkdir foo && cp file foo/`
- Example: `git add . && git commit && git push`

## Project-Specific Information

### Purpose
This is a testing environment for development experimentation.

### Technology Stack
Currently minimal - no specific technologies configured.

### Key Files
- `README.md`: Basic project description
- `CLAUDE.md`: This AI assistant guide (you are here)

### Configuration Files
None currently configured.

### Dependencies
None currently configured.

## Testing

### Current Test Setup
No testing framework currently configured.

### When Adding Tests
- Choose appropriate testing framework for the project type
- Follow test naming conventions
- Include both unit and integration tests where appropriate
- Ensure tests pass before committing

## Deployment

### Current Deployment
Not applicable - testing environment only.

### Future Deployment Considerations
- Document deployment process when established
- Include environment configuration requirements
- Note any CI/CD pipeline setup

## Common Tasks

### Adding New Features
1. Create feature branch with proper naming
2. Implement minimal viable solution
3. Test thoroughly
4. Commit with descriptive messages
5. Push and create PR

### Fixing Bugs
1. Identify root cause
2. Write test to reproduce (if applicable)
3. Implement minimal fix
4. Verify fix resolves issue
5. Commit and push

### Updating Documentation
1. Keep documentation current with code
2. Update this file when conventions change
3. Include inline comments only where logic isn't self-evident
4. Use markdown formatting for readability

## Resources

### Git Configuration
```bash
# View current config
git config --list

# View remote repositories
git remote -v
```

### Repository Information
- **Remote Origin:** `http://local_proxy@127.0.0.1:63845/git/Aventerica89/Claude`
- **Platform:** Linux 4.4.0
- **Working Directory:** `/home/user/Claude`

## Notes for AI Assistants

### Communication Style
- Concise and focused responses
- Use GitHub-flavored markdown
- No emojis unless explicitly requested
- Output text directly (not via echo/bash)
- Professional and objective tone

### File Creation Policy
- **NEVER** create files unless absolutely necessary
- **ALWAYS** prefer editing existing files
- Don't create documentation files unless explicitly requested
- This includes README.md, docs/, etc.

### Code Review Checklist
Before completing work, verify:
- [ ] Security vulnerabilities addressed
- [ ] Only requested changes made
- [ ] No over-engineering or premature abstraction
- [ ] Unused code completely removed
- [ ] Tests pass (when applicable)
- [ ] Commit messages are descriptive
- [ ] Changes pushed to correct branch

## Changelog

### 2025-11-30
- Initial CLAUDE.md creation
- Established git workflow conventions
- Documented development guidelines
- Set up AI assistant best practices

---

**For Questions or Updates:**
- Modify this file as the repository evolves
- Keep conventions synchronized with actual practices
- Document new patterns as they emerge
- Update last modified date when making changes
