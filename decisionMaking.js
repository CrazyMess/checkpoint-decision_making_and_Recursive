// task 1: leap year checker
const leapYearChecker = (yr) => {
  if ((yr % 4 === 0 && yr % 100 != 0) || yr % 400 === 0) {
    return "leap year";
  } else {
    return "not leap year";
  }
};

// task 2: Ticket Pricing
const ticketPricing = (age) => {
  if (age <= 12) {
    return 10;
  } else if (age <= 17) {
    return 15;
  } else return 20;
};

//task3: weather Clothing Adviser
const clothingAdviser = (temp, isRaining) =>{
    if (temp < 0) {
        console.log("It's freezing! Wear a heavy coat, scarf, and gloves.");
      } else if (temp < 10) {
        console.log("It's cold. Wear a jacket and a warm sweater.");
      } else if (temp < 20) {
        console.log("It's cool. Wear a light jacket or sweater.");
      } else {
        console.log("It's warm. A t-shirt and shorts should be fine.");
      }
    
      if (isRaining === true) {
        console.log("Don't forget to take an umbrella or wear a raincoat!");
      } else {
        console.log("No rain, so you're good to go!");
      } 
}
