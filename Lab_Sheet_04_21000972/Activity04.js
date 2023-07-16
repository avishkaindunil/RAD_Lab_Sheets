// Define the Employee superclass
class Employee {
    constructor(employeeNumber, name, address, contactNumber, nicNumber, joinedDate, designation, salary) {
        this.employeeNumber = employeeNumber;
        this.name = name;
        this.address = address;
        this.contactNumber = contactNumber;
        this.nicNumber = nicNumber;
        this.joinedDate = joinedDate;
        this.designation = designation;
        this.salary = salary;
    }

    reportDuty(arrivalTime) {
        console.log(`${this.name} arrives at ${arrivalTime}.`);
    }

    endDuty(leaveTime) {
        console.log(`${this.name} leaves at ${leaveTime}.`);
    }

    requestLeave(leaveDate, numberOfDays, reason) {
        console.log(`${this.name} requested leave for ${numberOfDays} days on ${leaveDate}. Reason: ${reason}.`);
    }

    selectLunchPreference(lunchPreference) {
        console.log(`${this.name} selected ${lunchPreference} for lunch.`);
    }
}

// Define the PermanentEmployee subclass
class PermanentEmployee extends Employee {
    constructor(employeeNumber, name, address, contactNumber, nicNumber, joinedDate, designation, salary) {
        super(employeeNumber, name, address, contactNumber, nicNumber, joinedDate, designation, salary);
    }
}

// Define the ContractEmployee subclass
class ContractEmployee extends Employee {
    constructor(employeeNumber, name, address, contactNumber, nicNumber, joinedDate, designation, salary, contractDuration) {
        super(employeeNumber, name, address, contactNumber, nicNumber, joinedDate, designation, salary);
        this.contractDuration = contractDuration;
    }

    requestExtension(extensionMonths) {
        console.log(`${this.name} requested a contract extension for ${extensionMonths} months.`);
    }
}

// Define the TemporaryEmployee subclass
class TemporaryEmployee extends Employee {
    constructor(employeeNumber, name, address, contactNumber, nicNumber, joinedDate, designation, salary, duration) {
        super(employeeNumber, name, address, contactNumber, nicNumber, joinedDate, designation, salary);
        this.duration = duration;
    }

    requestExtension(extensionMonths) {
        if (extensionMonths <= 3) {
            console.log(`${this.name} requested a duty extension for ${extensionMonths} months.`);
        } else {
            console.log(`${this.name} cannot request an extension exceeding 3 months.`);
        }
    }
}

// Create employee objects
const permanentEmployee = new PermanentEmployee(1, "John Doe", "Address 1", "123456789", "NIC-1234", "2023-01-01", "Manager", 5000);
const contractEmployee = new ContractEmployee(2, "Jane Smith", "Address 2", "987654321", "NIC-5678", "2023-02-01", "Developer", 3000, 12);
const temporaryEmployee = new TemporaryEmployee(3, "Alice Johnson", "Address 3", "456789123", "NIC-9012", "2023-03-01", "Assistant", 2000, 6);

// Perform actions on employees
permanentEmployee.reportDuty("9:00 AM");
contractEmployee.endDuty("5:00 PM");
temporaryEmployee.requestLeave("2023-07-01", 3, "Personal reasons");
contractEmployee.requestExtension(6);
temporaryEmployee.requestExtension(2);
permanentEmployee.selectLunchPreference("Chicken");
