function helloWorldPerson(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var exampleUser = { firstName: "Jane", lastName: "User" };
console.log(helloWorldPerson(exampleUser));
