/* =====================================
   STEP 2 - ARRAY DESTRUCTURING
===================================== */

const numbers = [10, 20, 30, 40, 50];

const [first, second, , fourth] = numbers;

console.log("First:", first);
console.log("Second:", second);
console.log("Fourth:", fourth);


/* =====================================
   STEP 3 - OBJECT DESTRUCTURING
===================================== */

const student = {
  name: "John",
  age: 22,
  course: "JavaScript"
};

const { name, age, course } = student;

console.log("Name:", name);
console.log("Age:", age);
console.log("Course:", course);


/* =====================================
   STEP 4 - ADVANCED DESTRUCTURING
===================================== */

const employee = {
  empName: "Alice",
  position: "Developer",
  address: {
    city: "New York",
    country: "USA"
  }
};

/* Nested Destructuring */
const {
  empName: employeeName,
  position,
  address: { city, country }
} = employee;

console.log("Employee:", employeeName);
console.log("Position:", position);
console.log("City:", city);
console.log("Country:", country);


/* Default Values */

const colors = ["Red"];

const [primary, secondary = "Blue"] = colors;

console.log("Primary Color:", primary);
console.log("Secondary Color:", secondary);


/* =====================================
   STEP 5 - FUNCTION PARAMETER
   DESTRUCTURING
===================================== */

function displayUser({ username, email }) {
  console.log("Username:", username);
  console.log("Email:", email);
}

const user = {
  username: "ahmddev",
  email: "ahmd@example.com"
};

displayUser(user);