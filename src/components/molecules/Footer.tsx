import React from 'react'

const Footer: React.FC = () => {
    return (
        <footer className="bottom-0 left-0 w-full bg-black h-10 flex items-center justify-center">
            <p className="text-orange-300 text-xs">
                &copy; {new Date().getFullYear()} Bohemian Recipe
            </p>
        </footer>
    )
}

export default Footer
