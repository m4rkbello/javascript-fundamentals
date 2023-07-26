// // // window alert!
// // alert("Hello World!")


// // //3 debubbing
// // console.log("KAYA NIMO NI MARK!"); // for standard format output
// // console.warn("DIBA PANGANDOY MAN NIMO NI M4RK?"); // for consoling a warning
// // console.error("GITUPAD SA GINOO M4RK!") //for outputing an error message!


// // //javascript vaciables LETTERAL
// // let m4rk = "Work naka mark!"
// // m4rk = "Programmer naka boi!"
// // console.log(m4rk);


// // //javascript variables CONSTANT
// // const sample ="PADAYON LANG SA MGA PLANO!"
// // console.log(sample);


// // DATA TYPE JAVASCRIPT: STRING, NUMBERS, BOOLEAN, NULL, UNDEFINE
// // const Name = "Mark"; //string
// // const Age = 23; // number
// // const rating = 49.3; // number
// // const isComplete = true; //boolean type
// // const Val = null; // null datatype
// // const unknwn = undefined; // undefine datatype
// // console.log(typeof unknwn); // 

// // JAVASCRIPT CONCATINATION
// // const Name ="Mark Bello";
// // const Age ="23";
// // const details =`My name is ${Name} and my Age is ${Age}`;
// // console.log(details);

// // const fullname ="Mark Bello";
// // const edad = 23;
// // const info =`My name is ${fullname} and my Age is ${edad}`;
// // // console.log(fullname.toLowerCase(fullname)); // to lowercase
// // // // console.log(fullname.toUpperCase(fullname)); // to UPPERCASE
// // // console.log(fullname.toLowerCase(fullname)); // to lowercase
// // // console.log(fullname.toLowerCase(fullname)); // to UPPERCASE


// // // //JAVASCRIPT ARRAYS AND FUNDAMENTALS
// const InfinITSolution = ['Frontend Developer', 'Backend Developer', 'Desktop Developer', 'Mobile Developer', 'Fullstack Developer', '.Net Developer'];
//  InfinITSolution[6] = 'Graphics Designer'; //gipasa sa array ang index niya is ikalima
// // // console.log(InfinITSolution[3]); //result is Mobile developer
// // // console.log(InfinITSolution[2]); //result is desktop developer
// // // console.log(InfinITSolution[4]); //result is fullstack developer
// // // console.log(InfinITSolution[1]); //result is Backend developer
// // // console.log(InfinITSolution[0]); //result is frontend developer
// // // console.log(InfinITSolution[5]); //result is UI/UX Designer

// // // InfinITSolution.push('Data Analytics'); // ibutang niya sa pinaka-iwit
// // // InfinITSolution.unshift('Developer'); // ibutang niya sa pinaka-una
// // // InfinITSolution.pop(); //iyang e delete ang pinaka ulahi na naa sa array!
// // // console.log(InfinITSolution);

// // //datatype validation if the array is a true
// // // console.log(Array.isArray(InfinITSolution)); //true daw!
// // // console.log(InfinITSolution.indexOf('Frontend Developer')); // kuhaon niya amg specific index sa isa ka array dapat tama ang array na naa sa sulod sa method.

// //splice method para tanggalon ang array na iyang letter
// InfinITSolution.splice(2, 3); // magsugod sa index sa 0 tapos mag start sa 1 
// console.log(InfinITSolution);

// // // JAVASCRIPT OBJECT LITERALS
// // const Tao = {
// //     firstName: 'Mark',
// //     lastName: 'Bello',
// //     favorites: ['Coding', 'Vlogging', 'Traveling', 'Riding', 'Djying', 'Programming'],
// //     familyMembers: {
// //         father: 'Samuel Bello',
// //         mother: 'Estela Bello',
// //         sisters: {
// //             eldest: 'Sheila Bello',
// //             middle: 'Elaine Bello',
// //         }
// //     }
// // };

// // Tao.favorites[4] = 'Camping'; 

// // console.log(Tao.favorites);

// // // JAVASCRIPT OBJECT ARRAY
// // const personalDetails = [
// //     {
// //         id: 1,
// //         fullName: 'Mark Bello',
// //         address: 'Mtv DdO 8801',
// //         isSaved: 'Phone',
// //     },
// //     {
// //         id: 2,
// //         fullName: 'Pewpew',
// //         address: 'Linoan, Mtv, DDO',
// //         isSaved: 'Personal Computer',
// //     },
// //     {
// //         id: 3,
// //         fullName: 'Lucio',
// //         address: 'Nabunturan',
// //         isSaved: 'Keypad'
// //     }
// // ];
// // console.log(personalDetails[1]);


