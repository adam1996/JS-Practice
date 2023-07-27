/* Arrays & Object Literals --> */
const numbers = [12, 24, 14, 26] //Array literal 

numbers.push(100); //Add element to the end of the array.
numbers.pop(); //Remove from end. 
numbers.shift(); //Removes 12 from the start of the array
numbers.unshift(12); //Add 12 back to the start of the array.

numbers.reverse(); //Reverses the array. 
numbers.includes('X') //Returns true if array includes passed value.

x = numbers.includes('X') //check whether X exists in array- true or false. 
numbers.indexOf('X') //-1 if not exists, or the index 

numbers.slice(start, end) //doesn't change the original array.
numbers.splice(start, deleteCount, etc) //changes the original array.

