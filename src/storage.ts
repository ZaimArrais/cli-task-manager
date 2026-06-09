import * as fs from "fs";
import type { Task } from "./types";

const filePath = "tasks.json";

export function loadTasks(): Task[] {
    if (!fs.existsSync(filePath)) {
        return [];
    }

    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
}

export function saveTasks(tasks: Task[]): void {
    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
}