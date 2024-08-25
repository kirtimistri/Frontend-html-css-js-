console.log("kirti keep it up youu can do it")
function tarif(n1,greetText="this is a default value given by kirti"){
    console.log(greetText+" "+n1)
    console.log(n1+" is very hard working")
}
function sum(a,b,c){
    let d=a+b+c;
    return d;
}
let n1="kirti";
let n2="suvesh";
let n3="pranav";
let n4="siddhesh";
let greetText="good morning";
let returnval=sum(1,2,3);
tarif(n1 ,greetText);
tarif(n2 ,greetText);
tarif(n3 ,greetText);
tarif(n4);
console.log(returnval);
// console.log(n1+" is very hard working")
// console.log(n2+" is very hard working")
// console.log(n3+" is very hard working")
// console.log(n4+" is very hard working")

// Alert using JS
// alert("hii user are fill the form correctly");

// prompt
// let user =prompt("What is your name","Gust");
// n=console.log(user)
// console.log(n);

// confirm
// let deletepost=confirm("Do you really want to delete this post?");
// console.log(deletepost);

//Loops in js
let i=0;
for(i=0;i<=4;i++){
    console.log(i);
}
let array=["yash","pranav","suvesh","siddhesh","asma","trupti","priti"]
// for (let index = 0; index < array.length; index++) {
//      element = array[index];
//      console.log("hello dear "+element);
// similer code

// array.forEach(function f(element){console.log("happy frindship day "+ element)});

// for (elememt of array ){
//     console.log("happy frindship day "+ elememt);
// }
// loop for object 
let employee={
    id:"kirti",
    salary:25,
    work:"work from home"

} 
for( key in employee){
    console.log(`the ${ key} of employee is ${employee[key]}`);

}

//Arrow Function in js
// function greet(){
//     console.log("good morning");
// }
// greet();
 greet=()=>{
    console.log("good morning");
}
greet();
let add =(a,b)=> a+b;
console.log(add(2,2));

let obj1={
    greeting:"good morning",
    names:["kirti","suvesh","pranav","asma","yash"],
    speak(){
        this.names.forEach((student)=>{
            console.log(this.greeting+"hello dear "+ student);

        });
    }
}
obj1.speak();
// math object
let a=Math;
console.log(a);
console.log("the power of 3 raised to 2 is ",Math.pow(3,2));
console.log("the square root  of 3 raised to 2 is ",Math.sqrt(36));
// cell and floor
console.log("rounded up is  ",Math.ceil(5.8));
console.log("rounded down is ",Math.floor(5.8));
//absolute value ie positive alue only 
console.log("Absolute value is ",Math.abs(-5.8));
//Trigono metric functions
console.log("theh value of sign pi is ",Math.sign(Math.PI));
console.log("theh value of cos  pi is ",Math.cos(Math.PI));
console.log("theh value of tan pi is ",Math.tan(Math.PI));
//min and max
console.log("minimum value of 4,5,6 is ",Math.min(4,5,6));
console.log("maximum value of 4,5,6 is ",Math.max(4,5,6));
// log function also exist check how to use it 

//generate random number return number bettween 0 to 1
let r =Math.random();
// to generate value between two random number 
// formula (a,b)=a+(b-a)*Math.random() 
let x =1;
let y =100;
let r1_100 = x+(y-x)*Math.random();
console.log("arandom no betwwen 1 to 100",Math.ceil(r1_100));
//JESON
let jesonobj={
    id:"kirti",
    class:"a",
    rollNo:32
};
console.log(jesonobj);
myjesonstr=JSON.stringify(jesonobj)
console.log(myjesonstr);
myjesonstr=myjesonstr.replace('kirti','priti');
console.log(myjesonstr);

newobject=JSON.parse(myjesonstr);
console.log(newobject);
document.body.style.backgroundPositionX="purple"