// //JAVASCRIPT ARRAY USING PUSH METHOD - IYANG E ADD TANANG VALUE SA VARIABLE 
// const municipalName = ['montevista', 'nabunturan', 'mawab', 'maco', 'mabini', 'pantukan', 'monkayo', 'maragusan'];
// municipalName.push('New Bataan', 'Compostela', 'Laak');
// console.log(municipalName[100, 7]);

// //JAVASCRIPT ARRAY USING POP METHOD - IYANG E ANG LAST ARRAY LIST
//  const barangay = ['Linoan', 'San Vicente', 'Mayaon', 'New Visayas', 'Banagbanag', 'Lebanon', 'San Jose']
// //  deleted = barangay; //e delete niyang ang last arraylist og iyang e output na sya lang isa 
 
// //  console.log(deleted); //iyang e delete ang pinakalast na naa sa object array.
// console.log((barangay[4].toLocaleLowerCase)); //e gawas tanang arraylist na naa sa variable ug ang pinakalast sa arraylist is madelete
 

//JAVASCRIPT OBJECT LETIRALS WITH BUNCH DATAS!
//  const developers = {
//     WebDevelopment: 'Fullstack Web Developer',
//     fullstack: {
//         frontend: 'Required',
//         stack: {
//             script: 'html',
//             stylng: 'css',
//             styling: 'TailCSS',
//             framework: 'bootstrap',
//             framework1: 'Jquery',
//             framework2: 'reactjs',
//             framework3: 'ajax',
//         },
//         backend: 'Required',
//         stack1:{
//             programming: 'php',
//             programming1: 'javascript',
//             framework: 'nodeJS',
//             framework1: 'ExpressJS',
//             framework2: 'Laravel', 
//         },
//         database: 'Required',
//         stack2: {
//             sql: 'mysql',
//             nosql: 'mongoDb',
//             other: 'sqlite',
//             other1: ''
//         },
//         other: 'Required',
//         stack3: {
//             api: 'json'
//         },
//     },
//  };

//  console.log(developers);


//JAVASCRIPT OBJECT LITERALS!

// const infinitSolutions = {
//         ceo: 'Sir Siang',
//         position: 'Owner',
//         employees: ['Mark', 'Mark', 'Raven', 'Raven', 'Russell', 'James'],

// };

// // console.log(infinitSolutions.employees[1]);
// console.log(infinitSolutions);

// const samuelBelloFamily = {
//         father: 'Samuel Bello',
//         mother: 'Estela Bello',
//         children:  ['Sheila Bello', 'Elaine Bello', 'Mark Bello'],
//         address: 'Mtv, DdO, PH'
// };

// samuelBelloFamily.children.unshift = ('Lost You!')


// // console.log('Hello'+`${samuelBelloFamily}`)
// console.log(samuelBelloFamily.children);



// //JAVASCRIPT ARRAY CONCATINATION
// const numbers = [1, 2, 3, 4, 5, 6,];
// const moreNumbers = [7, 8, 9, 10, 11, 12, 13, 14, 15];
// const otherNumbers = [16, 17, 18, 19, 20];
// const allNumbers = numbers.concat(moreNumbers, otherNumbers); //E ADD NIYA TANANG SULOD SA 3 KA VARIABLE
// console.log(allNumbers);

// //JAVASCRIPT OBJECT ARRAY

// const numbers = [1, 2, 3, 4, 5, 100];
// const allEvenNumbers = numbers.every((num) => num % 2 === 0);
// console.log(allEvenNumbers); //false ang mo gawas kay dili divisible


// //JAVASACRIPT ARRAY FILTER

// const number = [20, 21, 45, 22, 44, 67, 76, 64, 99, 76, 77, 88, 45, 35, 61, 52, 46];
// const evenNumbers = number.filter((num) => num % 9 === 0);
// console.log(evenNumbers);

// //JAVASCRIPT ARRAY FILTER
// const numbers = [1, 2, 3, 4, 5., 6, 7, 8, 9, 10];
// const foundNumber = numbers.find((num) => num >2);
// console.log(foundNumber); // 3 ang result pangitaon niyang dako sa gipangita na value ug mao ra ang e display

// //JAVASCRIPT ARRAY forEach 
// const numbers = [2, 5, 8, 14, 77];
// const add = numbers;
// numbers.push = [6, 50, 71];

// numbers.forEach((num) => console.log(num * 2)); // Iyang e multipy sa 2 ang  nasa arraylist 
// const utang = [200, 500, 1100];
// utang.forEach((interestPerYear) => console.log(InterestPerYear * 0.5 * 12)); IYANG E MULTIPLY SA 0.5 WHICH IS THE INTEREST AND THE 12 IS THE YEAR TERMS
 

// const loan = [10000, 5000, 3000, 1000000, 250000];
// const interest = 0.5;
// const yearToPay = 12;
// loan.forEach((payment) => console.log(payment * interest * yearToPay));

//JAVASCRIPT ARRAY INCLUDES 

