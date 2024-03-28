//Task 1

let myrequest = new XMLHttpRequest();
myrequest.open("GET", "https://restcountries.com/v3.1/all", true);
myrequest.send();
myrequest.onload = function () {
  let data = myrequest.response;
  let result = JSON.parse(data);

  //1. Get all the countries from Asia continent /region using Filter function
  let country = result.filter((e) => e.region === "Asia");
  //console.log(country);
  console.log("List of countries from Asia continent / region:-");
  country.map((e) => {
    console.log(e.name.common);
  });

  //2. Get all the countries with a population of less than 2 lakhs using Filter function
  let country1 = result.filter((e) => e.population < 200000);
  console.log("List of countries with population less than 2 lakhs:-");
  country1.map((e) => {
    console.log(e.name.common);
  });

  //3. Print the following details name, capital, flag, using forEach function
  result.forEach((element) => {
    console.log(
      `Country name: ${element.name.common}, capital: ${
        element.capital ? element.capital.toString() : element.capital
      }, flag: ${element.flags.png}`
    );
  });

  //4. Print the total population of countries using reduce function

  let populationarray = result.map((e) => e.population);
  const totalpopulation = populationarray.reduce((totalpopulation, i) => {
    return totalpopulation + i;
  }, 0);
  console.log(`Total population of countries:- ${totalpopulation}`);

  //5.Print the country that uses US dollars as currency.

  //console.log(result);
  console.log("List of country that uses US dollars as currency:-");
  result.filter((e) => {
    if (typeof e.currencies === "object") {
      const p = Object.getOwnPropertyNames(e.currencies);
      if (p[0] === "USD") console.log(e.name.common);
    }
  });
};
