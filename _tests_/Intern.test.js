const Intern = require("../lib/Intern")

const intern = new Intern("Nouha", 1, "Nouha@hotmail.com", "University of Birmingham")

describe("Intern", () => {
    it("should have all correct values when new object is instantiated", () => {
        expect(intern.name).toBe("Nouha");
        expect(intern.id).toBe(1);
        expect(intern.email).toBe("Nouha@hotmail.com");
        expect(intern.school).toBe("University of Birmingham");
    });
    it("should return all correct values when getter methods are called", () => {
        expect(intern.getName()).toBe("Nouha");
        expect(intern.getId()).toBe(1);
        expect(intern.getEmail()).toBe("Nouha@hotmail.com");
        expect(intern.getSchool()).toBe("University of Birmingham");
        expect(intern.getRole()).toBe("Intern");
    });
});