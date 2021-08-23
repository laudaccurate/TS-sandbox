// TYPE ANNOTATION FOR FUNCTIONS ARE CODES WE ADD TO TELL TS THE TYPE OF ARGUMENTS A FUNCTION WILL RECEIVE AND THE TYPE OF VALUE IT WILL RETURN
// TYPE INFERENCE FOR VARIABLES ARE TSs GUESSES ON THE TYPE OF VALUE A FUNCTION WILL RETURN BASED ON ITS OPERATION.
// TYPE INFERENCE WORKS FOR ONLY THE RETURN VALUE AND NOT THE ARGUMENTS!!!

const add = (a: number, b: number): number => {
  return a + b;
}

const sub = (a: number, b: number) => {
  // a - b;             ---   if we do not annotate the return value, TS will infer this function as void, since we are not returning any value
  return a - b;   //  ---   if we do not annotate the return value, TS will infer it as a number because we are returning a number
}

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
}

const logger = (message: string): void => {
  console.log(message);
}

const throwError = (message: string): never => {
  throw new Error(message);
}

let todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};

// const logWeather = (forecast: {date:Date, weather:string}): void => {
//   console.log(forecast.date);
//   console.log(forecast.weather);
// }

// forecast in logWeather can be destructured as

const logWeather = ({ date, weather }: { date: Date, weather: string }): void => {
  console.log(date);
  console.log(weather);
}