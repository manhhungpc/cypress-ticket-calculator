describe("kiem tra phan hoach", () => {
    beforeEach(() => {
        cy.visit("http://127.0.0.1:8080/web/version2_ep.html");

        cy.get('[data-cy="age"]').as("age");
        cy.get('[data-cy="hour"]').as("hour");
        cy.get('[data-cy="calc-button"]').as("button");
        cy.get('[data-cy="output"]').as("output");

        cy.get("@age").clear();
        cy.get("@hour").clear();
    });

    it("lower bound for age and hour", () => {
        cy.get("@age").type("-4");
        cy.get("@hour").type("-2");

        cy.get("@button").click();

        cy.get("@output").invoke("text").should("equal", "Số liệu không hợp lệ");
    });

    it("upper bound age and lower bound hour", () => {
        cy.get("@age").type("300");
        cy.get("@hour").type("-2");

        cy.get("@button").click();

        cy.get("@output").invoke("text").should("equal", "Số liệu không hợp lệ");
    });

    it("less than 20 age and lower bound hour", () => {
        cy.get("@age").type("12");
        cy.get("@hour").type("-2");

        cy.get("@button").click();

        cy.get("@output").invoke("text").should("equal", "Số liệu không hợp lệ");
    });

    it("more than 20 age and lower bound hour", () => {
        cy.get("@age").type("35");
        cy.get("@hour").type("-2");

        cy.get("@button").click();

        cy.get("@output").invoke("text").should("equal", "Số liệu không hợp lệ");
    });

    it("lower bound age and upper bound hour", () => {
        cy.get("@age").type("-4");
        cy.get("@hour").type("30");

        cy.get("@button").click();

        cy.get("@output").invoke("text").should("equal", "Số liệu không hợp lệ");
    });

    it("upper bound age and upper bound hour", () => {
        cy.get("@age").type("300");
        cy.get("@hour").type("30");

        cy.get("@button").click();

        cy.get("@output").invoke("text").should("equal", "Số liệu không hợp lệ");
    });

    it("less than 20 age and upper bound hour", () => {
        cy.get("@age").type("12");
        cy.get("@hour").type("30");

        cy.get("@button").click();

        cy.get("@output").invoke("text").should("equal", "Số liệu không hợp lệ");
    });

    it("more than 20 age and upper bound hour", () => {
        cy.get("@age").type("35");
        cy.get("@hour").type("30");

        cy.get("@button").click();

        cy.get("@output").invoke("text").should("equal", "Số liệu không hợp lệ");
    });

    it("lower bound age and closed hour", () => {
        cy.get("@age").type("-4");
        cy.get("@hour").type("5");

        cy.get("@button").click();

        cy.get("@output").invoke("text").should("equal", "Số liệu không hợp lệ");
    });

    it("upper bound age and closed hour", () => {
        cy.get("@age").type("300");
        cy.get("@hour").type("5");

        cy.get("@button").click();

        cy.get("@output").invoke("text").should("equal", "Số liệu không hợp lệ");
    });

    it("less than 20 age and closed hour", () => {
        cy.get("@age").type("12");
        cy.get("@hour").type("5");

        cy.get("@button").click();

        cy.get("@output").invoke("text").should("equal", "Giờ rạp chưa mở cửa");
    });

    it("more than 20 age and closed hour", () => {
        cy.get("@age").type("35");
        cy.get("@hour").type("5");

        cy.get("@button").click();

        cy.get("@output").invoke("text").should("equal", "Giờ rạp chưa mở cửa");
    });

    it("lower bound age and opened hour", () => {
        cy.get("@age").type("-4");
        cy.get("@hour").type("16");

        cy.get("@button").click();

        cy.get("@output").invoke("text").should("equal", "Số liệu không hợp lệ");
    });

    it("upper bound age and opened hour", () => {
        cy.get("@age").type("300");
        cy.get("@hour").type("16");

        cy.get("@button").click();

        cy.get("@output").invoke("text").should("equal", "Số liệu không hợp lệ");
    });

    it("less than 20 age and opened hour", () => {
        cy.get("@age").type("12");
        cy.get("@hour").type("16");

        cy.get("@button").click();

        cy.get("@output").invoke("text").should("equal", "54000");
    });

    it("more than 20 age and opened hour", () => {
        cy.get("@age").type("35");
        cy.get("@hour").type("16");

        cy.get("@button").click();

        cy.get("@output").invoke("text").should("equal", "60000");
    });
});
