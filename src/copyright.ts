// Solution 1 but not the best one
//type strOrNum = string | number
// let year : HTMLElement | null 
// year = document.getElementById('year') 
// let thisYear : string 
// thisYear= new Date().getFullYear() .toString()
// // add type guard
// if(year) {
//     year.setAttribute("dateTime", thisYear)
//     year.textContent = thisYear
// } 

// Solution 2 using assertions
const year = document.getElementById('year') as HTMLSpanElement
const thisYear : string = new Date().getFullYear().toString()
year.setAttribute("dateTime", thisYear)
year.textContent = thisYear
