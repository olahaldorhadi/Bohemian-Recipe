// Out of scope for now

// import { Recipe } from '../../models/Recipe'
// import { IRecipe } from '../atoms/IRecipe'

// // Method which takes in a recipe object and
// function parseIngredients(recipe: IRecipe): React.JSX.Element {
//     const objectList: Array<React.JSX.Element> = []
//     let i = 1
//     while (i < 21 && recipe[`strIngredient${i}` as keyof IRecipe] !== '') {
//         objectList.push(
//             <li>
//                 {recipe[`strIngredient${i}` as keyof IRecipe]}{' '}
//                 {`strMeasure${i}` as keyof IRecipe}
//             </li>
//         )
//         i++
//     }
//     return (
//         <ul className="ingredients">
//             {objectList.map((ingredient: React.JSX.Element, index: number) => {
//                 return (
//                     <li key={`ingredient${index}`}>
//                         {ingredient} + " {}"
//                     </li>
//                 )
//             })}
//         </ul>
//     )
// }
