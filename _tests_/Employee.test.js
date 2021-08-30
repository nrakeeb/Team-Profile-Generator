const Employee = require("../lib/Employee")

const employee = new Employee("Nouha", 1, "Nouha@hotmail.com")

describe("Employee", () => {
    it("should have all correct values when new object is instantiated", () => {
        expect(employee.name).toBe("Nouha");
        expect(employee.id).toBe(1);
        expect(employee.email).toBe("Nouha@hotmail.com");
    });
    it("should return all correct values when getter methods are called", () => {
        expect(employee.getName()).toBe("Nouha");
        expect(employee.getId()).toBe(1);
        expect(employee.getEmail()).toBe("Nouha@hotmail.com");
        expect(employee.getRole()).toBe("Employee");
    });
});