// TYPE ANNOTATION FOR VARIABLES ARE CODES WE ADD TO TELL TS THE VARIOUS PROPERTIES AND METHODS THA A VARIALBE HAS
// TYPE INFERENCE FOR VARIABLES ARE TSs GUESSES ON WHAT PROPERTIES AND METHODS A VARIABLE HAS, BASED ON ITS INITIALIZED VALUE

// THE EXAMPLES BELOW DEFINE HOW TO ANNOTATE VARIABLES, BUT THESE ARE NOT NEEDED WHEN DECLARATION AND INITIALIZATION ARE
// ON THE SAME LINE. TYPESCRIPT INFERS A TYPE BASED ON THE INITIALIZED VALUE!!!!

let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'yellow', 'green'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false, true];

// Object Literal
let point: { x: number; y: number } = { x: 10, y: 20 };

// Classes
class Car { }

let car: Car = new Car();

// Function
const logNumber: (i: number) => void = (i) => {
  console.log(i);
};

// WHEN TO EXPLICITLY USE ANNOTATIONS

// 1) FUNCTION THAT RETURNS THE TYPE 'any' (i.e. TS CANNOT HAS NO IDEA WHAT IT IS AND HENCE, CANNOT DO ERROR CHECKING ON IT.)
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json);
console.log(coordinates);      //  {x: 10, y: 20};
// coordinates.jwhdasnlIHLJOJWSNJWEISJKSJNKkKKLK   ---  does not print an error, since it is of type 'any'

const typedCoordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);
// now coordinates.jbcxlkjhjewcsmNKJl      --- will return an error, because we defined it type ( {x: number; y: number} )

// 2) WHEN A VARIABLE IS DECLARED ON ONE LINE AND INITIALIZED LATER
const words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3) WHEN WE WANT A VARIALE WHOSE TYPE CANNOT BE INFERRED CORRECTLY (MAY HOLD DIFFERENT VALUES)
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}