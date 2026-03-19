async function getTodo() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

    if (!response.ok) {
      throw new Error("Error fetching TODO");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
async function getUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

    if (!response.ok) {
      throw new Error("Error fetching USER");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
async function getAllData() {
  try {
    const [todo, user] = await Promise.all([getTodo(), getUser()]);

    console.log("TODO:", todo);
    console.log("USER:", user);
  } catch (error) {
    console.error("Error in Promise.all:", error);
  }
}

getAllData();
async function getRaceData() {
  try {
    const result = await Promise.race([getTodo(), getUser()]);

    console.log("First result (race):", result);
  } catch (error) {
    console.error("Error in Promise.race:", error);
  }
}

getRaceData();