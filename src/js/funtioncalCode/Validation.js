
function Validation({ dayEle, monthEle, yearEle, dayError, title }) {
    const monthWith30 = [4, 6, 9, 11];
    const [day, month, year] = [dayEle.value, monthEle.value, yearEle.value]
    console.log(day, month)
    let errorCount = 0;
    const isLeapYear = (year) => {
        return year % 4 === 0 && year % 400 === 0
    }

    const checkEmptyField = () => {

        if (day.length === 0) {
            errorCount += 1
            dayEle.style.border = '1px solid #ff5959'
            dayError.innerText = "The field is required";
            title[0].style.color = '#ff5959'
        }
        else if (errorCount === 0) {
            console.log("empty field")
            dayEle.style.border = ''
            dayError.innerText = "";
            title[0].style.color = ''
        }
        if (month === "") {
            errorCount += 1
            monthEle.style.border = '1px solid red'
            title[1].style.color = '#ff5959'
            monthError.innerText = "The field is required"
        } else if (errorCount === 0) {
            monthEle.style.border = ''
            monthError.innerText = "";
            title[1].style.color = ''
        }
        if (year === "") {
            errorCount += 1
            yearEle.style.border = '1px solid red'
            title[2].style.color = '#ff5959'
            yearError.innerText = "The field is required"
        }
        else if (errorCount === 0) {
            yearEle.style.border = ''
            yearError.innerText = "";
            title[2].style.color = ''
        }

        return errorCount > 0
    }

    const validateDay = () => {

        if (isNaN(day) || day === '00' || (Number(day) > 30 && !monthWith30.includes(month)) || (isLeapYear(year) && Number(day) > 29) || Number(day) > 31) {
            console.log("Must be a valid day")
            dayEle.style.border = '1px solid #ff5959'
            dayError.innerText = "Must be a valid day";
            title[0].style.color = '#ff5959'

            errorCount += 1
        } else if (!checkEmptyField() && errorCount === 0) {
            console.log('here')
            dayEle.style.border = '';
            dayError.innerText = "";
            title[0].style.color = ''

        }
    }

    const validateMonth = () => {
        if (Number(month) > 12 || isNaN(month) || month === '000') {
            console.log("must be a vlaid month")
            monthEle.style.border = '1px solid #ff5959'
            monthError.innerText = "Must be a valid month";
            title[1].style.color = '#ff5959'

            errorCount += 1
        }
        else if (!checkEmptyField()) {
            monthEle.style.border = '';
            monthError.innerText = "";
            title[1].style.color = ''
        }
    }
    const validateYear = () => {
        const currentYear = new Date().getFullYear();
        if (Number(year) >= currentYear || year === '0000' || isNaN(year)) {
            console.log("Must be a valid Year")
            yearEle.style.border = '1px solid #ff5959'
            yearError.innerText = "Must be in the past";
            title[2].style.color = '#ff5959'

            errorCount += 1
        }
        else if (!checkEmptyField()) {
            yearEle.style.border = '';
            yearError.innerText = "";
            title[2].style.color = ''
        }

    }


    return function () {
        checkEmptyField();
        validateDay();
        validateMonth();
        validateYear();
        if (errorCount === 0) {
            return "success"
        }
        // else {
        //     return "Error"
        // }
    }
}



export default Validation