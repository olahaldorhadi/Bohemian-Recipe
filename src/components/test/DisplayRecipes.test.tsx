    import { render } from '@testing-library/react';
    import { expect } from 'vitest';
    import { MockedProvider } from '@apollo/client/testing';
    import DisplayRecipes from '../molecules/DisplayRecipes';
    import { GET_MEALS } from '../molecules/Queries';

    const mockData = {
        meals: [
            {
                "idMeal": "52971",
                "strMeal": "Kafteji",
                "strDrinkAlternate": null,
                "strCategory": "Vegetarian",
                "strArea": "Tunisian",
                "strInstructions": "Peel potatoes and cut into 5cm cubes.\nPour 1-2 cm of olive oil into a large pan and heat up very hot. Fry potatoes until golden brown for 20 minutes, turning from time to time. Place on kitchen paper to drain.\nCut the peppers in half and remove seeds. Rub a little olive oil on them and place the cut side down on a baking tray. Place them under the grill. Grill until the skin is dark and bubbly. While the peppers are still hot, put them into a plastic sandwich bag and seal it. Take them out after 15 minutes and remove skins.\nIn the meantime, heat more olive oil another pan. Peel the onions and cut into thin rings. Fry for 15 minutes until golden brown, turning them often. Add the Ras el hanout at the end.\nCut the pumpkin into 5cm cubes and fry in the same pan you used for the potatoes for 10-15 minutes until it is soft and slightly browned. Place on kitchen paper.\nPour the remaining olive oil out of the pan and put all the cooked vegetables into the pan and mix. Whisk eggs and pour them over the vegetables. Put the lid on the pan so that the eggs cook. Put the contents of the pan onto a large chopping board, add salt and pepper and chopped and mix everything with a big knife.",
                "strMealThumb": "https://www.themealdb.com/images/media/meals/1bsv1q1560459826.jpg",
                "strTags": null,
                "strYoutube": "https://www.youtube.com/watch?v=-TFf-Zu-xQU",
                "strIngredient1": "Potatoes",
                "strIngredient2": "Olive Oil",
                "strIngredient3": "Green Pepper",
                "strIngredient4": "Onions",
                "strIngredient5": "Ras el hanout",
                "strIngredient6": "Pumpkin",
                "strIngredient7": "Eggs",
                "strIngredient8": "Salt",
                "strIngredient9": "Pepper",
                "strIngredient10": "",
                "strIngredient11": "",
                "strIngredient12": "",
                "strIngredient13": "",
                "strIngredient14": "",
                "strIngredient15": "",
                "strIngredient16": "",
                "strIngredient17": "",
                "strIngredient18": "",
                "strIngredient19": "",
                "strIngredient20": "",
                "strMeasure1": "5 Large",
                "strMeasure2": "2 tbs",
                "strMeasure3": "1",
                "strMeasure4": "5",
                "strMeasure5": "1 tbs",
                "strMeasure6": "500g",
                "strMeasure7": "24 Skinned",
                "strMeasure8": "Pinch",
                "strMeasure9": "Pinch",
                "strMeasure10": "",
                "strMeasure11": "",
                "strMeasure12": "",
                "strMeasure13": "",
                "strMeasure14": "",
                "strMeasure15": "",
                "strMeasure16": "",
                "strMeasure17": "",
                "strMeasure18": "",
                "strMeasure19": "",
                "strMeasure20": "",
                "strSource": "http://allrecipes.co.uk/recipe/12294/kafteji--tunisian-fried-vegetables-.aspx",
                "strImageSource": null,
                "strCreativeCommonsConfirmed": null,
                "dateModified": null,
                "rating": [5, 5, 2]
            },
            {
                "idMeal": "52973",
                "strMeal": "Leblebi Soup",
                "strDrinkAlternate": null,
                "strCategory": "Vegetarian",
                "strArea": "Tunisian",
                "strInstructions": "Heat the oil in a large pot. Add the onion and cook until translucent.\nDrain the soaked chickpeas and add them to the pot together with the vegetable stock. Bring to the boil, then reduce the heat and cover. Simmer for 30 minutes.\nIn the meantime toast the cumin in a small ungreased frying pan, then grind them in a mortar. Add the garlic and salt and pound to a fine paste.\nAdd the paste and the harissa to the soup and simmer until the chickpeas are tender, about 30 minutes.\nSeason to taste with salt, pepper and lemon juice and serve hot.",
                "strMealThumb": "https://www.themealdb.com/images/media/meals/x2fw9e1560460636.jpg",
                "strTags": "Soup",
                "strYoutube": "https://www.youtube.com/watch?v=BgRifcCwinY",
                "strIngredient1": "Olive Oil",
                "strIngredient2": "Onion",
                "strIngredient3": "Chickpeas",
                "strIngredient4": "Vegetable Stock",
                "strIngredient5": "Cumin",
                "strIngredient6": "Garlic",
                "strIngredient7": "Salt",
                "strIngredient8": "Harissa Spice",
                "strIngredient9": "Pepper",
                "strIngredient10": "Lime",
                "strIngredient11": "",
                "strIngredient12": "",
                "strIngredient13": "",
                "strIngredient14": "",
                "strIngredient15": "",
                "strIngredient16": "",
                "strIngredient17": "",
                "strIngredient18": "",
                "strIngredient19": "",
                "strIngredient20": "",
                "strMeasure1": "2 tbs",
                "strMeasure2": "1 medium finely diced",
                "strMeasure3": "250g",
                "strMeasure4": "1.5L",
                "strMeasure5": "1 tsp ",
                "strMeasure6": "5 cloves",
                "strMeasure7": "1/2 tsp",
                "strMeasure8": "1 tsp ",
                "strMeasure9": "Pinch",
                "strMeasure10": "1/2 ",
                "strMeasure11": "",
                "strMeasure12": "",
                "strMeasure13": "",
                "strMeasure14": "",
                "strMeasure15": "",
                "strMeasure16": "",
                "strMeasure17": "",
                "strMeasure18": "",
                "strMeasure19": "",
                "strMeasure20": "",
                "strSource": "http://allrecipes.co.uk/recipe/43419/leblebi--tunisian-chickpea-soup-.aspx",
                "strImageSource": null,
                "strCreativeCommonsConfirmed": null,
                "dateModified": null,
                "rating": [1, 2, 3, 3, 1]
            },
        ]
    };

    const mockProps = {
        currentPageFilter: 0,
        selectedCategory: "Vegetarian",
        selectedAreas: ["Tunisian"],
        sortOption: "strMeal"
    };

    const mocks = [
        {
            request: {
                query: GET_MEALS,
                variables: {
                categories: mockProps.selectedCategory ? [mockProps.selectedCategory] : null,
                areas: mockProps.selectedAreas,
                offset: mockProps.currentPageFilter,
                sortField: mockProps.sortOption,
                },
            },
            result: {
                data: mockData 
            },
        }
    ]

    describe('DisplayRecipes Component', () => {
        it('renders recipe cards correctly', async () => {
          const { findAllByTestId } = render(
            <MockedProvider mocks={mocks} addTypename={false}>
              <DisplayRecipes 
                  currentPageFilter={mockProps.currentPageFilter}
                  selectedCategory={mockProps.selectedCategory}
                  selectedAreas={mockProps.selectedAreas}
                  sortOption={mockProps.sortOption}
              />
            </MockedProvider>
          );
      
          const recipeCards = await findAllByTestId('cypress-recipe-card-Vegetarian');
          
          expect(recipeCards.length).toEqual(2);
        });
    });