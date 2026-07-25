```markdown
# portfolio-site Development Patterns

> Auto-generated skill from repository analysis

## Overview
This skill outlines the development patterns and conventions used in the `portfolio-site` TypeScript codebase. It covers file naming, import/export styles, commit message standards, and testing patterns to ensure consistency and maintainability throughout the project.

## Coding Conventions

### File Naming
- Use **camelCase** for all file names.
  - Example: `userProfile.ts`, `projectList.ts`

### Import Style
- Use **alias imports** for modules.
  - Example:
    ```typescript
    import { ProjectCard } from '@/components/projectCard';
    ```

### Export Style
- Use **named exports** for all modules.
  - Example:
    ```typescript
    export const ProjectCard = () => { /* ... */ };
    ```

### Commit Messages
- Follow **conventional commit** style.
- Use the `feat` prefix for new features.
- Keep commit messages concise (average 52 characters).
  - Example:
    ```
    feat: add responsive navigation bar
    ```

## Workflows

### Feature Development
**Trigger:** When adding a new feature  
**Command:** `/feature-development`

1. Create a new TypeScript file using camelCase naming.
2. Implement the feature using named exports.
3. Import dependencies using alias imports.
4. Write or update corresponding test files (`*.test.*`).
5. Commit changes using the `feat` prefix and a concise message.
6. Open a pull request for review.

### Code Testing
**Trigger:** When verifying code correctness  
**Command:** `/run-tests`

1. Locate or create test files matching the pattern `*.test.*`.
2. Run the test suite using the project's test runner (framework unknown; check project scripts).
3. Review and address any failing tests.
4. Commit any necessary fixes with an appropriate commit message.

## Testing Patterns

- Test files follow the `*.test.*` naming convention.
  - Example: `userProfile.test.ts`
- The specific testing framework is not detected; refer to project documentation or scripts for details.
- Tests should cover all exported functions and components.

## Commands
| Command              | Purpose                                 |
|----------------------|-----------------------------------------|
| /feature-development | Start a new feature implementation      |
| /run-tests           | Run the test suite for the codebase     |
```