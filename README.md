# P2-2 Delivery instructions

## Link to project - Bohemian Recipe

http://it2810-39.idi.ntnu.no/project2/

# Table of Contents

-   [Installation Instructions for Running Project Locally](#installation-instructions-for-running-project-locally)
-   [Usage Instructions](#usage-instructions)
-   [Running Tests](#running-tests)
-   [Documentation from the Developers](#documentation-from-the-developers)
    -   [Description of the Project Bohemian Recipe](#description-of-the-project-bohemian-recipe)
    -   [Functional Requirements](#functional-requirements)
    -   [Technical Requirements](#technical-requirements)
    -   [Development and Testing Instructions](#development-and-testing-instructions)
    -   [Choices for Solutions](#choices-for-solutions)
    -   [Testing, Development, and Quality Control](#testing-development-and-quality-control)
    -   [The Work of Each Developer](#the-work-of-each-developer)

## Installation Instructions for Running Project Locally

1. Install Node.js and npm if not already installed.

2. Clone repository locally

3. Navigate to the project root directory and run `npm install` to install project dependencies.

4. After installation, run `npm start` to start the development server. This will run both the frontend and backend.

5. Open your web browser and access the application at the localhost appearing in the terminal.

## Usage Instructions

1. Welcome to Bohemian Recipe. This webpage can help you access recipes retrieved from TheMealDB. You can now search, filter and sort different types of recipes.

2. Click on one of the cards to display the full recipe.

3. Did you like the recipe? Or maybe the recipe was absolutely ghastly? You can now leave a star feedback inside each recipe, either to encurage or warn fellow foodies.

## Running Tests

Please run the application before testing with `npm start`

You can run vitest test with `npm test`

To run the E2E testing with Cypress explorer run `npx cypress open`

To run Cypress headlessly run `npx cypress run ` in your terminal

# Documentation from the Developers

## Description of the Project Bohemian Recipe

The project involves a web page that retrieves and displays recipes from the MealDB.

## Functional Requirements

The user is presented with a search bar with the possibility to search for whatever one might please to eat. You can also use the filter and sorting options. This will affect the whole dataset. Once you have made your selection you are presented with different types of recipes you can interact with. The webpage will only display 12 recipes at the time, and you have the possibility to browse through pages. The user can click on a recipe card to display more information and even give a rating. This rating will affect the overall score of each recipe when utilized.

In regards to user accessibility, we have tried to be as consistent in using clear HTML-tags in our work so our web page can be read by screen readers. We have also been careful in our selection of our fonts, colors and shapes.

About sustainability
In our fuzzy search we only sort through the recipes using the titles. We also included pagination so that the client does not download the whole dataset when using our webpage.

Responsive design has been a focus point during the development. We started developing the web page in Figma with a focus on design and a great user interface and experience. For developing our design further we have taken inspiration from popular recipe pages and focused on simplicity and delicate colours.

## Technical Requirements

Bohemian Recipe is based on React and programmed in TypeScript. The project is set up with Vite and we have used state managment in the form of apollo local state management. We have set up our own database using MongoDB where we use GraphQL to make queries and mutations. Regarding our use of components, we have used both self made components in addition to a component from TailwindUI (filterSection). We also decided to try something new and implemented the use of TailwindCSS. This was a unanimous decision based on the fact that the group wanted to learn more about styling.

## Development and Testing Instructions

We have used Node.js v20.5+ and npm v10.2.2 and created the project using vite 4.4 where we used the project type React v8.2.0 and Typescript v5.0.2. Regarding the backend we utilized GraphQL v16.8.1 and Apollo v3.8.6 Through our prosess we have taken advantage of linting and Prettier.

## Choices for Solutions

We used MongoDB, a popular NoSQL database, as we found the most documentation using this service. Furthermore we used GraphQL and Apollo Client, as we found these two to interact beautifully.

## Testing, Development and Quality control

We have utilized linting and usage of Prettier throughout. We included an extensive README-file (congratulations on reading this far). We have discussed, explained and referred to our most important choices and solutions in regards, but not limited to, components and API. Comments are now improved in the code. Regarding quality control, we have used coauthoring frequently and held code reviews as a team.

### Testing Using Vitest

In accordance to the project requirements we have set up testing of components using Vitest. In addition we have utilized Cypress for an automatic E2E testing which also tests the API. Regarding organization of Cypress, we decided to divide the testing into different parts to test different functions. Therefore, you will find cypress tests in different files.

Run ‘npm test’ in terminal to run tests
This will trigger testing using vitest using snapshot testing and functional component testing. Using react testing library and some functions from Jest and Chai.

### E2E Test Coverage

We included an automated end-2-end testing, which tests use of filters, intitial load, loading recipes in addition to a test of the API. All in accordance to the requirements.

## The Work of Each Developer

This has been delivered, as requested, on BlackBoard.
