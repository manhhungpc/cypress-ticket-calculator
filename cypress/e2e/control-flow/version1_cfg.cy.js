describe("kiem tra dong dieu khien", () => {
    beforeEach(() => {
        cy.visit("http://127.0.0.1:8080/web/cfg/v1_cfg.html");

        cy.get('[data-cy="age"]').as("age");
        cy.get('[data-cy="hour"]').as("hour");
        cy.get('[data-cy="calc-button"]').as("button");
        cy.get('[data-cy="output"]').as("output");

        cy.get("@age").clear();
        cy.get("@hour").clear();
    });

    it("Path: 1(T), 3", () => {
        cy.get("@age").type("-3");
        cy.get("@hour").type("12");

        cy.get("@button").click();

        cy.get("@output").invoke("text").should("equal", "Số liệu không hợp lệ");
    });

    it("Path: 1(T), 2(T), 4", () => {
        cy.get("@age").type("25");
        cy.get("@hour").type("-5");

        cy.get("@button").click();

        cy.get("@output").invoke("text").should("equal", "Số liệu không hợp lệ");
    });

    it("Path: 1(F), 2(F), 5(T), 7", () => {
        cy.get("@age").type("25");
        cy.get("@hour").type("6");

        cy.get("@button").click();

        cy.get("@output").invoke("text").should("equal", "Giờ rạp chưa mở cửa");
    });

    it("Path: 1(F), 2(F), 5(F), 6(T), 9", () => {
        cy.get("@age").type("14");
        cy.get("@hour").type("13");

        cy.get("@button").click();

        cy.get("@output").invoke("text").should("equal", "54000");
    });

    it("Path: 1(F), 2(F), 5(F), 6(F), 8", () => {
        cy.get("@age").type("25");
        cy.get("@hour").type("13");

        cy.get("@button").click();

        cy.get("@output").invoke("text").should("equal", "60000");
    });
});
