const person = {
  firstName: "Yuliia",
  lastName: "Obukhivska",
  age: 32
};
person.email = "yuliia@example.com";
delete person.age;
console.log(person);