describe("<DateConvertor/>", () => {
  it("convert the time to Auckland time", async () => {
    cy.clock(new Date(2020, 6, 24, 22, 19, '00'), ["Date"]);
    cy.visit("http://localhost:8080/example");
    cy.get('[data-testid="timezone-select"]').click();
    cy.get('[data-testid="timezone-select"]').type(`Auckland{enter}`);

    cy.get('[data-testid="timezones"')
      .should("be.visible")
      .contains("America/New_York --> Pacific/Auckland");


    cy.get('[data-testid="time-conversion"]')
      .should("be.visible")
      .contains("July 24, 2020 10:19 PM --> July 25, 2020 2:19 PM");
  });
});
