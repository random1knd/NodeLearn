console.log("this is nothing");
//loadScript('/my/script.js'); load and execute the scripts at given path
//asynchrous -> it is called asynchronous cause it starts loading but
//executes later after the function has been finished.
let a= {
	"this":"that",
	value(){
		console.log("this is nothing");
	}
}

function something(value){
	console.log("this is a value");

	value(4);
}

function nothing(value){
	console.log("this is nothing's value "+value);
}
something(nothing);
//Callbacks are nothing but funtions that depend on other functions
//to avoid getting errors we pass functions to other functions 
//where the code get's executed 
//END OF CALL BACK FUNCTION EXAMPLE

//BEGINNING OF PROMISE
//promise basic syntax
//let promise = new promise(function(resolve,reject){executor});
let prom = new Promise(function (r, re){r("good");});//resolve,reject
//re(new Error("this is for the error"))
prom.then(
	result => console.log(result),//first argument is when accepted
	error => console.log(error) // second is for when rejected
	);
prom.finally(console.log("can be used wheather or not resolve or error occurs"));
prom.catch(console.log("if error occurs"));
let somePromise = new Promise(function (resolve, reject){resolve("good thing some promise")});
somePromise.then(
	resolve => console.log(resolve)

	)
/*
let otherPromise = new Promise(function (result, reject){result(2)});
otherPromise.then(
		function(){
			return resolve *2
		}
	).then(
		function(){
			return resolve *2
		}
	).then(
		function(){
			console.log(resolve)
		}
	)
new Promise(function(resolve, reject) {

  setTimeout(() => resolve(1), 1000); // (*)

}).then(function(result) { // (**)

  alert(result); // 1
  return result * 2;

}).then(function(result) { // (***)

  alert(result); // 2
  return result * 2;

}).then(function(result) {

  alert(result); // 4
  return result * 2;

})




//BEGINNING OF ASYNC AND AWAIT
//await only works inside asynch functions
*/
async function kndTrue(){
	return 2;
};

kndTrue().then(console.log())


async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });

  let result = await promise; // wait until the promise resolves (*)

  console.log(result); // "done!"
}

f();