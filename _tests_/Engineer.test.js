const Engineer = require("../lib/Engineer")

const engineer = new Engineer("Nouha", 1, "Nouha@hotmail.com", "https://github.com/nrakeeb")

describe("Engineer", () => {
    it("should have all correct values when new object is instantiated", () => {
        expect(engineer.name).toBe("Nouha");
        expect(engineer.id).toBe(1);
        expect(engineer.email).toBe("Nouha@hotmail.com");
        expect(engineer.github).toBe("https://github.com/nrakeeb");
    });
    it("should return all correct values when getter methods are called", () => {
        expect(engineer.getName()).toBe("Nouha");
        expect(engineer.getId()).toBe(1);
        expect(engineer.getEmail()).toBe("Nouha@hotmail.com");
        expect(engineer.getGithub()).toBe("https://github.com/nrakeeb");
        expect(engineer.getRole()).toBe("Engineer");
    });
});