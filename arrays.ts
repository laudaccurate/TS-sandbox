const carMakers = ['Ford', 'Toyota', 'Chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];

// Help with inference when extracting values
const car1 = carMakers[0];
const myCar = carMakers.pop();

//Prevent incompatible values
// --- carMakers.push(1000)

// Help with '.map' and other helper methods
carMakers.map((car: string): string => {
  return car.toLowerCase();
});

// Flexible Types
const importantDates: (Date | string)[] = [];
importantDates.push('25-05-21');
importantDates.push(new Date());
 // this returns an error --- importantDates.push(20);