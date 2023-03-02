describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

//   You should write tests to ensure the following requirements are met:

// Do the number buttons update the display of the running total?
// Do the arithmetical operations update the display with the result of the operation?
// Can multiple operations be chained together?
// Is the output as expected for a range of numbers (for example, positive, negative, decimals and very large numbers)?
// What does the code do in exceptional circumstances? Specifically, if you divide by zero, what is the effect? Write a test to describe    what you'd prefer to happen, and then correct the code to make that test pass (you will need to modify the Calculator model to meet this requirement).

  it('should update the display of the running total', () => {
    cy.get('#number2').click();
    cy.get('#number3').click();
    cy.get('#number5').click();
    cy.get('.display').should('contain', '235')
  })

  it('should add numbers and display the correct result', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '5')
  })

  it('should subtract numbers and display the correct result', () => {
    cy.get('#number7').click();
    cy.get('#operator-subtract').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '4')
  })

  it('should multiply numbers and display the correct result', () => {
    cy.get('#number5').click();
    cy.get('#operator-multiply').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '15')
  })

  it('should add numbers and display the correct result', () => {
    cy.get('#number9').click();
    cy.get('#operator-divide').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '3')
  })

  it('should chain multiple operations together and display the result', () => {
    cy.get('#number9').click();
    cy.get('#operator-divide').click();
    cy.get('#number3').click();
    cy.get('#operator-subtract').click();
    cy.get('#number1').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '2')
  })

  it('should display positive numbers', () => {
    cy.get('#number6').click();
    cy.get('#operator-multiply').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '30')
  })
  
  it('should display negative numbers', () => {
    cy.get('#number3').click();
    cy.get('#operator-subtract').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-2')
  })

  it('should display decimal numbers', () => {
    cy.get('#number9').click();
    cy.get('#operator-divide').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '1.8')
  })

  it('should display very large numbers', () => {
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('.display').should('contain', '999999999999999')
  })

  it('should not divide by zero', () => {
    cy.get('#number1').click()
    cy.get('#operator-divide').click()
    cy.get('#number0').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', 'error')
  })


})