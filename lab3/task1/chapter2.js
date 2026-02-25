alert("Hello WOrld!");

let admin, name;
name = "John";
admin = name;
alert(admin);

let ourPlanetName;
let currentUserName;


let name2 = "Ilya";
alert( `hello ${1}` ); // hello 1
alert( `hello ${"name2"}` ); // hello name2
alert( `hello ${name2}` ); // hello Ilya


let name3 = promp("What is your name?", "")
alert(name3);


let a = 1, b = 1;
let c = ++a; // 2
let d = b++; // 1


let a2 = 2;
let x = 1 + (a2 *= 2); //5



"" + 1 + 0 //10
"" - 1 + 0 // -1
true + false //true
6 / "3" //2
"2" * "3" //6
4 + 5 + "px" //9px
"$" + 4 + 5 //$45
"4" - 2 //2
"4px" - 2 //Nan
"  -9  " + 5 //  -9   5
"  -9  " - 5 //-14
null + 1 //1
undefined + 1  //Nan
" \t \n" - 2; //-2


let a3 = prompt("First number?", 1);
let b2 = prompt("Second number?", 2);
alert(+a3 + +b2); // 12


5 > 4 //true
"apple" > "pineapple" //false
"2" > "12" //true
undefined == null //true
undefined === null //false
null == "\n0\n"; //false
null === +"\n0\n"; //false


if ("0") {
  alert( 'Hello' );
}


let value = prompt('What is the "official" name of JavaScript?', '');

if (value == 'ECMAScript') {
  alert('Right!');
} else {
  alert("You don't know? ECMAScript!");
}


let value2 = prompt('Type a number', 0);

if (value2 > 0) {
  alert( 1 );
} else if (value2 < 0) {
  alert( -1 );
} else {
  alert( 0 );
}


let result = (a + b < 4) ? 'Below' : 'Over';


let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';


alert( null || 2 || undefined ); //result is 2
alert( alert(1) || 2 || alert(3) ); //first 1 then 2
alert( 1 && null && 2 ); // null
alert( alert(1) && alert(2) ); // 1 then undefined
alert( null || 2 && 3 || 4 ); // 3
if (age >= 14 && age <= 90);
if (age < 14 || age > 90);



let userName = prompt("Who's there?", '');

if (userName === 'Admin') {

  let pass = prompt('Password?', '');

  if (pass === 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}



for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert( i );
  }
}


let i = 0;
while (i < 3) {
  alert( `number ${i}!` );
  i++;
}



let num;

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);


let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime;
  }

  alert( i );
}


if(browser == 'Edge') {
  alert("You've got the Edge!");
} else if (browser == 'Chrome'
 || browser == 'Firefox'
 || browser == 'Safari'
 || browser == 'Opera') {
  alert( 'Okay we support these browsers too' );
} else {
  alert( 'We hope that this page looks ok!' );
}


let a1 = +prompt('a?', '');

switch(a1){
    case 0:
        alert(0);
        break;
    
    case 1:
        alert(1);
        break;
    
    case 2:
    case 3:
        alert('2,3');
        break;
}


function min(a, b){
    return a < b ? a : b;
}


function pow(x, n){
    let res = x;

    for(let i = 1; i <= n; i++){
        res *= x;
    }

    return res;
}


function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);