// const numbers = [1, 2, 3, 4, 5];
// const includesThree = numbers.includes(1);
// console.log(includesThree); // e boolean niya if tama ba na naa sa array list ang includes na gipangita o wala


//JAVASCRIPT ARRAY INDEXOFF()

// const infinitprogrammers = ['Reaven', 'Russell', 'Mark', 'Boy', 'James'];
// const index = infinitprogrammers.indexOf('Boy');
// console.log(index);


// // //JAVASCRIPT ARRAY last INDEXOFF()
// const infinitprogrammers = ['Reaven', 'Russell', 'Mark', 'Boy', 'James'];
// const index = infinitprogrammers.lastIndexOf('Pew');
// console.log(index);


//JAVASCRIPT ARRAY MAP
// const numbers = [1, 3, 4, 5, 6, 7, 10];
// const doubledNumbers = numbers.map((result) => result * .15);
// console.log(doubledNumbers);



// //JAVASCRIPT ARRAY POP
// const numbers = [1, 3, 4, 5, 6, 7, 10];
// const doubledNumbers = numbers.pop((result) => result * .15);
// console.log(doubledNumbers);


// //JAVASCRIPT ARRAY PUSH
// const numbers = [23, 44, 55, 66];
// numbers.push(77, 99);
// console.log(numbers);



// //JAVASCRIPT ARRAY REDUCE
// const numbers = [100, 200, 300, 400, 500];
// const total = numbers.reduce((total, numbers) => total + numbers, 0);
// sum = total.toFixed(1); //addan ug .decimal 
// console.log((sum)); // E TOTAL TANANG UNOD SA ISA KA ARRAYLIST WALAY GAMIT KEY/INDEX METHOD



// //JAVASCRIPT ARRAY REVERSE
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// numbers.reverse();
// console.log(numbers); //ANG MAIWIT IPAUNA!



//JAVASCRIPT ARRAY ARRAY OBJECT LITERALS

// const personalDetails = [
//     {
//         id: 1,
//         fullName: 'Mark Bello',
//         Address: 'Mtv DdO',
//     },
//     {
//         id: 2,
//         fullName: 'PewPew',
//         Address: 'Mtv DdO',
//     },
//     {
//         id: 3,
//         fullName: 'Lost You!',
//         Address: 'Mtv DdO',
//     },
// ];
// console.log(personalDetails[1].fullName);



// //JAVASCRIPT LOOPING FUNCTION FOR FOR LOOP
// // const markbello = ['Pew', 'Pampam', 'Lost You!', 'Gowipe', 'Skrillex', 'MartinGarrix'];
// for(let markbello = 0; markbello <= 10; markbello++){
//     console.log(markbello); // ANG MO GAWAS IS 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// };

//JAVASCRIPT LOOPING FUNCTION FOR WHILE LOOP

// let numbers = 0;

// while(numbers <= 20){
//     console.log('kaya nimo' +' '+ `${numbers}`);
//     numbers++;
// };


// let dream = ['lets go', 'kaya nimo boi', 'naa naka diha'];

// // while(dream <= dream){
// //     console.log(`${dream}`);
// //     dream++;
// // }

// for(dreamm = dream; dream <= dream; dream++){
//     console.log(`${dream}`);
// };


// //JAVASCRIPT FOR LOOP IN ARRAY
// const infinitSolutionPersonalDetails = [

// {
//     id: 1,
//     fullName: 'MarkBello',
//     address: 'Mtv DdO 8801',
//     course: 'BS Information Technology',
//     position: 'Newbie Web Developer'
// },
// {
//     id: 2,
//     fullName: 'Master Russell',
//     address: 'Davao City 8000',
//     course: 'BS Information Technology',
//     position: 'Fullstack Web Developer'
// },
// {
//     id: 3,
//     fullName: 'Master Reavin',
//     address: 'Davao City 8000',
//     course: 'BS Information Technology',
//     position: 'Fullstack Web Developer',
// },
// {
//     id: 4, 
//     fullName: 'Master Mark',
//     address: 'Davao City 8000',
//     course: 'BS Information Technology',
//     position: 'Fullstack Web Developer',
// },
// {
//     id: 5, 
//     fullName: 'Master James',
//     address: 'Davao City 8000',
//     course: 'BS Information Technology',
//     position: 'Fullstack Web Developer/Fullstack Mobile Developer',
// },
// {
//     id: 6,
//     fullName: 'Sir Bossing Somer Siang',
//     address: 'Davao City 8000',
//     course: 'Doctor of Information Technology',
//     position: 'Fullstack Web Developer/Desktop Developer/.NET Developer'
// }
// ];


// // JAVASCRIPT FOR LOOP ARRAY MEHTOD 1
// for(let i= 0; i < infinitSolutionPersonalDetails; i++){
//     console.log(infinitSolutionPersonalDetails[i]);
// }; 

