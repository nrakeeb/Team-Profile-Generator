const Manager = require("../lib/Manager");

const manager = new Manager("Nouha", 1, "Nouha@hotmail.com", 59)

describe("Manager", () => {
    it("should have all correct values when new object is instantiated", () => {
        expect(manager.name).toBe("Nouha");
        expect(manager.id).toBe(1);
        expect(manager.email).toBe("Nouha@hotmail.com");
        expect(manager.officeNumber).toBe(59);
    });
    it("should return all correct values when getter methods are called", () => {
        expect(manager.getName()).toBe("Nouha");
        expect(manager.getId()).toBe(1);
        expect(manager.getEmail()).toBe("Nouha@hotmail.com");
        expect(manager.getOfficeNumber()).toBe(59);
        expect(manager.getRole()).toBe("Manager");
    });
});