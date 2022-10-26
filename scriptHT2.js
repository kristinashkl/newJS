let obj1 = {
    firstName: "Витя",
    lastName: "Киселёв",
    age: 45,
    children: null,
    dates: {
        birthday: '26.01.1977',
        wedding: '05.09.2000',
        graduationFromUniversity: '07.06.2003',
    },
}

console.log("firstName - " + "'" + obj1.firstName + "'"); 
console.log("lastName - " + "'" + obj1.lastName + "'"); 
console.log("age - " + "'" + obj1.age + "'"); 
console.log("children - " + obj1.children);

let key = "dates";
for ( let prop in obj1.dates) {
    console.log(key  +  "-" + prop +  " - '" + obj1.dates[prop] + "'");
}
