function createEmployeeRecord(employeeData) {
    return {
      firstName: employeeData[0],
      familyName: employeeData[1],
      title: employeeData[2],
      payPerHour: employeeData[3],
      timeInEvents: [],
      timeOutEvents: []
    };
  }
  
  function createEmployeeRecords(employeesData) {
    return employeesData.map(createEmployeeRecord);
  }
  
  function createTimeInEvent(employee, dateTimeString) {
    employee.timeInEvents.push({
      type: "TimeIn",
      date: dateTimeString.split(" ")[0],
      hour: parseInt(dateTimeString.split(" ")[1])
    });
    return employee;
  }
  
  const employeeData1 = ["John", "Doe", "Manager", 20];
  const employeeData2 = ["Jane", "Smith", "Assistant", 15];
  const employeesData = [employeeData1, employeeData2];
  
  const employeeRecords = createEmployeeRecords(employeesData);
  console.log(employeeRecords);
  
  const employee1 = employeeRecords[0];
  createTimeInEvent(employee1, "2023-06-28 09:00");
  console.log(employee1);
  function createTimeOutEvent(employee, dateTimeString) {
    employee.timeOutEvents.push({
      type: "TimeOut",
      date: dateTimeString.split(" ")[0],
      hour: parseInt(dateTimeString.split(" ")[1])
    });
    return employee;
  }
  
  function hoursWorkedOnDate(employee, date) {
    const timeInEvent = employee.timeInEvents.find(event => event.date === date);
    const timeOutEvent = employee.timeOutEvents.find(event => event.date === date);
    const hoursWorked = (timeOutEvent.hour - timeInEvent.hour) / 100;
    return hoursWorked;
  }
  
  function wagesEarnedOnDate(employee, date) {
    const hoursWorked = hoursWorkedOnDate(employee, date);
    const wagesEarned = hoursWorked * employee.payPerHour;
    return wagesEarned;
  }
  
  function allWagesFor(employee) {
    const datesWorked = employee.timeInEvents.map(event => event.date);
    const totalWages = datesWorked.reduce((sum, date) => sum + wagesEarnedOnDate(employee, date), 0);
    return totalWages;
  }
  
  function calculatePayroll(employees) {
    const totalPayroll = employees.reduce((sum, employee) => sum + allWagesFor(employee), 0);
    return totalPayroll;
  }  
  createTimeInEvent(employee1, "2023-06-28 09:00");
  createTimeOutEvent(employee1, "2023-06-28 11:00");
  

  const hoursWorked = hoursWorkedOnDate(employee1, "2023-06-28");
  console.log("Hours worked:", hoursWorked);
  

  const wagesEarned = wagesEarnedOnDate(employee1, "2023-06-28");
  console.log("Wages earned:", wagesEarned);
  
  const totalWages = allWagesFor(employee1);
  console.log("Total wages:", totalWages);

  const payroll = calculatePayroll(employeeRecords);
  console.log("Payroll:", payroll);
  