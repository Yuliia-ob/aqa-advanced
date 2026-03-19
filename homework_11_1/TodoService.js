export default class TodoService {
  async getTodo() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

      if (!response.ok) {
        throw new Error("Error fetching TODO");
      }

      return await response.json();
    } catch (error) {
      console.error("TodoService error:", error);
      throw error;
    }
  }
}