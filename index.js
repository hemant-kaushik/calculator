let string = " "; // it defines the string which we write in the text area

let buttons = document.querySelectorAll('.btn'); // if we want to select all the html elements that matches a specified css selector (id, class name, types, attributes, value of attributes, etc) we use the querySelectorAll(). here we select all the html elements with clss btn

Array.from(buttons).forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if(e.target.innerHTML == "="){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == "AC"){
            string = " ";
            document.querySelector('input').value = string;
        }
        else{
            console.log(e.target);
            string = string + e.target.innerHTML; 
            document.querySelector('input').value = string;
        }

    })
})

/*
in above the Array.from() ==> method is used to create a new array from any array like or iterable object. example : creating a new array from a string 
let array = Array.from("abc");
console.log(array);
output : a, b, c

forEach() ==> method executes a provided function once for each array element. (like a loop it iterates all the element)
example: 
const arr = ['a', 'b', 'c'];
arr.forEach(element => console.log(element));
output: 'a', 'b', 'c'

addEventListener() ==> method is used to attach an event handler to a particular element. it does not override the existing event handlers. an event listener is a js procedure that waits for the occurrence of an event.
it is the inbuilt feature of the js syntax :-- element.addEventListener(event, function) 
here event is a required parameter it can be defined as a string that specifies the event's name. 
here function is also required parameter. it is a js function which responds to the event occur.

innerHTML :-- property sets or return the HTML content of an element

eval() :=== function evaluates js code represented as a string and return its completion value 
example: console.log(eval('3' + '3')); 
output: 6
 */
