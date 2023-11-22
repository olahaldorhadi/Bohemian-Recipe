describe('Initial Test', () => {
    const viewports = [
        { width: 800, height: 600 },
        { width: 1200, height: 800 },
    ]

    viewports.forEach((viewport) => {
        it(`Visits Bohemian Recipe with viewport ${viewport.width}x${viewport.height}`, () => {
            // Open the webpage
            cy.visit('http://localhost:5173/')

            // Set the viewport
            cy.viewport(viewport.width, viewport.height)

            // Common checks for both small and big viewports
            commonChecks()

            // Additional checks for each viewport
            if (viewport.width === 800) {
                // Specific checks for small viewport
                cy.get('[data-testid="cypress-search"]').should('exist')
            } else if (viewport.width === 1200) {
                // Specific checks for big viewport
            }
        })
    })

    function commonChecks() {
        // See if logo is rendered
        cy.get('[data-testid="cypress-logo"]')
            .should('exist')
            .should(($img) => {
                const src = $img.attr('src')
                expect(src).to.match(/\/BR-logo-tr\.png$/)
            })

        // See if the page contains H1 title
        cy.get('[data-testid="cypress-title"]')
            .should('exist')
            .should('have.text', 'What would you like to make?')

        // See if correct image is rendered
        cy.get('[data-testid="cypress-cover-image"]')
            .should('exist')
            .should(($img) => {
                expect($img)
                    .to.have.attr('src')
                    .and.match(/food.jpg$/)
            })

        // See if footer is rendered
        cy.get('[data-testid="cypress-footer"]')
            .should('exist')
            .should('have.text', '2023 Bohemian Recipe')
    }
})
