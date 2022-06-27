/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(array){
    const employeeObject = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: [],
    }

    return employeeObject
}

function createEmployeeRecords(array){
    const employeeArrays = array.map(employee => createEmployeeRecord(employee))
    return employeeArrays    
}

function createTimeInEvent(dateStamp){
    const hour = parseInt(dateStamp.split(' ')[1])
    const date = dateStamp.split(' ')[0]
    const timeInObject = {
        type: 'TimeIn',
        hour,
        date
    }
        this.timeInEvents.push(timeInObject)
        return this
}

function createTimeOutEvent(dateStamp){
    const hour = parseInt(dateStamp.split(' ')[1], 10)
    const date = dateStamp.split(' ')[0]
    const timeOutObject = {
        type: 'TimeOut',
        hour,
        date
    }
        this.timeOutEvents.push(timeOutObject)
        return this
}

function hoursWorkedOnDate(date){
    const timeIn = this.timeInEvents.find(event => event.date === date)
    const timeOut = this.timeOutEvents.find(event => event.date === date)

    return (timeOut.hour - timeIn.hour)/100
}

function wagesEarnedOnDate(date){
    // console.log('this', this)
    const hours = hoursWorkedOnDate.call(this, date)
    return hours * this.payPerHour
}

function findEmployeeByFirstName(srcArray, firstName){
    return srcArray.find(employee => employee.firstName === firstName)
}

function calculatePayroll(employeeArray){
    const payRollArray = employeeArray.map(employee => allWagesFor.call(employee)).reduce((currentValue, total) => currentValue + total,0)

    return payRollArray
}  


