// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import graphqlLoader from "vite-plugin-graphql-loader"; // SLETT OM DEN GJØR LIVET VANSKELIG

// export default defineConfig({
//     plugins: [
//         react(),
//         graphqlLoader() // SLETT OM DEN GJØR LIVET VANSKELIG
//     ],
// });

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
})
