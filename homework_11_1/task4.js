import TodoService from "./TodoService.js";
import UserService from "./UserService.js";

const todoService = new TodoService();
const userService = new UserService();

// Promise.all
async function getAllData() {
  try {
    const [todo, user] = await Promise.all([
      todoService.getTodo(),
      userService.getUser()
    ]);

    console.log("TODO:", todo);
    console.log("USER:", user);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Promise.race
async function getRaceData() {
  try {
    const result = await Promise.race([
      todoService.getTodo(),
      userService.getUser()
    ]);

    console.log("First result:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}

getAllData();
getRaceData();