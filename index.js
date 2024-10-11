// Write your solution in this file!
const employee = {
    name: "Sam",
    streetAddress: "12th Junction Ngong"
}
//Nondestructive modification
function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = {...obj};
    newObj[key] = value;
    return newObj;
}
console.log(updateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway'));
console.log(employee);
//destructuvely modify
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}
console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway'));
//deleting property nondestructively
function deleteFromEmployeeByKey(obj, key) {
    const newObj2 = {...obj};
    delete newObj2[key];
    return newObj2
}
let newEmployee = deleteFromEmployeeByKey(employee, 'name');
console.log(newEmployee);
console.log(employee);
console.log(newEmployee['name']);
console.log(typeof newEmployee);
//destructive delete
function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    return employee
}
let newEmployee2 = destructivelyDeleteFromEmployeeByKey(employee, 'name');
console.log(newEmployee2['name']);
console.log(newEmployee2);
console.log(employee);
console.log();

