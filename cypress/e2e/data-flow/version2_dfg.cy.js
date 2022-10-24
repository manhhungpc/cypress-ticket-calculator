describe("kiem tra dong dieu du lieu", () => {
    beforeEach(() => {
        cy.visit("http://127.0.0.1:8080/web/dfg/v2_dfg.html");

        cy.get('[data-cy="age"]').as("age");
        cy.get('[data-cy="hour"]').as("hour");
        cy.get('[data-cy="calc-button"]').as("button");
        cy.get('[data-cy="output"]').as("output");

        cy.get("@age").clear();
        cy.get("@hour").clear();
    });

    it("Test #1: 1, 2, 3(T)", () => {
        cy.get("@age").type("-3");
        cy.get("@hour").type("12");

        cy.get("@button").click();

        cy.get("@output").invoke("text").should("equal", "Số liệu không hợp lệ");
    });

    it("Test #3: 1, 2, 3(F), 4(F), 5(F), 6(T)", () => {
        cy.get("@age").type("16");
        cy.get("@hour").type("12");

        cy.get("@button").click();

        cy.get("@output").invoke("text").should("equal", "54000");
    });

    it("Test #5: 1, 2, 3(F), 4(T)", () => {
        cy.get("@age").type("25");
        cy.get("@hour").type("-3");

        cy.get("@button").click();

        cy.get("@output").invoke("text").should("equal", "Số liệu không hợp lệ");
    });

    it("Test #8: 1, 2, 3(F), 4(F), 5(F)", () => {
        cy.get("@age").type("14");
        cy.get("@hour").type("6");

        cy.get("@button").click();

        cy.get("@output").invoke("text").should("equal", "Giờ rạp chưa mở cửa");
    });

    it("Test #9: 2, 3(F), 4(F), 5(F), 6(F), 7", () => {
        cy.get("@age").type("15");
        cy.get("@hour").type("13");

        cy.get("@button").click();

        cy.get("@output").invoke("text").should("equal", "54000");
    });

    it("Test #10: 2, 3(F), 4(F), 5(F), 6(T), 8", () => {
        cy.get("@age").type("25");
        cy.get("@hour").type("13");

        cy.get("@button").click();

        cy.get("@output").invoke("text").should("equal", "60000");
    });
});
