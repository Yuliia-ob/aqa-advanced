function getTodo() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => {
      if (!response.ok) {
        throw new Error("Error fetching TODO");
      }
      return response.json();
    });
}
function getUser() {
  return fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => {
      if (!response.ok) {
        throw new Error("Error fetching USER");
      }
      return response.json();
    });
}const allData = Promise.all([getTodo(), getUser()]);

allData
  .then(([todo, user]) => {
    console.log("TODO:", todo);
    console.log("USER:", user);
  })
  .catch(error => {
    console.error("Error in Promise.all:", error);
  });const raceData = Promise.race([getTodo(), getUser()]);

raceData
  .then(result => {
    console.log("First result (race):", result);
  })
  .catch(error => {
    console.error("Error in Promise.race:", error);
  });