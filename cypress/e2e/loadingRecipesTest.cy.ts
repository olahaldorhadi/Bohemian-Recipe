describe('DisplayRecipes Component', () => {
    it('renders correctly and allows navigation through pages', () => {
        // Load webpage
        cy.visit('http://localhost:5173/')

        // Assuming the API response is fast enough, wait for the loading spinner to disappear
        cy.get('.recipe-cards p').should('not.exist')

        // Check if the initial set of cards is rendered
        cy.get('.recipe-cards .w-full').should('have.length.greaterThan', 0)

        // Click on a recipe card to open the modal
        cy.get('.recipe-cards .w-full:first').click()

        // Check if the modal is opened
        cy.get('.modal-container').should('exist')

        // Close the modal
        cy.get('.modal-container button').click()

        // Check if the modal is closed
        cy.get('.modal-container').should('not.exist')

        // Click on the next page button
        cy.get('.recipe-cards button:contains("➡")').click()

        // Check if the page number has increased
        cy.get('.recipe-cards output').should('have.text', '2')

        // Click on the previous page button
        cy.get('.recipe-cards button:contains("⬅")').click()

        // Check if the page number has decreased
        cy.get('.recipe-cards output').should('have.text', '1')
    })
})
