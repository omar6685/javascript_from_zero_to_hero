const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];
  
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
  


// for(let i = 0; i < companies.length; i++){
//     console.log(companies[i]);
// }

// companies.forEach(function(Company){

//     console.log(Company);
// });


const canDrink = ages.filter(age => age >= 21);

// console.log(canDrink);

// const retailCompanies = companies.filter(campany => campany.category === 'Retail');


// console.log(retailCompanies);

// const startCompanies = companies.filter(campany => campany.start >= 1980 & campany.start <= 1989 )


// console.log(startCompanies);

// const tenYears = companies.filter(campany => (campany.end - campany.start ) >= 10 );

// console.log(tenYears);
// const companyNames = companies.map(function(Company){
//     return Company.name;
// })

// console.log(companyNames);

// const sortCompanies = companies.sort((a, b) => (a.start > b.end ? 1 : -1));

// console.log(sortCompanies);


// const sortAges = ages.sort((a, b) => (a - b));

// console.log(sortAges);




const ageSum = ages.reduce((total, age) => total + age, 0);

console.log(ageSum);

const totalYears = companies.reduce((total, company) => total + (company.end - company.start ), 0);

console.log(totalYears);