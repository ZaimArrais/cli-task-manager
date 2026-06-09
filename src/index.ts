#!/usr/bin/env node
import chalk from "chalk";
import { addTask, listTasks, completeTask, deleteTask, clearCompleted } from "./taskService.js";

const args = process.argv.slice(2);
const command = args[0];

const commands = {
            add: handleAddCommand,
            list: handleListCommand,
            complete: handleCompleteCommand,
            delete: handleDeleteCommand,
            clearcompleted: handleClearCompletedCommand,
        };    

        const handler = command 
        ? commands[command as keyof typeof commands] 
        : undefined;

        if (handler) {
            handler(args);
        } else {
            console.log("Unknown command");
        }

function handleAddCommand(args: string[]) {
     const title = args[1];

    if (!title) {
        console.error("Please provide a task title.");
        process.exit(1);
    }

    const newTask = addTask(title);
            console.log(
            chalk.green("! Task added:"),
            `${newTask.id}. ${newTask.title}`
        );
    }

function handleDeleteCommand(args: string[]) {
    const rawDeleteId = args[1];
        const deleteId = Number(rawDeleteId);
        const deleteResult = deleteTask(deleteId);  
        if (!deleteResult) {
            console.error("Task not found.");
            process.exit(1);
        }
        console.log(chalk.red("✖ Task deleted:"), deleteResult.id);
    }

function handleListCommand() {
        const tasks = listTasks();
        
        if (tasks.length === 0) {
            console.log(chalk.yellow("No tasks found!"));
            process.exit(0);
        }

        console.log("\n━━━━━━━━━━━━━━━━━━━━");
        console.log(chalk.bold("Task List"));
        console.log("━━━━━━━━━━━━━━━━━━━━\n");

        tasks.forEach(task => {
            const status = task.completed
                ? chalk.green("[✔]")
                : chalk.red("[x]");

            const title = task.completed
                ? chalk.strikethrough(task.title)
                : task.title;

            console.log(`${status} ${task.id}. ${title}`);
        });

        const completedCount = tasks.filter(t => t.completed).length;

        console.log(
            `\nTotal: ${tasks.length} | Completed: ${completedCount}\n`
        ); 
    }

function handleCompleteCommand(args: string[]) {
    const rawId = args[1];
        const id = Number(rawId);
        const result = completeTask(id);

        if (!result) {
            console.error("Task not found.");
            process.exit(1);
        }

        console.log(
            chalk.blue("✔ Task completed:"),
            `${result.id}. ${result.title}`
        );
    }

    function handleClearCompletedCommand() {
        const removed = clearCompleted();

        if (removed === 0) {
            console.log(chalk.yellow("No completed tasks to clear!"));
        }
        else {
            console.log(chalk.green(`${removed} completed tasks cleared!`));
        };

    }