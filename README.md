# CLI Task Manager

A simple command-line task management application built with TypeScript and Node.js. Tasks are stored locally in a JSON file, allowing users to manage their task list directly from the terminal.

## Features

- Add tasks
- View all tasks
- Mark tasks as completed
- Delete tasks
- Clear completed tasks
- Persistent local storage using JSON
- Colorized terminal output with Chalk
- Modular architecture with separated business logic and storage layers

## Tech Stack

- TypeScript
- Node.js
- Chalk
- File System API (JSON Storage)

## Project Structure

```text
src/
├── index.ts          # CLI command handling
├── taskService.ts    # Task management logic
├── storage.ts        # Read/write task data
└── types.ts          # Shared TypeScript interfaces
```

## Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/cli-task-manager.git
cd cli-task-manager
```

Install dependencies:

```bash
npm install
```

## Usage

### Add a Task

```bash
npx tsx src/index.ts add "Learn TypeScript"
```

### List Tasks

```bash
npx tsx src/index.ts list
```

### Complete a Task

```bash
npx tsx src/index.ts complete 8
```

### Delete a Task

```bash
npx tsx src/index.ts delete 8
```

### Clear Completed Tasks

```bash
npx tsx src/index.ts clearcompleted
```

## Example Output

<img width="221" height="147" alt="image" src="https://github.com/user-attachments/assets/6fadbe24-3d3f-48f2-8d80-cb326cbed140" />


## Learning Outcomes

This project helped me practice:

- TypeScript fundamentals
- Building command-line applications
- Working with file-based persistence
- Organizing code using separation of concerns
- Error handling and validation
- Using third-party npm packages
