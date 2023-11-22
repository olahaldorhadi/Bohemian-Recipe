import React from 'react'

const Footer: React.FC = () => {
    return (
        <footer
            className="bottom-0 left-0 w-full bg-black h-10 flex items-center justify-center"
            data-testid="cypress-footer"
        >
            <p className="text-orange-300 text-xs">
                {new Date().getFullYear()} Bohemian Recipe
            </p>
        </footer>
    )
}

export default Footer
