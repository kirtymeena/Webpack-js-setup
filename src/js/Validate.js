// import Main from "./main";

// class Validate extends Main {
//     constructor(day, month, year) {
//         // super(dayEle)
//         this.day = day;
//         this.month = month;
//         this.year = year
//     }
//     isLeapYear(year) {
//         return year % 4 === 0 && year % 400 === 0
//     }

//     validateMonth() {
//         if (month > 12 && month === 0) {
//             return "Must be a valid month"
//         }
//     }
//     validateDay() {
//         console.log(day,month)
//         const monthWith30 = [4, 6, 9, 11];
//         if (day > 30 && !monthWith30.includes(month)) {
//             console.log("erro")

//             return "Must be a valid day"
//         }
//         else if (this.isLeapYear(super.year) && day > 29) {
//             console.log("erro")

//             return "Must be a valid day"
//         }
//         else if (day > 31) {
//             console.log("erro")
//             this.displayError()
//             return "Must be a valid day"
//         }
//     }
//     validateYear() {
//         const currentYear = new Date().getFullYear();
//         if (year > currentYear) {
//             return "Must be in the past"
//         }
//     }

//     displayError() {
//         super.dayEle.style.border = '1px solid red'
//     }
// }

// export default Validate;