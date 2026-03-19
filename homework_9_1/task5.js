const users = [
  { name: "Yuliia", email: "yuliia@example.com", age: 32 },
  { name: "Oleksandr", email: "oleksandr@example.com", age: 33 },
  { name: "Viktoria", email: "viktoria@example.com", age: 2 }
];
for (const { name, email, age } of users) {
  console.log(name, email, age);
}