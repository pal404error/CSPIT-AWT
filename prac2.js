var arr = [1, 2, 3, 4, 5, 6,7, 8, 9, 10, 11, 12,13 ];

console.log(arr.length); 

console.log(arr[0]); 
console.log(arr[1]); 
console.log(arr[2]); 
console.log(arr[3]); 
console.log(arr[4]); 

console.log(arr.push(14));  
console.log(arr.length); 
console.log(arr.pop());

let arr1 = arr.shift();
console.log(arr1); 

arr1 = arr.unshift(1);
console.log(arr1);
delete arr[0];
console.log(arr.join("  ||  "));
console.log(arr.concat(arr1));
arr2 = [[1  , 2], [3 , 4]];
console.log(arr2.flat());

console.log(arr.splice(1, 3)); 

console.log(arr.slice(1));


let person = {
    name: 'John doe',
    age: 34,
    employment: 'Employed',
    education: 'Bachelors',
    university: 'University of California, Berkeley',
}

let fun = () => {
    return person.name+' of age '+person.age +' Employemnt status '+person.employment+' studied '+person.education+' at '+person.university;
}

console.log(fun());
