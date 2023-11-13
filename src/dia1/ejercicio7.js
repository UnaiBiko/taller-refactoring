function EmployeeManager() {
  let employees = [];

  function addEmployee(employee) {
    employees.push(employee);
  }

  function calculateSalary(employee) {
    let baseSalary = employee.baseSalary;
    let bonus = calculateBonus(employee);
    let totalSalary = baseSalary + bonus;
    return totalSalary;
  }

  function calculateBonus(employee) {
    let yearsOfService = employee.yearsOfService;
    let performanceRating = employee.performanceRating;
    let bonusPercentage = determineBonusPercentage(
      yearsOfService,
      performanceRating
    );
    let baseSalary = employee.baseSalary;
    let bonus = baseSalary * bonusPercentage;
    return bonus;
  }

  function determineBonusPercentage(yearsOfService, performanceRating) {
    if (yearsOfService >= 5 && performanceRating > 4) {
      return 0.2;
    } else {
      return 0.1;
    }
  }

  return {
    addEmployee,
    calculateSalary,
    calculateBonus,
    determineBonusPercentage,
  };
}

const employeeManager = EmployeeManager();
employeeManager.addEmployee({
  baseSalary: 50000,
  yearsOfService: 6,
  performanceRating: 5,
});
const totalSalary = employeeManager.calculateSalary(employees[0]);
console.log(`Total Salary: ${totalSalary}`);
