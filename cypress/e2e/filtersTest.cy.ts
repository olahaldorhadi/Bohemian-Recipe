describe('FiltersComp', () => {
    it('Should filter recipes based on user interactions', () => {
        // Visit the page
        cy.visit('http://localhost:5173/')

        // Setting Viewport to small
        cy.viewport(800, 600)

        // Open mobile filters
        cy.get('[data-testid="cypress-filter"]').click()

        cy.get('[data-testid="cypress-category-Vegetarian"]').click({
            force: true,
        })
        const selectedCategoryMobile = 'Vegetarian'
        cy.get('[data-testid="cypress-display-recipes"]', {
            timeout: 10000,
        }).should(($element) => {
            expect($element).to.have.length.greaterThan(0)
            expect($element).to.be.visible
        })
        // Check if the displayed recipes have the correct category - vegetarian
        cy.get(
            `[data-testid^="cypress-recipe-card-${selectedCategoryMobile}"] [data-testid="cypress-recipe-category"]`
        ).each(($category) => {
            cy.wrap($category).should('have.text', selectedCategoryMobile)
        })

        // Set viewport for a large screen
        cy.viewport(1200, 800)

        cy.get('[data-testid="cypress-category-Beef"]').click({ force: true })
        const selectedCategoryDesktop = 'Beef'
        cy.get('[data-testid="cypress-display-recipes"]', {
            timeout: 10000,
        }).should(($element) => {
            expect($element).to.have.length.greaterThan(0)
            expect($element).to.be.visible
        })
        // Check if the displayed recipes have the correct category - beef
        cy.get(
            `[data-testid^="cypress-recipe-card-${selectedCategoryDesktop}"] [data-testid="cypress-recipe-category"]`
        ).each(($category) => {
            cy.wrap($category).should('have.text', selectedCategoryDesktop)
        })
    })

    // Cypress test to check API for American Dessert Banana Pancakes with ID 52855
    const apiUrl = 'http://localhost:4000/graphql'

    describe('GraphQL API Testing', () => {
        it('should fetch meals with categories and areas', () => {
            cy.request({
                method: 'POST',
                url: apiUrl,
                body: {
                    query: `
          query {
            meals(categories: ["Dessert"], areas: ["American"], offset: 0, limit: 5, sortField: "strMeal") {
              idMeal
              strMeal
              strCategory
              strArea
            }
          }
        `,
                },
            }).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.data.meals).to.have.lengthOf.at.least(1)
            })
        })

        it('should fetch meal titles', () => {
            cy.request({
                method: 'POST',
                url: apiUrl,
                body: {
                    query: `
          query {
            mealTitles
          }
        `,
                },
            }).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.data.mealTitles).to.be.an('array')
            })
        })

        it('should fetch a specific meal by name', () => {
            cy.request({
                method: 'POST',
                url: apiUrl,
                body: {
                    query: `
          query {
            specificMeal(mealName: "Banana Pancakes") {
              idMeal
              strMeal
              strCategory
              strArea
            }
          }
        `,
                },
            }).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.data.specificMeal).to.not.be.null
            })
        })

        it('should fetch specific meal ratings', () => {
            cy.request({
                method: 'POST',
                url: apiUrl,
                body: {
                    query: `
          query {
            specificMealRating(mealId: "52855")
          }
        `,
                },
            }).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.data.specificMealRating).to.be.an('array')
            })
        })
    })
})
