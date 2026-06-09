import type { Task } from "./types.js";
import { loadTasks, saveTasks } from "./storage.js";
import chalk from "chalk";

export function addTask(title:string): Task {
    const tasks = loadTasks();
    const nextId = tasks.map(task => task.id)
        .reduce((maxId, id) => Math.max(maxId, id), 0) + 1;
    const newTask: Task = {
        id: nextId,
        title,
        completed: false
    }

    tasks.push(newTask);
    saveTasks(tasks);
    return newTask;
}

export function listTasks(): Task[] {
    return loadTasks();
}

export function completeTask(id:number): Task | null {
    const tasks = loadTasks();
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.completed = true;
        saveTasks(tasks);
        return task;
    }
    return null;
}

export function deleteTask(id:number): Task | null {
    const tasks = loadTasks();
    const initialLength = tasks.length;
    const filteredTasks = tasks.filter(t => t.id !== id);
    if (filteredTasks.length === initialLength) {
        return null;
    }
    saveTasks(filteredTasks);
    return tasks.find(t => t.id === id) || null;
}


export function clearCompleted (): number {
    const tasks = loadTasks();
    
        const filteredTasks = tasks.filter(task => !task.completed);
        const removedCount = tasks.length - filteredTasks.length;
        saveTasks(filteredTasks);

    return removedCount;
}