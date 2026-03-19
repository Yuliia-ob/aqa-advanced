export default class UserService {
  async getUser() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

      if (!response.ok) {
        throw new Error("Error fetching USER");
      }

      return await response.json();
    } catch (error) {
      console.error("UserService error:", error);
      throw error;
    }
  }
}