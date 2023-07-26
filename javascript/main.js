//DOM SELECTION 

// console.log(window);

// alert("Hello");


const Form = document.getElementById("myForm");
const  Form2 = document.querySelector(".myForm");
// const Inputs = documents.querySelectorAll(".form-group");
const Inputs = document.querySelectorAll(".form-group");
console.log(Inputs);

Inputs.forEach(function(input){
    console.log(input);
});


const ul = document.querySelector(".items");
ul.firstElementChild.textContent = "MARK BELLO";
