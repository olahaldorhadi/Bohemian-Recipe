import React from 'react'

export type IngredientBoxProps = {
  ingredients: string[];
  measures: string[];
};
export const IngredientBox: React.FC<IngredientBoxProps> = ({
  ingredients,
  measures
}) => {

    return (
        <div className="w-64 mx-auto border border-orange-400 rounded-lg p-4 ">
            <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
            <ul>
                {parseIngredients(ingredients, measures)}
            </ul>
        </div>
      )
    }

    function parseIngredients(ingredients: string[], measures: string[]): React.JSX.Element {
      const objectList: Array<React.JSX.Element> = []
      for (let i=0; i<21; i++){ 
        if (!(ingredients[i] === "")){
          objectList.push(
            <li key={i} className="mb-2 ">
              {measures[i]} {ingredients[i]}   
            </li>
          )}
        }
      return (
        <>
          {objectList}
        </>
      );
    }
  


export default IngredientBox
