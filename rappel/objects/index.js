// Method 1
// --

const user_1 = {
    firstname: "Bruce",
    lastname: "Wayne"
};

console.log( "user_1" );
console.log( typeof user_1 );
console.log( user_1.firstname );
console.log( user_1.lastname );
console.log( "------" );


// Method 2
// --

const user_2 = new Object();

user_2.firstname = "John";
user_2.lastname = "Doe";

console.log( "user_2" );
console.log( typeof user_2 );
console.log( user_2.firstname );
console.log( user_2.lastname );
console.log( "------" );


// Method 3
// --

function User(fname, lname)
{
    this.firstname = fname;
    this.lastname = lname;
}

const user_3 = new User("Bob", "Sponge");

console.log( "user_3" );
console.log( typeof user_3 );
console.log( user_3.firstname );
console.log( user_3.lastname );
console.log( "------" );


// Method 4
// --

const orgObject = { company: 'ABC Corp' };
const employee = Object.create(orgObject, { name: { value: 'EmployeeOne' } });

console.log(employee); // { company: "ABC Corp" }
console.log(employee.name); // "EmployeeOne"

