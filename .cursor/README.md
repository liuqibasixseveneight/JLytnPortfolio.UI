## Cheat sheet for creating rules with Cursor

### Directory structure rule

```
@cursor-rules.mdc List all source files and folders in the project,
and create a new cursor rule outlining the directory structure and important files and folders.
```

### Tech stack rule

```
@cursor-rules.mdc @package.json Analyze all major dependencies
and create a cursor rule outlining the stack of the application
and the versions I'm using, and any remarks on best practices on those versions.
```

### Adding a new dependency rule

```
@cursor-rules.mdc @package.json Analyze all major dependencies
and update the @tech-stack.mdc rule with the latest versions of the dependencies, outlining the best practices for those versions.
```

### Generating rules generically for any file type

```
@cursor-rules.mdc [ @components/ui/button.tsx ]
/Generate Cursor Rules
I want to generate a cursor rule for this [ file type ]. Please analyze it carefully and outline all of the conventions found. Output as one rule file only.
```
