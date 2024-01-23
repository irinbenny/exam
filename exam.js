//[id , brand , model , type , pricePerDay, available]
let carBooking = [
    [1, 'Toyota', 'Corolla', 'Sedan', 50, 10],
    [2, 'Honda', 'Civic', 'Sedan', 55, 8],
    [3, 'Ford', 'Mustang', 'Sports Car', 80, 5],
    [4, 'Jeep', 'Wrangler', 'SUV', 70, 7],
    [5, 'Nissan', 'Altima', 'Sedan', 45, 12]
];


//1)print all car brands
console.log("all car brands:");
carBooking.forEach(car=>{
    console.log(car[1]);
})
console.log("-------------------------");

//2)print total no of cars available
console.log("total no of cars available:");
console.log(`${carBooking.length}`);
console.log("-------------------------");

//3)print Sedan car details
console.log("Sedan car details:");
carBooking.filter(car=>car[3]=='Sedan').forEach(car=>console.log(car))
console.log("-------------------------");

//4)Print cars with price per day greater than 60
console.log("cars with price per day greater than 60:");
carBooking.filter(car=>car[4]>60).forEach(car=>console.log(car))
console.log("-------------------------");

//5)print details of "jeep wrangler"
console.log("details of jeep wrangler:");
carBooking.filter(car=>car[1]=='jeep').forEach(car=>console.log(car))
console.log("-------------------------");

//6)sort car based on the descending order of the price per day
console.log("descending order of the price per day:");
carBooking.sort((a, b) => b[4] - a[4]);
console.log(carBooking);
console.log("-------------------------");

//7)sort car based on ascending order of available cars
console.log("ascending order of available cars:");
carBooking.sort((a,b)=>a[5]-b[5]);
console.log(carBooking);
console.log("-------------------------");

//8)find the car with the most available car
console.log("car with the most available car:");
available=carBooking.reduce((car1,car2)=>car1[5]>car2[5]?car1:car2)
console.log(`The most available car is ${available[1]}`);
console.log("-------------------------");

//9)Calculate the revenue if all car are rented for  day
console.log("revenue if all car are rented for  day:");
let revenue = 0;
for (let car of carBooking) {
    revenue += car[4];
}
console.log(revenue);
console.log("-------------------------");

//10)Count the num of sedan cars
console.log("Count the num of sedan cars:");
count=carBooking.filter(car=>car[3]=='Sedan').length
console.log(count);
console.log("-------------------------");
//11)Print all car brands
console.log("all car brands:");
carBooking.forEach(car=>{
    console.log(car[1]);
})
console.log("-------------------------");
//12)Find total num of available cars of all the time
console.log("total num of available cars of all the time");
let totalAvailableCars = 0;
for (let car of carBooking) {
    totalAvailableCars += car[5];
}
console.log(totalAvailableCars);
console.log("-------------------------");
//13)Find cars with least availability
console.log("cars with least availability");
least=carBooking.reduce((car1,car2)=>car1[5]<car2[5]?car1:car2)
console.log(least);
console.log("-------------------------");
//14)check if there is any car with a price per day exactly 55
x=carBooking.find((car)=>car[4]==55)
console.log(x?"yes":"no");
console.log("-------------------------");