// //JAVASCRIPT FOR LOOP ARRAY METHOD 2
// for(let infinitSolutionPersonalDetail of infinitSolutionPersonalDetails){
//     // console.log(infinitSolutionPersonalDetail);

//     // infinitSolutionPersonalDetails.length;
//     // console.log(infinitSolutionPersonalDetail.id);
//     // console.log(Array.isArray(infinitSolutionPersonalDetail));
//     if(Array.isArray(infinitSolutionPersonalDetail)){
//         console.log(infinitSolutionPersonalDetail.course);
//     }else{
//         console.error('Error!');
//     }

// };

//JAVASCRIPT FOR LOOP ARRAY METHOD 3
// infinitSolutionPersonalDetails.forEach(function(infinitSolutionPersonalDetail) {
//     console.log(infinitSolutionPersonalDetail.firsName);
// });

// const FullnameInfinitSolution =  infinitSolutionPersonalDetails.map
// (function(infinitSolutionPersonalDetail){
    
//     if(Array.isArray(infinitSolutionPersonalDetail)){
//         console.log(FullnameInfinitSolution);
//     }else{
//         console.error('Error!')
//     };
// });
// // console.log(FullnameInfinitSolution);

// //JAVASCRIPT FOR LOOP ARRAY USING MAP METHOD
// const personalDetails = infinitSolutionPersonalDetails.map
// (function(infinitSolutionPersonalDetail){
//     return infinitSolutionPersonalDetail.fullName;
// });

// console.log(personalDetails);

//JAVASCRIPT FOR LOOP ARRAY USING FILTER METHOD;

// const personalDetails =  infinitSolutionPersonalDetails.filter
// (function(infinitSolutionPersonalDetail){
//     return infinitSolutionPersonalDetail.id == 1;
// });

// console.log(personalDetails); // ANG MO GAWAS IS ANG ARRAY VALUE NA NAAY ID == 1;


// //JAVASCRIPT JSON  | Pagkuha sa sa array list object gamit JSON
// const infinitSolutionPersonalDetailsJSON = JSON.stringify(infinitSolutionPersonalDetails);
// console.log(infinitSolutionPersonalDetailsJSON); // IPAGAWAS TANANG ARARY LIST OBJECTS


//JAVASCRIPT CONDITIONAL STATEMENTS 

// const amount1 = 100;
// const amount2 = 200;
// const amount3 = 300;
// const amount4 = 400;
// const amount5 = 500;

// const userInput = window.prompt("Please enter a value!");
// const getuserInput = userInput.length;

// if(getuserInput == amount1){
//     console.log('The value is 100'+' '+`${getUserInput}`);
// }else if(getuserInput == amount2){
//     console.log('The value is 200'+' '+`${getUserInput}`);
// }else if(getuserInput == amount3){
//     console.log('The value is 300'+' '+`${getUserInput}`);
// }else if(getuserInput == amount4){
//     console.log('The value is 400'+' '+`${getUserInput}`);
// }else if(getuserInput == amount5){
//     console.log('The value is 500'+''+`${getuserInput}`);
// }
// else{
//     console.log('The value is higher!');
// };
 
// const payable = 500;

// if(payable !== 100 || payable > 100){
//     console.log('The value is 100'+' '+'with a payable of'+' '+`${payable}`);
// }else{
//     console.log('Unpaid.');
// };



//JAVASCRIPT FUNCTION TYPES
// //OLD METHOD
// let x = 5000;
// let y = 2000;
// function GetSum(x, y){
//     return x + y;
// };

// console.log(GetSum(x, y));

// //JAVASCRIPT FUNCTION TYPE PARAMETERS INSIDE IN CONSOLE.LOG

// function GetSum(x, y){
//     return x + y;
// };
// console.log(GetSum(7777, 55555));

//NEW METHOD ARROW FUNCTION

// const GetSum = (x , y) => {
// //     return x + y;
// // }

// // console.log(GetSum(100, 300));

// //ARROW FUNCTION METHOD 2
// const GetSum = (x , y) => x + y;
// console.log(GetSum(100, 300));


// //JAVASCRIPT OBJECT ORRIENTED AND CLASS
// //CLASS
// class Tao {
//     constructor(firstName, lastName, address){
//         this.firstName = firstName; 
//         this.lastName = lastName;
//         this.address = address;

//     }
//     getFullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// //instantiate object
// const tao1 = new Tao('Pedro', 'Penduko', 'Mtv DdO 8801');

// console.log(tao1.getFullName());


//CONSTRUCTOR FUNCTION 
function Tao(firstName, lastName, address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;


    this.getFullname = () => {
        return `${this.firstName}`+' '+`${this.lastName}`;
    }


};

// //instantiate object
const tao1 = new Tao('Pedro', 'Penduko', 'Mtv DdO 8801');

console.log(tao1.getFullname());